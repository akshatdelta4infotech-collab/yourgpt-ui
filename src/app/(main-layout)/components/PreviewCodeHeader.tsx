"use client";

import { Eye, Code2, Maximize } from "lucide-react";
import { useState } from "react";

interface PreviewCodeHeaderProps {
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;
  previewComponent?: string; // Add this to identify which component to maximize
  hideTopBorder?: boolean; // Add this to conditionally hide top border
}

const PreviewCodeHeader = ({
  activeTab,
  setActiveTab,
  previewComponent,
  hideTopBorder = false,
}: PreviewCodeHeaderProps) => {
  const [isMaximizing, setIsMaximizing] = useState(false);

  const handleMaximize = () => {
    if (previewComponent) {
      setIsMaximizing(true);
      // Open the specific preview component in a new tab
      const url = `/preview/${previewComponent}`;
      window.open(url, "_blank", "noopener,noreferrer");

      // Reset the maximizing state after a short delay
      setTimeout(() => setIsMaximizing(false), 1000);
    }
  };
  return (
    <header className="relative w-full">
      {/* Full-width horizontal dotted lines */}
      <div className="absolute inset-0">
        {/* Top dotted line - conditionally rendered */}
        {!hideTopBorder && (
          <div
            className="absolute top-0 h-px border-t border-dotted border-border"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: "100vw",
            }}
          ></div>
        )}
        {/* Bottom dotted line */}
        <div
          className="absolute bottom-0 h-px border-b border-dotted border-border"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
          }}
        ></div>
      </div>

      {/* Header content */}
      <div className="relative w-full">
        <div className="flex items-center min-h-[48px] pl-4">
          <div className="flex items-center absolute left-4">
            {/* Preview Button */}
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "preview"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>

            {/* Code Button */}
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "code"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Code</span>
            </button>

            {/* Divider */}
            <span className="w-px h-6 border-l border-dotted border-border mx-2"></span>

            {/* Zoom */}
            <button
              onClick={handleMaximize}
              disabled={isMaximizing}
              className={`ml-2 p-2 rounded-md transition-colors duration-200 cursor-pointer ${
                isMaximizing
                  ? "bg-primary/20 text-primary"
                  : "hover:bg-muted hover:text-foreground"
              }`}
              title="Open in new tab"
            >
              <Maximize
                className={`w-4 h-4 ${isMaximizing ? "animate-pulse" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PreviewCodeHeader;
