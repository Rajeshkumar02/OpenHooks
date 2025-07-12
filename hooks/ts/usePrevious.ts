import { useEffect, useRef } from "react"

/**
 * usePrevious - A custom hook that stores the previous value of a given input.
 *
 * @template T
 * @param {T} value - The current value to track.
 *
 * @returns {(T | undefined)} - The value from the previous render, or `undefined` on the first render.
 *
 * @example
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * console.log(prevCount); // Logs previous value of count
 */
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current
};