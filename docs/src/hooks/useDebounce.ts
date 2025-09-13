import { useState, useEffect, useRef } from "react";

export type TimeUnit = "ms" | "s" | "min";

export interface DebounceOptions {
  /**
   * The delay before updating the debounced value
   */
  delay: number;
  /**
   * Time unit for the delay (milliseconds, seconds, minutes)
   * @default "ms"
   */
  unit?: TimeUnit;
  /**
   * Whether to trigger on the leading edge (immediately on first call)
   * @default false
   */
  leading?: boolean;
  /**
   * Whether to trigger on the trailing edge (after delay)
   * @default true
   */
  trailing?: boolean;
  /**
   * Maximum time to wait before forcing an update
   */
  maxWait?: number;
}

/**
 * Advanced useDebounce hook with configurable options
 *
 * @template T
 * @param {T} value - The value to debounce
 * @param {number | DebounceOptions} options - Delay in ms or advanced options
 * @returns {T} The debounced value
 *
 * @example
 * // Simple usage
 * const debounced = useDebounce(value, 300);
 *
 * // Advanced usage
 * const debounced = useDebounce(value, {
 *   delay: 1,
 *   unit: "s",
 *   leading: true,
 *   maxWait: 5000
 * });
 */
export function useDebounce<T>(
  value: T,
  options: number | DebounceOptions = 500
): T {
  const [debounced, setDebounced] = useState(value);
  const lastValueRef = useRef(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecRef = useRef<number>(0);

  // Parse options
  const config: DebounceOptions =
    typeof options === "number"
      ? { delay: options, unit: "ms", leading: false, trailing: true }
      : { unit: "ms", leading: false, trailing: true, ...options };

  // Convert delay to milliseconds
  const getDelayInMs = (delay: number, unit: TimeUnit = "ms"): number => {
    switch (unit) {
      case "s":
        return delay * 1000;
      case "min":
        return delay * 60 * 1000;
      default:
        return delay;
    }
  };

  const delayMs = getDelayInMs(config.delay, config.unit);
  const maxWaitMs = config.maxWait
    ? getDelayInMs(config.maxWait, config.unit)
    : undefined;

  useEffect(() => {
    const now = Date.now();
    lastValueRef.current = value;

    // Clear existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Leading edge execution
    if (config.leading && now - lastExecRef.current >= delayMs) {
      setDebounced(value);
      lastExecRef.current = now;
      return;
    }

    // Set up trailing edge execution
    if (config.trailing) {
      timeoutRef.current = setTimeout(() => {
        setDebounced(lastValueRef.current);
        lastExecRef.current = Date.now();
        if (maxTimeoutRef.current) {
          clearTimeout(maxTimeoutRef.current);
        }
      }, delayMs);
    }

    // Set up max wait timeout
    if (maxWaitMs && !maxTimeoutRef.current) {
      maxTimeoutRef.current = setTimeout(() => {
        setDebounced(lastValueRef.current);
        lastExecRef.current = Date.now();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }, maxWaitMs);
    }

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
        maxTimeoutRef.current = null;
      }
    };
  }, [value, delayMs, config.leading, config.trailing, maxWaitMs]);

  return debounced;
}
