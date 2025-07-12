import { useEffect } from "react"

/**
 * useClickOutside - A React hook that detects clicks outside a specified element
 * and triggers a provided callback function.
 *
 * @param {React.RefObject<HTMLElement>} ref - A reference to the target element.
 * @param {() => void} callback - A function to call when a click occurs outside the element.
 *
 * @returns {void} - This hook performs a side effect and does not return a value.
 *
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => setOpen(false));
 */
export function useClickOutside(
    ref: React.RefObject<HTMLElement>,
    callback: () => void
): void {
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }

        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [ref, callback]);
};