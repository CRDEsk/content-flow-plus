import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register Service Worker for PWA caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    // Check if service worker file exists before registering
    fetch('/sw.js', { method: 'HEAD' })
      .then(() => {
        // File exists, register it
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            if (import.meta.env.DEV) {
              console.log('Service Worker registered:', registration);
            }
          })
          .catch((error) => {
            // Silently fail if registration fails (file might not exist or other issues)
            if (import.meta.env.DEV) {
              console.error('Service Worker registration failed:', error);
            }
          });
      })
      .catch(() => {
        // Service worker file doesn't exist, skip registration silently
        // This is expected if PWA features are not yet implemented
      });
  });
}

try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  if (import.meta.env.DEV) {
    console.error("Failed to render app:", error);
  }
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: black; color: white; font-family: system-ui; padding: 20px; text-align: center;">
      <div>
        <h1 style="font-size: 24px; margin-bottom: 16px;">Error Loading Application</h1>
        <p style="color: #999; margin-bottom: 16px;">${error instanceof Error ? error.message : 'Unknown error'}</p>
        <p style="color: #666; font-size: 14px;">Please check the browser console for more details.</p>
      </div>
    </div>
  `;
}
