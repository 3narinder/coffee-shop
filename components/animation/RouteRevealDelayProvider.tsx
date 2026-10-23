"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { sectionRevealDuration } from "@/animations/transitions";
import type {
  RouteRevealDelayContextValue,
  RouteRevealDelayProviderProps,
} from "@/constants/types";

const RouteRevealDelayContext =
  createContext<RouteRevealDelayContextValue | null>(null);

export function RouteRevealDelayProvider({
  children,
}: RouteRevealDelayProviderProps) {
  const pathname = usePathname();
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const shouldDelayReveal = targetPath === pathname;

  useEffect(() => {
    if (!shouldDelayReveal) return;

    const timeout = window.setTimeout(
      () => setTargetPath(null),
      sectionRevealDuration * 2 * 1000,
    );

    return () => window.clearTimeout(timeout);
  }, [shouldDelayReveal]);

  const delayNextRoute = useCallback(
    (href: string) => {
      const target = href.split("#")[0];
      if (target && target !== pathname) setTargetPath(target);
    },
    [pathname],
  );

  const value = useMemo(
    () => ({ delayNextRoute, shouldDelayReveal }),
    [delayNextRoute, shouldDelayReveal],
  );

  return (
    <RouteRevealDelayContext.Provider value={value}>
      {children}
    </RouteRevealDelayContext.Provider>
  );
}

export function useRouteRevealDelay() {
  const context = useContext(RouteRevealDelayContext);

  if (!context) {
    throw new Error(
      "useRouteRevealDelay must be used inside RouteRevealDelayProvider.",
    );
  }

  return context;
}
