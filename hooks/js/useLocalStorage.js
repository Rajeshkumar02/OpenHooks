import { useState } from "react";

/**
 * Custom React hook to manage localStorage with state synchronization.
 *
 * @param {string} key - The localStorage key to read/write.
 * @param {*} initialValue - The initial value to use if nothing is stored.
 * @returns {[any, function]} - Returns the stored value and a setter function.
 */
export function useLocalStorage(key, initialValue) {
  // Initialize the state by reading from localStorage (only on client side)
  const [storedValue, setStoredValue] = useState(() => {
    // SSR safety check — return initialValue if running on server
    if (typeof window === "undefined") return initialValue;

    try {
      // Get the item from localStorage
      const item = window.localStorage.getItem(key);
      // Parse it if it exists, else return the initial value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If an error occurs, return the initial value
      console.warn("useLocalStorage: error reading key", key, error);
      return initialValue;
    }
  });

  /**
   * Setter function to update both state and localStorage.
   * Supports functional updates like React’s setState.
   */
  const setValue = (value) => {
    try {
      // Support function-based updates like React's useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Update React state
      setStoredValue(valueToStore);

      // Update localStorage only in browser environment
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn("useLocalStorage: error setting key", key, error);
    }
  };

  // Return the stored value and the setter function
  return [storedValue, setValue];
}
