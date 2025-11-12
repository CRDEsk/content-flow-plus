import { useEffect, useRef, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !mounted) return;

    let phi = 0.42; // Start centered on Europe
    const theta = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi,
      theta,
      dark: 0.85,
      diffuse: 2.0,
      mapSamples: 50000,
      mapBrightness: 10,
      baseColor: [0.08, 0.12, 0.18], // Dark base matching website theme
      markerColor: [0.98, 0.75, 0.15], // Golden yellow markers
      glowColor: [0.98, 0.75, 0.15], // Golden yellow glow
      markers: countries.map((country) => ({
        location: [country.lat, country.lng],
        size: 0.18,
      })),
      onRender: (state) => {
        // Slow continuous rotation
        phi += 0.002;
        state.phi = phi;
        state.theta = theta;
      },
    });

    globeRef.current = globe;

    return () => {
      globe.destroy();
    };
  }, [mounted]);

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

  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        className="relative w-full max-w-[520px] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.canvas
          ref={canvasRef}
          className="relative z-10"
          style={{
            width: "420px",
            height: "420px",
            maxWidth: "100%",
            aspectRatio: "1",
            display: "block",
            borderRadius: "50%",
            filter: "brightness(1.05) contrast(1.18)",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

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
      </motion.div>
    </div>
  );
};

export default GlobeComponent;
