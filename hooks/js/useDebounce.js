import { useState, useEffect } from "react"

/**
 * useDebounce - A custom hook that delays updating a value until after a specified delay.
 *
 * @param {*} value - The value to debounce.
 * @param {number} [delay=500] - The delay in milliseconds before updating the debounced value.
 *
 * @returns {*} - The debounced value.
 *
 * @example
 * const [search, setSearch] = useState("");
 * const debouncedSearch = useDebounce(search, 300);
 *
 * useEffect(() => {
 *   if (debouncedSearch) {
 *      fetchResults(debouncedSearchTerm);
 *   }
 * }, [debouncedSearch]);
 */
export function useDebounce(value, delay = 500) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay])

    return debounced;
};