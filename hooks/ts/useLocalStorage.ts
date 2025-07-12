import { useState } from "react";

/**
 * useLocalStorage<T> - A custom hook to sync state with localStorage in a type-safe way.
 *
 * @template T - The type of the stored value.
 * @param key - The localStorage key to use.
 * @param initialValue - The default value if nothing is stored or on error.
 * @returns A tuple containing the current value and a setter function.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize state with the value from localStorage (if available)
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Handle SSR (server-side rendering) by returning initial value
    if (typeof window === "undefined") return initialValue;

    try {
      // Attempt to retrieve item from localStorage
      const item = window.localStorage.getItem(key);
      // If item exists, parse and return it; otherwise use initial value
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      // Log and return initial value on any error (e.g., invalid JSON)
      console.warn("useLocalStorage: error reading key", key, error);
      return initialValue;
    }
  });

  /**
   * Updates both the React state and the localStorage value.
   *
   * @param value - The new value or a function that receives the current value and returns the new value.
   */
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Support functional updates similar to useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Update the React state
      setStoredValue(valueToStore);

      // Update localStorage only on the client
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn("useLocalStorage: error setting key", key, error);
    }
  };

  // Return the current value and the setter function as a read-only tuple
  return [storedValue, setValue] as const;
}
