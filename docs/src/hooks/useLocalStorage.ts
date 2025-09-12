import { useState } from "react";

/**
 * A React hook for persisting state in localStorage with type safety and SSR support.
 *
 * @template T The type of the value to store
 * @param key The localStorage key to use for storing the value
 * @param initialValue Initial value to use if nothing is stored in localStorage
 * @returns A tuple containing the current value and a setter function
 *
 * @example
 * ```tsx
 * // Basic usage with string
 * const [name, setName] = useLocalStorage("userName", "");
 *
 * // With complex object
 * const [settings, setSettings] = useLocalStorage("userSettings", {
 *   theme: "light",
 *   notifications: true
 * });
 *
 * // With functional updates
 * setSettings(prev => ({ ...prev, theme: "dark" }));
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
