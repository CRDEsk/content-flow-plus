/// <reference types="vite/client" />

interface Window {
  CRDScanner?: {
    open: () => void;
    close: () => void;
    isOpen: () => boolean;
  };
  CRDScannerConfig?: {
    showDefaultButton?: boolean;
    embedUrl?: string;
    popupBackground?: string;
    popupAccent?: string;
  };
}
