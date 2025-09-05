"use client";

import { useEffect, useState } from "react";
import { highlight } from "@/lib/highlighter";
import { Copy, Check } from "lucide-react";

type CodeViewProps = {
  code: string;
  language?: string;
};

export default function CodeView({ code, language = "tsx" }: CodeViewProps) {
  const [html, setHtml] = useState<string>("Loading...");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Additional preprocessing to ensure no empty lines and keep tags on same line
    const cleanCode = code
      .split("\n")
      .filter((line) => line.trim() !== "") // Remove empty lines
      .join("\n")
      .trim() // Remove leading/trailing whitespace
      // Keep opening tags on same line by joining lines that end with incomplete tags
      .replace(/\s*\n\s*>/g, ">") // Join closing > with previous line
      .replace(/\s*\n\s*\/>/g, " />") // Join self-closing /> with previous line
      // Keep props on same line for simple cases
      .replace(/(\w+)=\{\s*\n\s*/g, "$1={") // Join prop assignments
      .replace(/\s*\n\s*\}/g, "}"); // Join closing braces

    highlight(cleanCode, language).then(setHtml);
  }, [code, language]);

  const handleCopy = async () => {
    // Copy the cleaned code without empty lines and with tags on same line
    const cleanCode = code
      .split("\n")
      .filter((line) => line.trim() !== "")
      .join("\n")
      .trim()
      // Keep opening tags on same line by joining lines that end with incomplete tags
      .replace(/\s*\n\s*>/g, ">") // Join closing > with previous line
      .replace(/\s*\n\s*\/>/g, " />") // Join self-closing /> with previous line
      // Keep props on same line for simple cases
      .replace(/(\w+)=\{\s*\n\s*/g, "$1={") // Join prop assignments
      .replace(/\s*\n\s*\}/g, "}"); // Join closing braces

    await navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="relative w-full bg-card text-card-foreground text-left min-h-[50vh] sm:min-h-[60vh] max-h-[65vh] sm:max-h-[70vh]">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="
          absolute top-2 sm:top-3 right-2 sm:right-4 
          flex items-center gap-1 sm:gap-2 
          px-2 sm:px-3 py-1 sm:py-2 
          rounded-md bg-muted hover:bg-muted/80 transition 
          text-muted-foreground hover:text-foreground z-10
          text-xs sm:text-sm
          shadow-sm
        "
      >
        {copied ? (
          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
        ) : (
          <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
        )}
        <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        <span className="sm:hidden">{copied ? "✓" : ""}</span>
      </button>

      {/* Code block */}
      <div
        className="
    text-xs sm:text-sm
    h-full
    min-h-[50vh] sm:min-h-[60vh]
    max-h-[65vh] sm:max-h-[70vh]
    overflow-x-auto
    overflow-y-auto
    px-2 sm:px-4 pb-6 sm:pb-8 pt-4 sm:pt-6
    [&_pre]:h-full
    [&_pre]:overflow-visible
    [&_pre]:bg-transparent
    [&_pre]:border-0
    [&_pre]:rounded-none
    [&_pre]:p-0
    [&_pre]:m-0
    [&_pre]:whitespace-pre-wrap
    [&_pre]:word-break-break-word
    [&_code]:block
    [&_code]:p-0
    [&_code]:m-0
    [&_code]:bg-transparent
    [&_code]:w-full
    [&_code]:min-w-0
    [&_.line]:flex
    [&_.line]:items-start
    [&_.line]:min-h-[1.25em]
    [&_.line]:leading-relaxed
    [&_.line]:py-0.5
    [&_.line]:w-full
    [&_.line-number]:w-8 sm:[&_.line-number]:w-10
    [&_.line-number]:text-right
    [&_.line-number]:mr-4 sm:[&_.line-number]:mr-6
    [&_.line-number]:text-muted-foreground
    [&_.line-number:hover]:text-foreground
    [&_.line-number]:select-none
    [&_.line-number]:text-xs sm:[&_.line-number]:text-sm
    [&_.line-number]:flex-shrink-0
    [&_.line-number]:leading-relaxed
    [&_.line-number]:align-top
    [&_.line-number]:sticky
    [&_.line-number]:left-0
    [&_.line-number]:bg-card
    [&_.line-number]:z-10
    [&_.line-content]:flex-1
    [&_.line-content]:min-w-0
    [&_.line-content]:leading-relaxed
    [&_.line-content]:whitespace-pre-wrap
    [&_.line-content]:word-break-break-word
    [&_.line-content]:overflow-wrap-anywhere
  "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
