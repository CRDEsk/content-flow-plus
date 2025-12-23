import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SnowThemeContextType {
  snowEnabled: boolean;
  toggleSnow: () => void;
  setSnowEnabled: (enabled: boolean) => void;
  isHolidaySeason: boolean;
}

const SnowThemeContext = createContext<SnowThemeContextType | undefined>(undefined);

const STORAGE_KEY = "crd-snow-theme-enabled";

// Check if current date is within holiday season (Dec 1 - Jan 5)
const checkIsHolidaySeason = (): boolean => {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const day = now.getDate();
  
  // Enable from Dec 1st (month 11) to Jan 5th (month 0)
  if (month === 11) return true; // December
  if (month === 0 && day <= 5) return true; // January 1-5
  return false;
};

export const SnowThemeProvider = ({ children }: { children: ReactNode }) => {
  const isHolidaySeason = checkIsHolidaySeason();
  
  const [snowEnabled, setSnowEnabledState] = useState(() => {
    // Auto-disable outside holiday season
    if (!checkIsHolidaySeason()) return false;
    
    // Within season, check localStorage preference
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
    <SnowThemeContext.Provider value={{ snowEnabled, toggleSnow, setSnowEnabled, isHolidaySeason }}>
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
