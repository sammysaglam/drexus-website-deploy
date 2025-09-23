"use client";

import React from "react";

import { Card, CardBody } from "@heroui/react";

interface AsideProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Aside: React.FC<AsideProps> = ({ title, children, className = "" }) => {
  return (
    <Card className={`bg-gray-50 border border-gray-200 ${className}`}>
      <CardBody className="p-6">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-3 pb-3 border-b border-gray-200">
            {title}
          </h3>
        )}
        <div className="text-sm text-gray-700 space-y-3">{children}</div>
      </CardBody>
    </Card>
  );
};
