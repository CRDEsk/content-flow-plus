import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SnowThemeContextType {
  snowEnabled: boolean;
  toggleSnow: () => void;
  setSnowEnabled: (enabled: boolean) => void;
}

const SnowThemeContext = createContext<SnowThemeContextType | undefined>(undefined);

const STORAGE_KEY = "crd-snow-theme-enabled";

export const SnowThemeProvider = ({ children }: { children: ReactNode }) => {
  const [snowEnabled, setSnowEnabledState] = useState(() => {
    // Initialize from localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      // Default to true for the holiday season
      return stored === null ? true : stored === "true";
    }
    return true;
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(snowEnabled));
  }, [snowEnabled]);

  const toggleSnow = () => {
    setSnowEnabledState(prev => !prev);
  };

  const setSnowEnabled = (enabled: boolean) => {
    setSnowEnabledState(enabled);
  };

  return (
    <SnowThemeContext.Provider value={{ snowEnabled, toggleSnow, setSnowEnabled }}>
      {children}
    </SnowThemeContext.Provider>
  );
};

export const useSnowTheme = () => {
  const context = useContext(SnowThemeContext);
  if (!context) {
    throw new Error("useSnowTheme must be used within a SnowThemeProvider");
  }
  return context;
};
