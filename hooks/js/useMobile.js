import { useEffect, useState } from "react"

/**
 * useMobile - A custom hook that returns a boolean indicating whether the current
 * screen width is below a specified breakpoint (mobile view).
 *
 * @param {number} [breakpoint=768] - The screen width (in pixels) to treat as the mobile threshold.
 *
 * @returns {boolean} - Returns `true` if the viewport width is less than the breakpoint, otherwise `false`.
 *
 * @example
 * const isMobile = useMobile();
 * if (isMobile) {
 *   render mobile layout
 * }
 */
export function useMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    );

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < breakpoint);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
};