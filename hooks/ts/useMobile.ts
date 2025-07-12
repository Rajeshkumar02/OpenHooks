import { useEffect, useState } from "react"

/**
 * useMobile - A custom hook that determines if the viewport width is below a given breakpoint.
 *
 * @param {number} [breakpoint=768] - The pixel width below which the screen is considered "mobile".
 *
 * @returns {boolean} - Returns `true` if the screen width is less than the breakpoint, otherwise `false`.
 *
 * @example
 * const isMobile = useMobile();
 * if (isMobile) {
 *   render mobile layout
 * }
 */
export function useMobile(breakpoint: number = 768): boolean {
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