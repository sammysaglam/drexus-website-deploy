"use client";

import React from "react";

import { Avatar, Card, CardBody } from "@heroui/react";

interface AuthorCardProps {
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <Card className="mb-12 -mt-20 relative z-10">
      <CardBody className="p-6">
        <div className="flex items-center gap-4">
          <Avatar
            src={author.avatar}
            alt={author.name}
            size="lg"
            className="border-2 border-gray-200"
          />
          <div>
            <p className="text-sm text-gray-600">Research by</p>
            <p className="font-semibold text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-600">{author.title}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
