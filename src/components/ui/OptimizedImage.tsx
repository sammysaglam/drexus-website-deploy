import { useState } from "react";

import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fill = false,
  sizes,
  quality = 85,
  placeholder,
  blurDataURL,
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback for missing images
  const imageSrc = error ? "/images/placeholder.svg" : src;

  const imageProps = fill
    ? { fill: true, sizes: sizes || "100vw" }
    : { width: width || 800, height: height || 600 };

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""} ${className}`}>
      {isLoading && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
      )}
      <Image
        {...imageProps}
        src={imageSrc}
        alt={alt}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}

// Responsive image with art direction
export function ResponsiveImage({
  mobileSrc,
  desktopSrc,
  alt,
  mobileWidth = 400,
  mobileHeight = 300,
  desktopWidth = 800,
  desktopHeight = 600,
  className = "",
}: {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  mobileWidth?: number;
  mobileHeight?: number;
  desktopWidth?: number;
  desktopHeight?: number;
  className?: string;
}) {
  return (
    <>
      {/* Mobile Image */}
      <div className={`block md:hidden ${className}`}>
        <OptimizedImage
          src={mobileSrc}
          alt={alt}
          width={mobileWidth}
          height={mobileHeight}
          sizes="100vw"
        />
      </div>
      {/* Desktop Image */}
      <div className={`hidden md:block ${className}`}>
        <OptimizedImage
          src={desktopSrc}
          alt={alt}
          width={desktopWidth}
          height={desktopHeight}
          sizes="(min-width: 768px) 100vw"
        />
      </div>
    </>
  );
}
