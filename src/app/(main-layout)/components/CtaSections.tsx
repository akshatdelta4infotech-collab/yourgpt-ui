"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Code2,
  Maximize,
  Mail,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import CodeView from "./CodeView";
import PreviewCodeHeader from "./PreviewCodeHeader";

// Define props type for variant
type StartBuildingUIProps = {
  variant?: "default" | "email" | "cta" | "cta2";
  code?: string;
  isFirstInstance?: boolean; // Add this to identify the first CTA instance
};

const StartBuildingUI = ({
  variant = "default",
  code = "",
  isFirstInstance = false,
}: StartBuildingUIProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

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
    <div className="w-full">
      <PreviewCodeHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        previewComponent={getPreviewComponent()}
        hideTopBorder={variant === "default" && isFirstInstance}
      />

      {/* Main content - full width to vertical borders */}
      <div className="w-full h-[60vh] overflow-hidden">
        {activeTab === "preview" ? (
          <div className="h-full overflow-y-auto">
            {variant === "default" ? (
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
            ) : variant === "email" ? (
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
            ) : variant === "cta" ? (
              // 🔹 CTA design version
              <section
                className="relative w-full mx-auto flex items-center justify-center overflow-hidden min-h-[60vh] py-16"
                style={{ background: "var(--cta1-bg)" }}
              >
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `linear-gradient(var(--cta1-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--cta1-grid-color) 1px, transparent 1px)`,
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
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-dark-bg-hover)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-dark-bg)";
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
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-light-bg-hover)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--cta2-button-light-bg)";
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
            )}
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="w-full h-full max-w-none text-left">
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
