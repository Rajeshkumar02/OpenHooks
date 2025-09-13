import { useState, useEffect } from "react";

type ScreenSize = "mobile" | "tablet" | "desktop" | "large";
type Orientation = "portrait" | "landscape";

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  screenSize: ScreenSize;
  orientation: Orientation;
  touchScreen: boolean;
  userAgent: {
    isIOS: boolean;
    isAndroid: boolean;
    isSafari: boolean;
    isChrome: boolean;
    isFirefox: boolean;
    isEdge: boolean;
  };
  viewport: {
    width: number;
    height: number;
  };
}

interface UseMobileOptions {
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
  desktopBreakpoint?: number;
}

const defaultOptions: Required<UseMobileOptions> = {
  mobileBreakpoint: 768,
  tabletBreakpoint: 1024,
  desktopBreakpoint: 1440,
};

export function useMobile(options: UseMobileOptions = {}): DeviceInfo {
  const { mobileBreakpoint, tabletBreakpoint, desktopBreakpoint } = {
    ...defaultOptions,
    ...options,
  };

  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    if (typeof window === "undefined") {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isLarge: false,
        screenSize: "desktop" as ScreenSize,
        orientation: "landscape" as Orientation,
        touchScreen: false,
        userAgent: {
          isIOS: false,
          isAndroid: false,
          isSafari: false,
          isChrome: false,
          isFirefox: false,
          isEdge: false,
        },
        viewport: { width: 1024, height: 768 },
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const userAgent = navigator.userAgent;

    const isMobile = width < mobileBreakpoint;
    const isTablet = width >= mobileBreakpoint && width < tabletBreakpoint;
    const isDesktop = width >= tabletBreakpoint && width < desktopBreakpoint;
    const isLarge = width >= desktopBreakpoint;

    const screenSize: ScreenSize = isMobile
      ? "mobile"
      : isTablet
      ? "tablet"
      : isLarge
      ? "large"
      : "desktop";

    const orientation: Orientation = width > height ? "landscape" : "portrait";

    const touchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return {
      isMobile,
      isTablet,
      isDesktop,
      isLarge,
      screenSize,
      orientation,
      touchScreen,
      userAgent: {
        isIOS: /iPad|iPhone|iPod/.test(userAgent),
        isAndroid: /Android/.test(userAgent),
        isSafari: /Safari/.test(userAgent) && !/Chrome/.test(userAgent),
        isChrome: /Chrome/.test(userAgent),
        isFirefox: /Firefox/.test(userAgent),
        isEdge: /Edge|Edg/.test(userAgent),
      },
      viewport: { width, height },
    };
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const userAgent = navigator.userAgent;

      const isMobile = width < mobileBreakpoint;
      const isTablet = width >= mobileBreakpoint && width < tabletBreakpoint;
      const isDesktop = width >= tabletBreakpoint && width < desktopBreakpoint;
      const isLarge = width >= desktopBreakpoint;

      const screenSize: ScreenSize = isMobile
        ? "mobile"
        : isTablet
        ? "tablet"
        : isLarge
        ? "large"
        : "desktop";

      const orientation: Orientation =
        width > height ? "landscape" : "portrait";

      const touchScreen =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLarge,
        screenSize,
        orientation,
        touchScreen,
        userAgent: {
          isIOS: /iPad|iPhone|iPod/.test(userAgent),
          isAndroid: /Android/.test(userAgent),
          isSafari: /Safari/.test(userAgent) && !/Chrome/.test(userAgent),
          isChrome: /Chrome/.test(userAgent),
          isFirefox: /Firefox/.test(userAgent),
          isEdge: /Edge|Edg/.test(userAgent),
        },
        viewport: { width, height },
      });
    };

    // Update on window resize
    window.addEventListener("resize", updateDeviceInfo);

    // Update on orientation change
    window.addEventListener("orientationchange", updateDeviceInfo);

    // Initial update
    updateDeviceInfo();

    return () => {
      window.removeEventListener("resize", updateDeviceInfo);
      window.removeEventListener("orientationchange", updateDeviceInfo);
    };
  }, [mobileBreakpoint, tabletBreakpoint, desktopBreakpoint]);

  return deviceInfo;
}
