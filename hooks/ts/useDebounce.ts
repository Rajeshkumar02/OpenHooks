import { useState, useEffect } from "react"

/**
 * useDebounce - A custom hook that delays updating the given value until after a specified delay.
 *
 * @template T
 * @param {T} value - The value to debounce.
 * @param {number} [delay=500] - The delay in milliseconds before the debounced value is updated.
 *
 * @returns {T} - The latest debounced value.
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *      fetchResults(debouncedSearchTerm);
 *   }
 * }, [debouncedSearchTerm]);
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounced;
};