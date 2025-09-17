"use client";

import React, { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { previews } from "@/config/previews";
import PreviewCodeHeader from "../components/PreviewCodeHeader";
import CodeView from "../components/CodeView";

type Viewport = "mobile" | "tablet" | "desktop";
type ActiveTab = "preview" | "code";

const viewportWidths: Record<Viewport, number> = {
  mobile: 420,
  tablet: 768,
  desktop: 0, // dynamically filled
};

export default function PreviewPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [desktopWidth, setDesktopWidth] = useState<number>(0);

  // ✅ Track container width for desktop
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setDesktopWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ✅ State for each preview
  const [previewStates, setPreviewStates] = useState<
    Record<
      string,
      {
        activeTab: ActiveTab;
        viewport: Viewport;
        hideHeader: boolean;
        width: number;
      }
    >
  >(() =>
    previews.reduce(
      (acc, p) => ({
        ...acc,
        [p.id]: {
          activeTab: "preview",
          viewport: "desktop",
          hideHeader: false,
          width: 0, // filled after we know desktopWidth
        },
      }),
      {}
    )
  );

  // ✅ Update each preview width when desktopWidth changes
  useEffect(() => {
    if (desktopWidth > 0) {
      setPreviewStates((prev) => {
        const updated = { ...prev };
        for (const key in updated) {
          if (updated[key].viewport === "desktop") {
            updated[key].width = desktopWidth;
          }
        }
        return updated;
      });
    }
  }, [desktopWidth]);

  // ✅ Handle viewport toggle
  const handleViewportChange = (id: string, newViewport: Viewport) => {
    setPreviewStates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        viewport: newViewport,
        width:
          newViewport === "desktop"
            ? desktopWidth
            : viewportWidths[newViewport],
      },
    }));
  };

  const panels = previews.map((p) => ({
    id: p.id,
    label: p.label,
    src: `/preview?id=${p.id}`,
    code: p.code,
  }));

  // ✅ Different height for CTAs vs landing pages
  const getHeightFor = (id: string) =>
    id.startsWith("cta-") ? "500px" : "900px";

  return (
    <div ref={containerRef} className="w-full overflow-y-hidden">
      {panels.map(({ id, src, label, code }) => {
        const state = previewStates[id];
        const heightPx = getHeightFor(id);

        return (
          <div key={id} className="w-full mb-16 overflow-hidden">
            {/* === Header Controls === */}
            {!state?.hideHeader && (
              <PreviewCodeHeader
                activeTab={state?.activeTab}
                setActiveTab={(tab) =>
                  setPreviewStates((prev) => ({
                    ...prev,
                    [id]: { ...prev[id], activeTab: tab },
                  }))
                }
                previewComponent={id}
                hideTopBorder={false}
                onViewportChange={(vp) => handleViewportChange(id, vp)}
              />
            )}

            {/* === PREVIEW === */}
            {state?.activeTab === "preview" ? (
              <div
                className="relative w-full border overflow-hidden shadow-sm"
                style={{ height: heightPx }}
              >
                <Rnd
                  size={{
                    width:
                      state?.width ||
                      (state?.viewport === "desktop"
                        ? desktopWidth
                        : viewportWidths[state?.viewport]),
                    height: heightPx,
                  }}
                  minWidth={420}
                  maxWidth={desktopWidth || "100%"}
                  bounds="parent"
                  disableDragging={true}
                  enableResizing={{ right: true }}
                  onResizeStop={(_, __, ref) => {
                    const newWidth = ref.offsetWidth;
                    setPreviewStates((prev) => ({
                      ...prev,
                      [id]: { ...prev[id], width: newWidth },
                    }));
                  }}
                  resizeHandleStyles={{
                    right: {
                      width: "14px",
                      right: "-7px",
                      top: 0,
                      bottom: 0,
                      cursor: "col-resize",
                      background: "transparent",
                    },
                  }}
                  className="overflow-hidden mx-auto"
                  style={{
                    position: "relative",
                    border: "none",
                    background: "white",
                  }}
                >
                  <iframe
                    src={src}
                    title={label}
                    className="w-full h-full border-0 block z-[1000]"
                    scrolling="yes"
                    loading="lazy"
                  />
                </Rnd>
              </div>
            ) : (
              // === CODE VIEW ===
              <div className="border shadow-sm " style={{ height: heightPx }}>
                <CodeView code={code} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
