import { useEffect, useRef } from "react"

/**
 * useTimeout - A custom React hook that calls a function after a specified delay.
 *
 * @param {() => void} callback - The function to be executed after the timeout.
 * @param {number | null} delay - The delay in milliseconds. If `null`, the timeout is not set.
 *
 * @returns {void}
 *
 * @example
 * useTimeout(() => {
 *   console.log("Executed after 2 seconds");
 * }, 2000);
 */
export function useTimeout(callback: () => void, delay: number | null): void {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay === null) return;
        const id = setTimeout(() => savedCallback.current(), delay);
        return () => clearTimeout(id);
    }, [delay]);
};