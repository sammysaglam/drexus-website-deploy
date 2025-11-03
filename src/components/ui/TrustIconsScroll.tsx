"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import { trustIcons } from "@/lib/trust-icons";

interface TrustIconsScrollProps {
  className?: string;
}

export const TrustIconsScroll = ({ className = "" }: TrustIconsScrollProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`flex items-center justify-center space-x-4 sm:space-x-8 ${className}`}>
        {trustIcons.slice(0, 6).map((icon, index) => (
          <div key={index} className="h-8 w-16 sm:h-12 sm:w-24 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  // Create enough duplicates for seamless infinite loop
  const duplicatedIcons = [...trustIcons, ...trustIcons, ...trustIcons, ...trustIcons];

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full overflow-hidden">
        <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 py-2 sm:py-4 animate-scroll-seamless">
          {duplicatedIcons.map((icon, index) => (
            <div
              key={`${icon.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-8 w-16 sm:h-10 sm:w-20 md:h-12 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={96}
                height={48}
                className="max-h-8 sm:max-h-10 md:max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
