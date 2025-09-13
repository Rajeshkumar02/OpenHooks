import { useEffect, useRef } from "react";

/**
 * A React hook that executes a function after a specified delay.
 * Automatically cleans up the timeout when the component unmounts or dependencies change.
 *
 * @param callback The function to execute after the delay
 * @param delay The delay in milliseconds. Use `null` to cancel the timeout.
 *
 * @example
 * ```tsx
 * // Basic usage
 * useTimeout(() => {
 *   console.log("This runs after 1 second");
 * }, 1000);
 *
 * // Conditional timeout
 * const [isActive, setIsActive] = useState(true);
 * useTimeout(() => {
 *   console.log("Only runs when active");
 * }, isActive ? 2000 : null);
 *
 * // Auto-save example
 * useTimeout(() => {
 *   saveFormData();
 * }, hasUnsavedChanges ? 3000 : null);
 * ```
 */
export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout
  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}
