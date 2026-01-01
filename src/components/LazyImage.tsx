import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage = ({ src, alt, className, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      // Fallback to src even on error
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img
      {...props}
      src={imageSrc || src}
      alt={alt}
      className={`${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading="lazy"
      data-loaded={isLoaded}
    />
  );
};

