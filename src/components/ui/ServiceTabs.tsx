"use client";

import React from "react";

import { Tabs, Tab } from "@heroui/react";

interface ServiceTabsProps {
  selected: string;
  onSelectionChange: (key: string) => void;
  tabs?: Array<{
    key: string;
    title: string;
  }>;
}

export const ServiceTabs = ({
  selected,
  onSelectionChange,
  tabs = [
    { key: "overview", title: "Overview" },
    { key: "deliverables", title: "Deliverables" },
    { key: "timeline", title: "Timeline" },
    { key: "proof", title: "Proof" },
  ],
}: ServiceTabsProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <Tabs
          aria-label="Service details"
          selectedKey={selected}
          onSelectionChange={(key) => onSelectionChange(key as string)}
          classNames={{
            tabList:
              "gap-0 w-full relative rounded-xl p-1 sm:p-1 bg-white shadow-lg border border-gray-200/50 backdrop-blur-sm",
            cursor: "w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg rounded-lg",
            tab: "flex-1 px-2 sm:px-3 lg:px-6 py-2.5 sm:py-3 h-auto rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-50/80 text-center",
            tabContent:
              "group-data-[selected=true]:text-white group-data-[selected=false]:text-gray-700 font-medium text-sm sm:text-sm tracking-wide transition-colors duration-300",
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.key} title={tab.title} />
          ))}
        </Tabs>
      </div>
    </section>
  );
};
