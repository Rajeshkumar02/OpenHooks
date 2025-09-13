"use client";

import React from "react";
import { useMobile } from "@/hooks/useMobile";
import { Smartphone, Tablet, Monitor } from "lucide-react";

export default function ExampleComponent() {
  const deviceInfo = useMobile();

  const getDeviceIcon = () => {
    if (deviceInfo.isMobile) return <Smartphone className="w-5 h-5" />;
    if (deviceInfo.isTablet) return <Tablet className="w-5 h-5" />;
    return <Monitor className="w-5 h-5" />;
  };

  const getDeviceType = () => {
    if (deviceInfo.isMobile) return "Mobile";
    if (deviceInfo.isTablet) return "Tablet";
    if (deviceInfo.isLarge) return "Large Desktop";
    return "Desktop";
  };

  return (
    <div className="p-2 sm:p-4 space-y-6 w-full max-w-xl mx-auto">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold flex items-center justify-center gap-2">
        {getDeviceIcon()}
        useMobile Demo
      </h2>

      {/* Main Device Type */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-sm font-medium">Detected Device</span>
        <span className="px-3 py-0.5 rounded-full bg-muted font-semibold text-sm">
          {getDeviceType()}
        </span>
      </div>

      {/* Responsive Status (flex on desktop, stacked on mobile) */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <span className="flex flex-col items-center gap-1">
          <span className="opacity-70 text-xs">Mobile</span>
          <span
            className={`font-mono ${
              deviceInfo.isMobile ? "text-primary font-bold" : "opacity-60"
            }`}
          >
            {deviceInfo.isMobile ? "Yes" : "No"}
          </span>
        </span>
        <span className="flex flex-col items-center gap-1">
          <span className="opacity-70 text-xs">Tablet</span>
          <span
            className={`font-mono ${
              deviceInfo.isTablet ? "text-primary font-bold" : "opacity-60"
            }`}
          >
            {deviceInfo.isTablet ? "Yes" : "No"}
          </span>
        </span>
        <span className="flex flex-col items-center gap-1">
          <span className="opacity-70 text-xs">Desktop</span>
          <span
            className={`font-mono ${
              deviceInfo.isDesktop ? "text-primary font-bold" : "opacity-60"
            }`}
          >
            {deviceInfo.isDesktop ? "Yes" : "No"}
          </span>
        </span>
        <span className="flex flex-col items-center gap-1">
          <span className="opacity-70 text-xs">Large</span>
          <span
            className={`font-mono ${
              deviceInfo.isLarge ? "text-primary font-bold" : "opacity-60"
            }`}
          >
            {deviceInfo.isLarge ? "Yes" : "No"}
          </span>
        </span>
      </div>

      {/* Footer */}
      <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
        Resize your browser to see device type update dynamically.
        <br />
        <span className="text-xs opacity-75">
          Mobile: &lt;768px | Tablet: 768–1024px | Desktop: 1024–1440px | Large:
          &gt;1440px
        </span>
      </p>
    </div>
  );
}
