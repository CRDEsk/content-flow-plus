import { useState, useEffect } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PasswordProtectionProps {
  children: React.ReactNode;
  correctPassword: string;
  storageKey?: string;
}

export const PasswordProtection = ({
  children,
  correctPassword,
  storageKey = "presentation_authenticated",
}: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored === "true") {
      setIsAuthenticated(true);
    }
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem(storageKey, "true");
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#E5C268]/25 via-[#E5C268]/10 to-transparent border-2 border-[#E5C268]/40 shadow-[0_10px_60px_rgba(229,194,104,0.2)] mb-6">
            <Lock className="w-10 h-10 text-[#E5C268]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Présentation Protégée</h1>
          <p className="text-zinc-400">Veuillez entrer le mot de passe pour accéder</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Mot de passe"
              className={`h-14 text-lg pr-12 bg-zinc-900/50 border-zinc-800/60 text-white placeholder:text-zinc-500 focus:border-[#E5C268]/60 ${
                error ? "border-red-500/60 focus:border-red-500/60" : ""
              }`}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#E5C268] transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">Mot de passe incorrect</p>
          )}

          <Button
            type="submit"
            className="w-full h-14 text-lg bg-[#E5C268] hover:bg-[#E5C268]/90 text-black font-semibold"
          >
            Accéder à la présentation
          </Button>
        </form>
      </div>
    </div>
  );
};
