"use client";

import {
  Eye,
  Code2,
  Maximize,
  Smartphone,
  Tablet,
  Monitor,
} from "lucide-react";
import { useState } from "react";

interface PreviewCodeHeaderProps {
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;
  previewComponent?: string; // The component ID (e.g., "cta-default", "landing-one")
  hideTopBorder?: boolean;
  onViewportChange?: (viewport: "mobile" | "tablet" | "desktop") => void;
}

const PreviewCodeHeader = ({
  activeTab,
  setActiveTab,
  previewComponent,
  hideTopBorder = false,
  onViewportChange,
}: PreviewCodeHeaderProps) => {
  const [isMaximizing, setIsMaximizing] = useState(false);
  const [activeViewport, setActiveViewport] = useState<
    "mobile" | "tablet" | "desktop"
  >("desktop");

  const mapping: Record<string, string> = {
    // CTA mappings
    "ctasections-default": "cta-default",
    "ctasections-email": "cta-email",
    "ctasections-variant": "cta-variant",
    "ctasections-variant2": "cta-variant2",
    "ctasections-cta": "cta-variant",
    "ctasections-cta2": "cta-variant2",

    // Landing mappings
    landingpageone: "landing-one",
    landingpagetwo: "landing-two",
    landingpagethree: "landing-three",
  };

  const handleMaximize = () => {
    if (previewComponent) {
      setIsMaximizing(true);

      // Apply the mapping to convert generated ID to preview config ID
      const mappedId = mapping[previewComponent] || previewComponent;
      const url = `/preview?id=${mappedId}&clean=true`; // ✅ always open clean view

      console.log("Original component ID:", previewComponent);
      console.log("Mapped ID:", mappedId);
      console.log("Opening URL:", url);

      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => setIsMaximizing(false), 1000);
    }
  };

  const handleViewportChange = (viewport: "mobile" | "tablet" | "desktop") => {
    setActiveViewport(viewport);
    if (onViewportChange) {
      onViewportChange(viewport);
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
        <div className="flex items-center justify-between min-h-[48px] px-4">
          <div className="flex items-center">
            {/* Preview Button */}
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "preview"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground cursor-pointer"
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
                  : "text-muted-foreground hover:text-foreground cursor-pointer"
              }`}
            >
              <Code2 className="w-4 h-4 hover:bg-muted " />
              <span>Code</span>
            </button>

            {/* Divider */}
            <span className="w-px h-6 border-l border-dotted border-border mx-2"></span>

            {/* Maximize Button */}
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

          {/* Right side - Viewport Controls (only show for preview tab) */}
          {activeTab === "preview" && (
            <div className="flex items-center space-x-1">
              {/* Mobile View Button */}
              <button
                onClick={() => handleViewportChange("mobile")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  activeViewport === "mobile"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
                }`}
                title="Mobile view"
              >
                <Smartphone className="w-4 h-4" />
              </button>

              {/* Tablet View Button */}
              <button
                onClick={() => handleViewportChange("tablet")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  activeViewport === "tablet"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
                }`}
                title="Tablet view"
              >
                <Tablet className="w-4 h-4" />
              </button>

              {/* Desktop View Button */}
              <button
                onClick={() => handleViewportChange("desktop")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  activeViewport === "desktop"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
                }`}
                title="Desktop view"
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default PreviewCodeHeader;
