import { useEffect, useRef, useState, memo } from "react";
import createGlobe from "cobe";

const GlobeInternational = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0.42);
  const initializedRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !mounted || initializedRef.current) return;

    let phi = phiRef.current;
    const theta = 0;
    let animationId: number | null = null;

    const initGlobe = () => {
      if (!canvas || globeRef.current || initializedRef.current) return;

      try {
        const isMobileDevice = window.innerWidth < 768;
        const dpr = isMobileDevice ? 1 : Math.min(window.devicePixelRatio || 1, 2);
        const size = isMobileDevice ? 400 : 800;
        const samples = isMobileDevice ? 20000 : 40000;
        
        const globe = createGlobe(canvas, {
          devicePixelRatio: dpr,
          width: size,
          height: size,
          phi,
          theta,
          dark: 0.9,
          diffuse: 2.0,
          mapSamples: samples,
          mapBrightness: 10,
          baseColor: [0.05, 0.05, 0.1],
          markerColor: [0.66, 0.33, 0.97], // Purple
          glowColor: [0.66, 0.33, 0.97], // Purple
          markers: [], // No markers/countries
          onRender: (state) => {
            if (!globeRef.current) return;
            phi += 0.001; // Slower but smoother
            phiRef.current = phi;
            state.phi = phi;
            state.theta = theta;
          },
        });

        globeRef.current = globe;
        initializedRef.current = true;
        setTimeout(() => {
          setGlobeReady(true);
        }, 300);
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('Error creating globe:', error);
        }
        initializedRef.current = false;
        setTimeout(() => {
          if (!globeRef.current && !initializedRef.current && canvas) {
            initGlobe();
          }
        }, 1000);
      }
    };

    const rafId = requestAnimationFrame(() => {
      initGlobe();
    });

    const handleContextLost = (e: Event) => {
      e.preventDefault();
    };

    const handleContextRestored = () => {
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
    };
  }, [mounted]);

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

  if (!mounted) {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="relative w-full max-w-[520px] flex items-center justify-center h-[420px]">
          <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center px-4">
      <div className="relative w-full max-w-[520px] flex items-center justify-center">
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-10 transition-opacity duration-700 ${globeReady ? 'opacity-100' : 'opacity-0'}`}
            width={isMobile ? 400 : 800}
            height={isMobile ? 400 : 800}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              filter: "brightness(1.05) contrast(1.18)",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          />
          {!globeReady && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 rounded-full">
              <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(GlobeInternational);

