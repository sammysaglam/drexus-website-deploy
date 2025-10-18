"use client";

import React from "react";

import { Card, CardBody } from "@heroui/react";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error" | "tip";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({
  type = "info",
  title,
  children,
  className = "",
}) => {
  const typeStyles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      titleColor: "text-blue-900",
      textColor: "text-blue-800",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: (
        <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      titleColor: "text-yellow-900",
      textColor: "text-yellow-800",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      titleColor: "text-green-900",
      textColor: "text-green-800",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
      titleColor: "text-red-900",
      textColor: "text-red-800",
    },
    tip: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      ),
      titleColor: "text-purple-900",
      textColor: "text-purple-800",
    },
  };

  const styles = typeStyles[type];

  return (
    <Card className={`${styles.bg} ${styles.border} border mb-2 ${className}`}>
      <CardBody className="p-4">
        <div className="flex">
          <div className="flex-shrink-0">{styles.icon}</div>
          <div className="ml-3 flex-1">
            {title && (
              <h3 className={`text-sm font-semibold ${styles.titleColor} mb-1`}>{title}</h3>
            )}
            <div className={`text-sm ${styles.textColor}`}>{children}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
