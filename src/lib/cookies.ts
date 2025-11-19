// Cookie utility functions

/**
 * Set a cookie
 */
export const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const isSecure = window.location.protocol === 'https:';
  const secureFlag = isSecure ? ';Secure' : '';
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax${secureFlag}`;
};

/**
 * Get a cookie value
 */
export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Delete a cookie
 */
export const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

/**
 * Check if user has accepted cookies (including customized with analytics)
 */
export const hasCookieConsent = (): boolean => {
  const consent = getCookie('cookie-consent');
  if (consent === 'accepted') return true;
  
  // Check if customized consent includes analytics
  if (consent === 'customized') {
    const prefs = localStorage.getItem('cookie-preferences');
    if (prefs) {
      const parsed = JSON.parse(prefs);
      return parsed.analytics === true;
    }
  }
  
  return false;
};

/**
 * Check if user has declined cookies
 */
export const hasDeclinedCookies = (): boolean => {
  const consent = getCookie('cookie-consent');
  return consent === 'declined';
};

/**
 * Get cookie consent status
 */
export const getCookieConsent = (): 'accepted' | 'declined' | null => {
  const consent = getCookie('cookie-consent');
  if (consent === 'accepted' || consent === 'declined') {
    return consent;
  }
  return null;
};

