"use client";

import React from "react";

import { Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";

interface DownloadCTAProps {
  title: string;
  description: string;
  fileType?: string;
  fileSize?: string;
  buttonText?: string;
  downloadUrl: string;
  className?: string;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({
  title,
  description,
  fileType = "PDF",
  fileSize,
  buttonText = "Download Now",
  downloadUrl,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`bg-gradient-to-r from-navy-900 to-navy-800 text-white border-0 ${className}`}
      >
        <CardBody className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-5L9 2H4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {fileType}
                </span>
                {fileSize && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {fileSize}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button
                as="a"
                href={downloadUrl}
                download
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold"
              >
                {buttonText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
