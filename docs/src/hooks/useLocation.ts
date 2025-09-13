import { useState, useEffect, useCallback } from "react";

interface LocationState {
  pathname: string;
  search: string;
  hash: string;
  host: string;
  hostname: string;
  origin: string;
  port: string;
  protocol: string;
  href: string;
}

interface UseLocationReturn {
  location: LocationState;
  searchParams: URLSearchParams;
  hash: string;
  navigate: (url: string, replace?: boolean) => void;
  back: () => void;
  forward: () => void;
  reload: (forceReload?: boolean) => void;
  setSearchParam: (key: string, value: string) => void;
  removeSearchParam: (key: string) => void;
  setHash: (hash: string) => void;
}

export function useLocation(): UseLocationReturn {
  const [location, setLocation] = useState<LocationState>(() => {
    if (typeof window === "undefined") {
      return {
        pathname: "",
        search: "",
        hash: "",
        host: "",
        hostname: "",
        origin: "",
        port: "",
        protocol: "",
        href: "",
      };
    }
    return {
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      host: window.location.host,
      hostname: window.location.hostname,
      origin: window.location.origin,
      port: window.location.port,
      protocol: window.location.protocol,
      href: window.location.href,
    };
  });

  const [searchParams, setSearchParams] = useState<URLSearchParams>(() => {
    if (typeof window === "undefined") {
      return new URLSearchParams();
    }
    return new URLSearchParams(window.location.search);
  });

  const updateLocation = useCallback(() => {
    if (typeof window === "undefined") return;

    const newLocation: LocationState = {
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      host: window.location.host,
      hostname: window.location.hostname,
      origin: window.location.origin,
      port: window.location.port,
      protocol: window.location.protocol,
      href: window.location.href,
    };

    setLocation(newLocation);
    setSearchParams(new URLSearchParams(window.location.search));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleLocationChange = () => {
      updateLocation();
    };

    // Listen for popstate events (back/forward buttons)
    window.addEventListener("popstate", handleLocationChange);

    // Listen for pushstate/replacestate events
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      handleLocationChange();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      handleLocationChange();
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [updateLocation]);

  const navigate = useCallback(
    (url: string, replace: boolean = false) => {
      if (typeof window === "undefined") return;

      if (replace) {
        window.history.replaceState(null, "", url);
      } else {
        window.history.pushState(null, "", url);
      }
      updateLocation();
    },
    [updateLocation]
  );

  const back = useCallback(() => {
    if (typeof window === "undefined") return;
    window.history.back();
  }, []);

  const forward = useCallback(() => {
    if (typeof window === "undefined") return;
    window.history.forward();
  }, []);

  const reload = useCallback((forceReload: boolean = false) => {
    if (typeof window === "undefined") return;
    if (forceReload) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  }, []);

  const setSearchParam = useCallback(
    (key: string, value: string) => {
      if (typeof window === "undefined") return;

      const newSearchParams = new URLSearchParams(window.location.search);
      newSearchParams.set(key, value);
      const newUrl = `${
        window.location.pathname
      }?${newSearchParams.toString()}${window.location.hash}`;
      navigate(newUrl, true);
    },
    [navigate]
  );

  const removeSearchParam = useCallback(
    (key: string) => {
      if (typeof window === "undefined") return;

      const newSearchParams = new URLSearchParams(window.location.search);
      newSearchParams.delete(key);
      const search = newSearchParams.toString();
      const newUrl = `${window.location.pathname}${search ? `?${search}` : ""}${
        window.location.hash
      }`;
      navigate(newUrl, true);
    },
    [navigate]
  );

  const setHash = useCallback(
    (hash: string) => {
      if (typeof window === "undefined") return;

      const newHash = hash.startsWith("#") ? hash : `#${hash}`;
      const newUrl = `${window.location.pathname}${window.location.search}${newHash}`;
      navigate(newUrl, true);
    },
    [navigate]
  );

  return {
    location,
    searchParams,
    hash: location.hash,
    navigate,
    back,
    forward,
    reload,
    setSearchParam,
    removeSearchParam,
    setHash,
  };
}
