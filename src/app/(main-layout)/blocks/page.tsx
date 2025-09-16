"use client";

import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { previews } from "@/config/previews";

type Dim = { height: number; width: number };

export default function PreviewPlayground() {
  const [iframeDims, setIframeDims] = useState<Record<string, Dim>>({});

  // ✅ Generate panels from config - FIXED URL
  const panels = previews.map((p) => ({
    id: p.id,
    label: p.label,
    // Fixed: Remove /cta from the path since your structure is preview/page.tsx
    src: `/preview?id=${p.id}`,
  }));

  return (
    <div className="w-full overflow-y-hidden">
      {panels.map(({ id, src, label }) => {
        const dims = iframeDims[src];

        // Conditional: CTAs vs Landing pages → different default heights
        const isCTA = id.startsWith("cta-");
        let heightPx: string;

        if (isCTA) {
          heightPx = dims?.height
            ? `${dims.height}px`
            : {
                "cta-default": "500px",
                "cta-email": "500px",
                "cta-variant": "600px",
                "cta-variant2": "600px",
              }[id] || "600px";
        } else {
          heightPx = dims?.height ? `${dims.height}px` : "800px";
        }

        return (
          <div key={id} className="w-full mb-10">
            <div
              className="relative w-full border overflow-hidden shadow-sm"
              style={{ height: heightPx }}
            >
              <Rnd
                default={{ x: 0, y: 0, width: "100%", height: heightPx }}
                size={{ width: "100%", height: heightPx }}
                minWidth={420}
                maxWidth="100%"
                bounds="parent"
                disableDragging={true}
                enableResizing={{
                  top: false,
                  right: true,
                  bottom: false,
                  left: false,
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
                className="overflow-hidden"
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
          </div>
        );
      })}

      {/* Footer */}
      <div className="mx-[8vw] mt-16 mb-16">
        <hr className="border-t" />
        <p className="text-center text-sm mt-4">
          Drag the handle on the right edge to resize components and test
          responsiveness
        </p>
      </div>
    </div>
  );
}
