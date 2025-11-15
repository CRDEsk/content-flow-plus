import { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import createGlobe from "cobe";

interface Country {
  name: string;
  nameFr: string;
  lat: number;
  lng: number;
  role: string;
  emoji: string;
}

const countries: Country[] = [
  { name: "France", nameFr: "France", lat: 48.8566, lng: 2.3522, role: "Siège principal", emoji: "🇫🇷" },
  { name: "Switzerland", nameFr: "Suisse", lat: 46.2044, lng: 6.1432, role: "Support juridique", emoji: "🇨🇭" },
  { name: "Estonia", nameFr: "Estonie", lat: 59.437, lng: 24.7536, role: "Partenaire légal", emoji: "🇪🇪" },
  { name: "Moldova", nameFr: "Moldavie", lat: 47.0104, lng: 28.8638, role: "Escalade technique", emoji: "🇲🇩" },
  { name: "Panama", nameFr: "Panama", lat: 8.9824, lng: -79.5199, role: "Partenaire légal", emoji: "🇵🇦" },
  { name: "Russia", nameFr: "Russie", lat: 55.7558, lng: 37.6173, role: "Partenaire stratégique", emoji: "🇷🇺" },
];

const GlobeComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0.42);
  const initializedRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);

  // Initialize on mount only
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize globe only once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !mounted || initializedRef.current) return;

    let phi = phiRef.current;
    const theta = 0;
    let animationId: number | null = null;

    const initGlobe = () => {
      if (!canvas || globeRef.current || initializedRef.current) return;

      try {
        // Use device pixel ratio, capped at 2 for performance
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const globe = createGlobe(canvas, {
          devicePixelRatio: dpr,
          width: 800,
          height: 800,
          phi,
          theta,
          dark: 0.85,
          diffuse: 2.0,
          mapSamples: 40000, // Balanced for all browsers
          mapBrightness: 10,
          baseColor: [0.08, 0.12, 0.18],
          markerColor: [0.98, 0.75, 0.15],
          glowColor: [0.98, 0.75, 0.15],
          markers: countries.map((country) => ({
            location: [country.lat, country.lng],
            size: 0.18,
          })),
          onRender: (state) => {
            if (!globeRef.current) return; // Safety check
            phi += 0.002; // Universal rotation speed
            phiRef.current = phi;
            state.phi = phi;
            state.theta = theta;
          },
        });

        globeRef.current = globe;
        initializedRef.current = true;
        // Mark as ready after a short delay to ensure rendering has started
        setTimeout(() => {
          setGlobeReady(true);
        }, 300);
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('Error creating globe:', error);
        }
        initializedRef.current = false;
        // Retry after a delay only if not already initialized
        setTimeout(() => {
          if (!globeRef.current && !initializedRef.current && canvas) {
            initGlobe();
          }
        }, 1000);
      }
    };

    // Use requestAnimationFrame to ensure canvas is fully ready
    const rafId = requestAnimationFrame(() => {
      initGlobe();
    });

    // Handle context loss - prevent default to keep context
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      if (import.meta.env.DEV) {
        console.warn('WebGL context lost');
      }
    };

    const handleContextRestored = () => {
      if (import.meta.env.DEV) {
        console.log('WebGL context restored');
      }
      // Reinitialize if context was lost
      if (!globeRef.current && canvas && initializedRef.current) {
        initializedRef.current = false;
        setTimeout(() => {
          initGlobe();
        }, 100);
      }
    };

    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      // Don't destroy here - only on component unmount
    };
  }, [mounted]);

  // Cleanup only on unmount
  useEffect(() => {
    return () => {
      if (globeRef.current) {
        try {
          globeRef.current.destroy();
        } catch (error) {
          // Ignore errors during cleanup
        }
        globeRef.current = null;
        initializedRef.current = false;
      }
    };
  }, []);

  const partnerLayout: Array<{
    country: Country;
    position: { x: number; y: number };
    side: "left" | "right";
  }> = [
    { country: countries[0], position: { x: -6, y: 16 }, side: "left" },
    { country: countries[1], position: { x: -6, y: 36 }, side: "left" },
    { country: countries[2], position: { x: -6, y: 56 }, side: "left" },
    { country: countries[5], position: { x: -6, y: 76 }, side: "left" },
    { country: countries[3], position: { x: 95, y: 32 }, side: "right" },
    { country: countries[4], position: { x: 95, y: 58 }, side: "right" },
  ];

  if (!mounted) {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="relative w-full max-w-[520px] flex items-center justify-center h-[420px]">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative w-full max-w-[520px] flex items-center justify-center">
        <div className="relative w-[420px] h-[420px]">
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-10 transition-opacity duration-700 ${globeReady ? 'opacity-100' : 'opacity-0'}`}
            width={800}
            height={800}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              filter: "brightness(1.05) contrast(1.18)",
            }}
          />
          {!globeReady && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 rounded-full">
              <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}
        </div>

        <div className="absolute inset-0 pointer-events-none z-20">
          {partnerLayout.map(({ country, position, side }, index) => {
            const isRight = side === "right";
            
            return (
              <motion.div
                key={country.name}
                className="absolute"
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
                initial={{ opacity: 0, x: isRight ? 18 : -18, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.45 + index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A552]/45 bg-black/65 backdrop-blur-sm"
                  style={{
                    minWidth: "170px",
                    boxShadow: "0 20px 35px rgba(0,0,0,0.35)",
                    justifyContent: isRight ? "flex-end" : "flex-start",
                    textAlign: isRight ? "right" : "left",
                  }}
                >
                  {!isRight && <span className="text-base leading-none">{country.emoji}</span>}
                  <div className={isRight ? "pr-1" : "pl-1"}>
                    <p className="text-[12px] font-semibold text-white tracking-[0.12em] uppercase leading-tight">
                      {country.nameFr}
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.32em] text-zinc-400 leading-tight">
                      {country.role}
                    </p>
                  </div>
                  {isRight && <span className="text-base leading-none">{country.emoji}</span>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(GlobeComponent);
