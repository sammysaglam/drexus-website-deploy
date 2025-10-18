"use client";

import React, { useEffect, useState } from "react";

import { Modal, ModalContent, Spinner } from "@heroui/react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isIOS, setIsIOS] = useState(false);

  // Detect iOS
  useEffect(() => {
    const userAgent =
      navigator.userAgent ||
      navigator.vendor ||
      (window as unknown as { opera?: string }).opera ||
      "";
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: boolean }).MSStream;
    setIsIOS(isIOSDevice);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  // iOS-specific fixes for viewport and keyboard handling
  useEffect(() => {
    if (isOpen) {
      // Store original styles for restoration
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyPosition = document.body.style.position;
      const originalBodyWidth = document.body.style.width;
      const originalBodyHeight = document.body.style.height;

      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";

      // iOS-specific fixes
      if (isIOS) {
        // Add iOS-specific viewport meta tag to prevent zoom
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
          viewportMeta.setAttribute(
            "content",
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, interactive-widget=resizes-content"
          );
        }

        // Prevent iOS bounce scrolling
        (document.body.style as { webkitOverflowScrolling?: string }).webkitOverflowScrolling =
          "touch";
        document.body.style.overscrollBehavior = "none";

        // Add iOS-specific class to body
        document.body.classList.add("ios-keyboard-fix");
      }

      // Cleanup function
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.position = originalBodyPosition;
        document.body.style.width = originalBodyWidth;
        document.body.style.height = originalBodyHeight;

        if (isIOS) {
          (document.body.style as { webkitOverflowScrolling?: string }).webkitOverflowScrolling =
            "";
          document.body.style.overscrollBehavior = "";
          document.body.classList.remove("ios-keyboard-fix");

          // Restore original viewport meta tag
          const viewportMeta = document.querySelector('meta[name="viewport"]');
          if (viewportMeta) {
            viewportMeta.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
            );
          }
        }
      };
    }
  }, [isOpen, isIOS]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        base: "fixed inset-0 z-50 max-w-[98vw] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto h-[95dvh] top-5 left-1/2 transform -translate-x-1/2",
        backdrop: "bg-black/60 backdrop-blur-sm",
      }}
      hideCloseButton={true}
      scrollBehavior="normal"
      placement="center"
      size="5xl"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: 0,
            opacity: 0,
            scale: 0.95,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent className="p-0 h-[95dvh] max-h-[95dvh] sm:mt-0 mt-4">
        <div className="relative bg-white rounded-sm shadow-2xl h-full flex flex-col overflow-hidden booking-modal-ios-fix modal-mobile-fix">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-1 right-1 z-20 w-8 h-8 bg-transparent hover:bg-white/10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="white" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Header Section */}
          <div className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white p-3 sm:p-4 md:p-6 lg:px-6 lg:py-8 rounded-t-sm flex-shrink-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-2">
                <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-1 sm:mb-2">
                  Schedule Your Strategy Call
                </h2>
                <p className="text-blue-100 text-sm sm:text-base md:text-lg">
                  Let's discuss how we can help accelerate your business growth
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-navy-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative bg-white flex-1 flex flex-col">
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10 rounded-b-2xl">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                    <Spinner size="lg" color="white" />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-700 font-medium text-lg mb-2">
                      Loading your booking calendar...
                    </p>
                    <p className="text-gray-500 text-sm">This will just take a moment</p>
                  </div>
                </div>
              </div>
            )}

            {/* Motion booking iframe with iOS fixes */}
            <iframe
              src="https://app.usemotion.com/meet/anika-leila/meeting"
              className="w-full flex-1 border-0 bg-transparent rounded-b-2xl"
              title="Book a call with Drexus"
              loading="lazy"
              allowFullScreen
              onLoad={handleIframeLoad}
              style={{
                fontSize: "16px",
                transform: "scale(1)",
                transformOrigin: "top left",
                width: "100%",
                height: "100%",
                WebkitTextSizeAdjust: "100%",
                textSizeAdjust: "100%",
                WebkitTransform: "translateZ(0)",
                // iOS-specific fixes
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain",
                touchAction: "pan-x pan-y",
                // Additional iOS fixes
                ...(isIOS && {
                  position: "relative",
                  zIndex: 1,
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  WebkitPerspective: "1000px",
                  perspective: "1000px",
                }),
              }}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
