import { useState } from "react"

/**
 * useClipboard - A custom React hook that provides a way to copy text to the clipboard
 * and a flag indicating whether the copy was successful.
 *
 * @returns {{
 *   copy: (text: string) => void;
 *   copied: boolean;
 * }} - An object containing the `copy` function and the `copied` state.
 *
 * @example
 * const { copy, copied } = useClipboard();
 * copy("Hello World");
 * console.log(copied); // true for 1.5 seconds
 */
export function useClipboard(): {
    copy: (text: string) => void
    copied: boolean
} {
    const [copied, setCopied] = useState(false)

    /**
     * Copies the provided text to the clipboard.
     *
     * @param {string} text - The text you want to copy to the clipboard.
     */
    const copy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        });
    };

    return { copy, copied };
};