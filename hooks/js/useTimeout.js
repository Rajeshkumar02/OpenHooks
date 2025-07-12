import { useEffect, useRef } from "react"

/**
 * useTimeout - A custom hook that triggers a callback function after a specified delay.
 *
 * @param {Function} callback - The function to execute after the timeout.
 * @param {number | null} delay - Delay in milliseconds before executing the callback.
 *                                If `null`, the timeout is not set.
 *
 * @returns {void}
 *
 * @example
 * useTimeout(() => {
 *   console.log("This runs after 1 second");
 * }, 1000);
 */
export function useTimeout(callback, delay) {
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