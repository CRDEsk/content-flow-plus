// Security utilities for input sanitization and validation

/**
 * Sanitize HTML input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format and ensure HTTPS
 */
export const isValidHTTPSUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "https:";
  } catch {
    return false;
  }
};

/**
 * Ensure external links use HTTPS
 */
export const ensureHTTPS = (url: string): string => {
  if (!url) return url;
  
  // If it's already a full URL
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url.replace("http://", "https://");
  }
  
  // If it's a relative URL, return as is
  if (url.startsWith("/") || url.startsWith("#")) {
    return url;
  }
  
  // Otherwise, assume it needs https://
  return `https://${url}`;
};

/**
 * Rate limiting for form submissions
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove attempts outside the time window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }

  getRemainingTime(identifier: string): number {
    const attempts = this.attempts.get(identifier) || [];
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = attempts[0];
    const now = Date.now();
    const elapsed = now - oldestAttempt;
    
    return Math.max(0, this.windowMs - elapsed);
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const formRateLimiter = new RateLimiter(5, 60000); // 5 attempts per minute

/**
 * Sanitize form data
 */
export const sanitizeFormData = (data: Record<string, any>): Record<string, string> => {
  const sanitized: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      sanitized[key] = sanitizeInput(value.trim());
    } else {
      sanitized[key] = String(value).trim();
    }
  }
  
  return sanitized;
};

