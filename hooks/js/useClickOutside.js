import { useEffect } from "react"

/**
 * useClickOutside - Detects clicks outside a referenced element and triggers a callback.
 *
 * @param {React.RefObject<HTMLElement>} ref - A React ref pointing to the target element.
 * @param {Function} callback - A function to run when a click is detected outside the element.
 *
 * @returns {void} - This hook performs a side effect and returns nothing.
 */
export function useClickOutside(ref, callback) {
    useEffect(() => {
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            };
        };

        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [ref, callback])
};