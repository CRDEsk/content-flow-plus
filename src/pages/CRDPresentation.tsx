import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CRDPresentationOriginal from "./CRDPresentationOriginal";

const CORRECT_PASSWORD = "240307";

const CRDPresentation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already authenticated in session
  useEffect(() => {
    const auth = sessionStorage.getItem("crd-presentation-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("crd-presentation-auth", "true");
      setError("");
    } else {
      setError("Mot de passe incorrect");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30">
                <Lock className="w-8 h-8 text-[#E5C268]" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 text-center">
              Pitch Deck CRD
            </h1>
            <p className="text-zinc-400 text-center mb-6">
              Veuillez entrer le mot de passe pour accéder à la présentation
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Mot de passe"
                  className="w-full bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#E5C268]"
                  autoFocus
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-[#E5C268] hover:bg-[#E5C268]/90 text-black font-semibold"
              >
                Accéder à la présentation
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return <CRDPresentationOriginal />;
};

export default CRDPresentation;
