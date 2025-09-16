"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { previews } from "@/config/previews";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const clean = searchParams.get("clean") === "true";

  const preview = previews.find((p) => p.id === id);

  if (!preview) {
    return (
      <div className="p-8 text-center text-gray-500">
        No preview found for <b>{id}</b>
      </div>
    );
  }

  return (
    <div className="w-full h-full">{preview.render({ hideHeader: clean })}</div>
  );
}
