export type BrandTheme = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

const THEME_MAP: Record<string, BrandTheme> = {
  default: {
    from: "#F9D976",
    via: "#F39F86",
    to: "#F9D976",
    accent: "#F6C56B",
  },
  creators: {
    from: "#FDE68A",
    via: "#FB923C",
    to: "#F97316",
    accent: "#F97316",
  },
  agencies: {
    from: "#93C5FD",
    via: "#3B82F6",
    to: "#1D4ED8",
    accent: "#60A5FA",
  },
  international: {
    from: "#DDD6FE",
    via: "#C084FC",
    to: "#A855F7",
    accent: "#C084FC",
  },
  legal: {
    from: "#FDE68A",
    via: "#FACC15",
    to: "#F59E0B",
    accent: "#FBBF24",
  },
};

const normalizePath = (pathname: string) => pathname.toLowerCase();

export const getBrandTheme = (
  pathname: string,
  options?: { usePurpleTheme?: boolean }
): BrandTheme => {
  const path = normalizePath(pathname);

  if (options?.usePurpleTheme || path.includes("international")) {
    return THEME_MAP.international;
  }

  if (path.startsWith("/pour-agences")) {
    return THEME_MAP.agencies;
  }

  if (path.startsWith("/pour-createurs")) {
    return THEME_MAP.creators;
  }

  if (
    path.startsWith("/tarifs") ||
    path.includes("escalade") ||
    path.includes("legal")
  ) {
    return THEME_MAP.legal;
  }

  return THEME_MAP.default;
};

