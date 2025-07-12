import { useEffect, useRef } from "react"

/**
 * usePrevious - A custom hook that stores the previous value of a given input.
 *
 * @param {*} value - The current value to track.
 *
 * @returns {*} - The previous value before the last render.
 *
 * @example
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * console.log(prevCount); // Logs the previous count value
 */
export function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};