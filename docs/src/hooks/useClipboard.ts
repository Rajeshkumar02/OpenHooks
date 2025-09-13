import { useState, useCallback } from "react";

interface UseClipboardReturn {
  isCopied: boolean;
  copyToClipboard: (text: string) => Promise<boolean>;
  clearCopied: () => void;
}

export function useClipboard(resetTime: number = 2000): UseClipboardReturn {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (text: string): Promise<boolean> => {
      if (!navigator.clipboard) {
        // Fallback for older browsers
        try {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          const successful = document.execCommand("copy");
          document.body.removeChild(textArea);

          if (successful) {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), resetTime);
            return true;
          }
          return false;
        } catch (err) {
          console.error("Failed to copy text: ", err);
          return false;
        }
      }

      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), resetTime);
        return true;
      } catch (err) {
        console.error("Failed to copy text: ", err);
        return false;
      }
    },
    [resetTime]
  );

  const clearCopied = useCallback(() => {
    setIsCopied(false);
  }, []);

  return { isCopied, copyToClipboard, clearCopied };
}
