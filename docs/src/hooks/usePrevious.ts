import { useRef, useEffect } from "react";

/**
 * A React hook that returns the previous value of a given value.
 *
 * @template T The type of the value to track
 * @param value The current value to track
 * @returns The previous value, or undefined on the first render
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState(0);
 * const previousCount = usePrevious(count);
 *
 * // On first render: previousCount is undefined
 * // After count changes: previousCount is the previous value
 *
 * useEffect(() => {
 *   if (previousCount !== undefined) {
 *     console.log(`Count changed from ${previousCount} to ${count}`);
 *   }
 * }, [count, previousCount]);
 * ```
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
