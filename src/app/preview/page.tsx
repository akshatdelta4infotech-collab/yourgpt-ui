"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { previews } from "@/config/previews";

// Separate the component that uses useSearchParams
function PreviewContent() {
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

// Loading fallback component
function PreviewLoading() {
  return (
    <div className="p-8 text-center text-gray-500">Loading preview...</div>
  );
}

// Main page component with Suspense wrapper
export default function PreviewPage() {
  return (
    <Suspense fallback={<PreviewLoading />}>
      <PreviewContent />
    </Suspense>
  );
}
