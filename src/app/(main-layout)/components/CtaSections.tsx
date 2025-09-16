"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { Mail, ChevronRight, ArrowRight } from "lucide-react";
import CodeView from "./CodeView";
import PreviewCodeHeader from "./PreviewCodeHeader";

// Define props type for variant
type StartBuildingUIProps = {
  variant?: "default" | "email" | "cta" | "cta2";
  code?: string;
  isFirstInstance?: boolean; // Add this to identify the first CTA instance
  hideHeader?: boolean;
};

const StartBuildingUI = ({
  variant = "default",
  code = "",
  isFirstInstance = false,
  hideHeader = false,
}: StartBuildingUIProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const sendHeight = () => {
      const height = document.body.scrollHeight;
      window.parent.postMessage(
        { type: "SET_IFRAME_HEIGHT", src: window.location.pathname, height },
        "*"
      );
    };

    sendHeight();
    window.addEventListener("resize", sendHeight);
    return () => window.removeEventListener("resize", sendHeight);
  }, []);

  // Helper function to get container width based on viewport
  const getContainerWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-sm";
      case "tablet":
        return "max-w-3xl";
      case "desktop":
        return "w-full";
      default:
        return "w-full";
    }
  };
  // In CtaSections.tsx
  const getCtaPreviewId = () => {
    if (variant === "default") return "ctasections-default";
    if (variant === "email") return "ctasections-email";
    if (variant === "cta") return "ctasections-cta";
    if (variant === "cta2") return "ctasections-cta2";
    return "ctasections-default";
  };

  const getGridSize = () => {
    switch (viewport) {
      case "mobile":
        return "39px 39px";
      case "tablet":
        return "60px 60px";
      case "desktop":
        return "100px 100px";
      default:
        return "100px 100px";
    }
  };

  // Helper function to get container alignment based on viewport
  const getContainerAlignment = () => {
    return viewport === "desktop" ? "mx-auto" : "mx-0";
  };

  const codeDefault = `import { Button } from "@/components/ui/button";
export default function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center py-16">
      <div className="w-full px-6">
        <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
          Start Building
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Libero sapiente aliquam quibusdam aspernatur.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-base font-medium h-10 rounded-md">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-muted hover:border-border px-6 py-2 text-base font-medium h-10 rounded-md bg-background"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
`;

  const codeEmail = `import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
export default function CallToActionEmail() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center py-16">
      <div className="w-full px-6">
        <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
          Start Building
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Libero sapiente aliquam quibusdam aspernatur.
        </p>
        <div className="relative w-full max-w-lg mx-auto">
          <span className="absolute inset-y-0 left-4 flex items-center text-muted-foreground pointer-events-none">
            <Mail className="w-5 h-5" />
          </span>
          <input
            type="email"
            placeholder="Your email address"
            className={
              "w-full h-14 bg-background border border-border " +
              "rounded-2xl pl-10 pr-28 text-sm text-foreground " +
              "placeholder-muted-foreground focus:outline-none"
            }
          />
          <Button className="absolute top-1/2 -translate-y-1/2 right-4 h-9 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
`;
  const codeCTA = `import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export default function CtaDesign() {
  return (
    <section
      className="relative w-full mx-auto flex items-center justify-center overflow-hidden min-h-[60vh] py-16"
      style={{ background: "var(--cta1-bg)" }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: \`linear-gradient(var(--cta1-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--cta1-grid-color) 1px, transparent 1px)\`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
          style={{ color: "var(--cta1-heading)" }}
        >
          Your next lending <br /> product awaits
        </h1>
        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--cta1-subheading)" }}
        >
          For those who want more from their lending products, there's{" "}
          <br />
          Canopy. Get started today and never look back.
        </p>
        <Button
          className="font-medium px-8 py-3 rounded-full text-base transition-all duration-200 transform hover:scale-105"
          style={{
            backgroundColor: "var(--cta1-button-bg)",
            color: "var(--cta1-button-text)",
          }}
          size="lg"
        >
          Start now
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
`;

  const codeCTA2 = `import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
export default function HostingHeroSection() {
  return (
    <section className="w-full h-full relative mx-auto overflow-hidden flex items-center justify-center">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--cta2-bg-gradient)" }}
      ></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: \`linear-gradient(var(--cta2-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--cta2-grid-color) 1px, transparent 1px)\`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-foreground/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-foreground/10 to-transparent"></div>

      {/* Additional vertical lines near center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-12 w-px h-full bg-gradient-to-b from-transparent via-foreground/15 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform translate-x-12 w-px h-full bg-gradient-to-b from-transparent via-foreground/15 to-transparent"></div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-border rounded-lg transform rotate-12"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 border border-border transform -rotate-12"></div>
      <div className="absolute top-1/2 left-10 w-2 h-32 bg-gradient-to-b from-primary/30 to-transparent transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-10 w-2 h-24 bg-gradient-to-t from-secondary/30 to-transparent transform -translate-y-1/2"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center">
        <div className="w-full px-6">
          {/* Top badge */}
          <div className="mb-12">
            <Button
              variant="secondary"
              className="rounded-full px-6 py-2 text-sm backdrop-blur-sm"
              style={{
                backgroundColor: "var(--cta2-button-dark-bg)",
                color: "var(--cta2-button-dark-text)",
                borderColor: "var(--border)",
              }}
            >
              Flexible Plans for You
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 max-w-5xl mx-auto leading-tight"
            style={{ color: "var(--cta2-heading)" }}
          >
            Deploy your website <br /> in seconds, not hours
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--cta2-subheading)" }}
          >
            With our state of the art, cutting edge, we are so back
            kinda hosting services,
            <br /> you can deploy your website in seconds.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              className="px-8 py-3 rounded-full text-base transition-all duration-200 transform hover:scale-105 min-w-[140px]"
              style={{
                backgroundColor: "var(--cta2-button-dark-bg)",
                color: "var(--cta2-button-dark-text)",
              }}
              size="lg"
            >
              Start a project
            </Button>

            <Button
              variant="secondary"
              className="px-8 py-3 rounded-full text-base transition-all duration-200 transform hover:scale-105 min-w-[140px]"
              style={{
                backgroundColor: "var(--cta2-button-light-bg)",
                color: "var(--cta2-button-light-text)",
              }}
              size="lg"
            >
              Book a call
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-card/20 to-transparent"></div>

      {/* Lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
`;

  // Get the preview component name based on variant
  const getPreviewComponent = () => {
    switch (variant) {
      case "email":
        return "ctasections-email";
      case "cta":
        return "ctasections-cta";
      case "cta2":
        return "ctasections-cta2";
      default:
        return "ctasections";
    }
  };

  return (
    <div className="w-full h-screen">
      {/* Conditionally render PreviewCodeHeader based on prop */}
      {!hideHeader && (
        <PreviewCodeHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          previewComponent={getCtaPreviewId()}
          hideTopBorder={variant === "default" && isFirstInstance}
          onViewportChange={setViewport}
        />
      )}

      {/* Main content - full width to vertical borders */}
      <div className="w-full h-full overflow-hidden">
        {hideHeader || activeTab === "preview" ? (
          <div
            className={`w-full ${getContainerWidth()} ${getContainerAlignment()} min-w-0`}
          >
            {variant === "default" ? (
              <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center py-16">
                <div className="w-full px-6">
                  {/* Responsive Heading */}
                  <h1
                    className={
                      viewport === "mobile"
                        ? "text-3xl text-foreground mb-4 leading-tight"
                        : viewport === "tablet"
                        ? "text-5xl text-foreground mb-6 leading-tight"
                        : "text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 leading-tight"
                    }
                  >
                    Start Building
                  </h1>

                  {/* Responsive Paragraph */}
                  <p
                    className={
                      viewport === "mobile"
                        ? "text-base text-muted-foreground mb-6 px-3"
                        : viewport === "tablet"
                        ? "text-lg text-muted-foreground mb-8 px-4 max-w-xl mx-auto"
                        : "text-lg sm:text-xl text-muted-foreground mb-12 px-6 max-w-2xl mx-auto"
                    }
                  >
                    Libero sapiente aliquam quibusdam aspernatur.
                  </p>

                  {/* Responsive Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      className={
                        viewport === "mobile"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium h-10 rounded-md w-full sm:w-auto"
                          : viewport === "tablet"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-base font-medium h-10 rounded-md"
                          : "bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium h-12 rounded-md"
                      }
                    >
                      Get Started
                    </Button>

                    <Button
                      variant="outline"
                      className={
                        viewport === "mobile"
                          ? "border-border text-foreground hover:bg-muted hover:border-border px-4 py-2 text-sm font-medium h-10 rounded-md w-full sm:w-auto bg-background"
                          : viewport === "tablet"
                          ? "border-border text-foreground hover:bg-muted hover:border-border px-6 py-2 text-base font-medium h-10 rounded-md bg-background"
                          : "border-border text-foreground hover:bg-muted hover:border-border px-8 py-3 text-lg font-medium h-12 rounded-md bg-background"
                      }
                    >
                      Book Demo
                    </Button>
                  </div>
                </div>
              </div>
            ) : variant === "email" ? (
              <div className="flex flex-col items-center justify-center h-screen w-full text-center py-16">
                <div className="w-full px-6">
                  {/* Responsive Heading */}
                  <h1
                    className={
                      viewport === "mobile"
                        ? "text-3xl  text-foreground mb-4 leading-tight"
                        : viewport === "tablet"
                        ? "text-5xl text-foreground mb-6 leading-tight"
                        : "text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 leading-tight"
                    }
                  >
                    Start Building
                  </h1>

                  {/* Responsive Paragraph */}
                  <p
                    className={
                      viewport === "mobile"
                        ? "text-base text-muted-foreground mb-6 px-3"
                        : viewport === "tablet"
                        ? "text-lg text-muted-foreground mb-8 px-4 max-w-xl mx-auto"
                        : "text-lg sm:text-xl text-muted-foreground mb-12 px-6 max-w-2xl mx-auto"
                    }
                  >
                    Libero sapiente aliquam quibusdam aspernatur.
                  </p>

                  {/* Responsive Email Form */}
                  <div
                    className={
                      viewport === "mobile"
                        ? "relative w-full max-w-sm mx-auto"
                        : viewport === "tablet"
                        ? "relative w-full max-w-md mx-auto"
                        : "relative w-full max-w-lg mx-auto"
                    }
                  >
                    <span className="absolute inset-y-0 left-4 flex items-center text-muted-foreground pointer-events-none">
                      <Mail className="w-5 h-5" />
                    </span>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={
                        viewport === "mobile"
                          ? "w-full h-12 bg-background border border-border rounded-xl pl-10 pr-24 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
                          : viewport === "tablet"
                          ? "w-full h-14 bg-background border border-border rounded-xl pl-10 pr-28 text-base text-foreground placeholder-muted-foreground focus:outline-none"
                          : "w-full h-16 bg-background border border-border rounded-2xl pl-12 pr-32 text-base lg:text-lg text-foreground placeholder-muted-foreground focus:outline-none"
                      }
                    />
                    <Button
                      className={
                        viewport === "mobile"
                          ? "absolute top-1/2 -translate-y-1/2 right-3 h-9 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                          : viewport === "tablet"
                          ? "absolute top-1/2 -translate-y-1/2 right-4 h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                          : "absolute top-1/2 -translate-y-1/2 right-4 h-11 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-base"
                      }
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            ) : variant === "cta" ? (
              <section
                className={`relative w-full h-full mx-auto flex items-center justify-center overflow-hidden py-12 sm:py-16   ${getContainerWidth()} ${getContainerAlignment()}`}
                style={{ background: "var(--cta1-bg) " }}
              >
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `
          linear-gradient(var(--cta1-grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--cta1-grid-color) 1px, transparent 1px)
        `,
                      backgroundSize: getGridSize(), //responsive helper
                      backgroundRepeat: "repeat",
                      backgroundPosition: "top left",
                    }}
                  />
                </div>

                {/* Main content */}
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-xl sm:max-w-2xl mx-auto ">
                  <h1
                    className={
                      viewport === "mobile"
                        ? "text-2xl font-light mb-6 leading-tight px-2"
                        : viewport === "tablet"
                        ? "text-4xl font-light mb-8 leading-tight px-4"
                        : "text-4xl sm:text-5xl lg:text-7xl font-light mb-8 leading-tight"
                    }
                    style={{ color: "var(--cta1-heading)" }}
                  >
                    Your next lending <br /> product awaits
                  </h1>

                  <p
                    className={
                      viewport === "mobile"
                        ? "text-sm mb-8 max-w-md mx-auto leading-relaxed px-2"
                        : viewport === "tablet"
                        ? "text-base mb-12 max-w-2xl mx-auto leading-relaxed px-4"
                        : "text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                    }
                    style={{ color: "var(--cta1-subheading)" }}
                  >
                    For those who want more from their lending products, there's{" "}
                    <br />
                    Canopy. Get started today and never look back.
                  </p>

                  <Button
                    className={
                      viewport === "mobile"
                        ? "px-4 py-2 text-xs rounded-full font-medium transition-all duration-200 transform hover:scale-105 w-full max-w-xs"
                        : viewport === "tablet"
                        ? "px-6 py-3 text-sm rounded-full font-medium transition-all duration-200 transform hover:scale-105 w-auto"
                        : "px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 transform hover:scale-105"
                    }
                    style={{
                      backgroundColor: "var(--cta1-button-bg)",
                      color: "var(--cta1-button-text)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--cta1-button-bg-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--cta1-button-bg)";
                    }}
                    size="lg"
                  >
                    Start now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </section>
            ) : (
              // 🔹 CTA2 design version

              <section className="w-full h-screen relative mx-auto overflow-hidden flex items-center justify-center">
                {/* Background with gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: "var(--cta2-bg-gradient)" }}
                ></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `linear-gradient(var(--cta2-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--cta2-grid-color) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  ></div>
                </div>

                {/* Decorative vertical lines */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
                <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-foreground/10 to-transparent"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-foreground/10 to-transparent"></div>

                {/* Additional vertical lines near center */}
                <div className="absolute top-0 left-1/2 transform -translate-x-12 w-px h-full bg-gradient-to-b from-transparent via-foreground/15 to-transparent"></div>
                <div className="absolute top-0 left-1/2 transform translate-x-12 w-px h-full bg-gradient-to-b from-transparent via-foreground/15 to-transparent"></div>

                {/* Geometric shapes */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-border rounded-lg transform rotate-12"></div>
                <div className="absolute bottom-32 right-20 w-24 h-24 border border-border transform -rotate-12"></div>
                <div className="absolute top-1/2 left-10 w-2 h-32 bg-gradient-to-b from-primary/30 to-transparent transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-10 w-2 h-24 bg-gradient-to-t from-secondary/30 to-transparent transform -translate-y-1/2"></div>

                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center">
                  <div className="w-full px-6">
                    {/* Top badge */}
                    <div className="mb-12">
                      <Button
                        variant="secondary"
                        className="rounded-full px-6 py-2 text-sm backdrop-blur-sm"
                        style={{
                          backgroundColor: "var(--cta2-button-dark-bg)",
                          color: "var(--cta2-button-dark-text)",
                          borderColor: "var(--border)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-dark-bg-hover)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-dark-bg)";
                        }}
                      >
                        Flexible Plans for You
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Heading */}
                    <h1
                      className={
                        viewport === "mobile"
                          ? "text-2xl font-light leading-tight px-4 mb-6"
                          : viewport === "tablet"
                          ? "text-3xl font-light leading-tight px-4 mb-8"
                          : "text-4xl md:text-6xl lg:text-7xl font-light leading-tight px-4 sm:px-0 mb-8"
                      }
                      style={{ color: "var(--cta2-heading)" }}
                    >
                      Deploy your website <br /> in seconds, not hours
                    </h1>

                    {/* Subheading */}
                    <p
                      className={
                        viewport === "mobile"
                          ? "text-sm leading-relaxed px-4 mb-8"
                          : viewport === "tablet"
                          ? "text-base leading-relaxed px-4 mb-10"
                          : "text-lg md:text-xl leading-relaxed px-4 sm:px-0 mb-12"
                      }
                      style={{ color: "var(--cta2-subheading)" }}
                    >
                      With our state of the art, cutting edge, we are so back
                      kinda hosting services,
                      <br /> you can deploy your website in seconds.
                    </p>

                    {/* CTA Buttons */}
                    <div
                      className={
                        viewport === "mobile"
                          ? "flex flex-col gap-3 items-center justify-center"
                          : viewport === "tablet"
                          ? "flex flex-col sm:flex-row gap-4 items-center justify-center"
                          : "flex flex-col sm:flex-row gap-4 items-center justify-center"
                      }
                    >
                      <Button
                        className={
                          viewport === "mobile"
                            ? "px-6 py-3 text-sm font-medium w-full rounded-full"
                            : viewport === "tablet"
                            ? "px-8 py-3 text-base font-medium w-auto rounded-full"
                            : "px-8 sm:px-8 py-3 sm:py-4 text-base md:text-lg font-medium w-auto rounded-full"
                        }
                        style={{
                          backgroundColor: "var(--cta2-button-dark-bg)",
                          color: "var(--cta2-button-dark-text)",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-dark-bg-hover)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-dark-bg)")
                        }
                        size="lg"
                      >
                        Start a project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      <Button
                        variant="secondary"
                        className={
                          viewport === "mobile"
                            ? "px-6 py-3 text-sm font-medium w-full rounded-full"
                            : viewport === "tablet"
                            ? "px-8 py-3 text-base font-medium w-auto rounded-full"
                            : "px-8 sm:px-8 py-3 sm:py-4 text-base md:text-lg font-medium w-auto rounded-full"
                        }
                        style={{
                          backgroundColor: "var(--cta2-button-light-bg)",
                          color: "var(--cta2-button-light-text)",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-light-bg-hover)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-light-bg)")
                        }
                        size="lg"
                      >
                        Book a call
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-card/20 to-transparent"></div>

                {/* Lighting effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
              </section>
            )}
          </div>
        ) : (
          <div className="w-full ">
            <div className="w-full  max-w-none text-left  ">
              <CodeView
                language="tsx"
                code={
                  variant === "default"
                    ? codeDefault
                    : variant === "email"
                    ? codeEmail
                    : variant === "cta"
                    ? codeCTA
                    : variant === "cta2"
                    ? codeCTA2
                    : ""
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartBuildingUI;
