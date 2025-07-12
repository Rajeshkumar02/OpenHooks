import { useState } from "react"

/**
 * useClipboard - A custom hook to copy text to the user's clipboard.
 *
 * @returns {{
 *   copy: (text: string) => void,
 *   copied: boolean
 * }} - `copy` triggers the copy action; `copied` indicates if copy was successful recently.
 *
 * @example
 * const { copy, copied } = useClipboard();
 * copy("Hello, World!");
 * console.log(copied); // true for 1.5 seconds
 */
export function useClipboard() {
    const [copied, setCopied] = useState(false)

    /**
     * Copies the given text to the clipboard and sets the `copied` flag to true temporarily.
     *
     * @param {string} text - The text to copy to the clipboard.
     */
    const copy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        });
    };

    return { copy, copied };
};