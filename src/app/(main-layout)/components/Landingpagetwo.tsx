"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Play, Globe, Presentation, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeViewTwo from "./CodeViewTwo";

export default function Landingpagetwo() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [currentAIIndex, setCurrentAIIndex] = useState(0);
  const { theme } = useTheme();

  const aiPlatforms = [
    {
      iconLight: "/Grok_wordmark_light.svg",
      iconDark: "/Grok_wordmark_dark.svg",
    },
    {
      iconLight: "/OpenAI_wordmark_light.svg",
      iconDark: "/OpenAI_wordmark_dark.svg",
    },
    {
      iconLight: "/Claude AI_wordmark_light.svg",
      iconDark: "/Claude AI_wordmark_dark.svg",
    },
    {
      iconLight: "/gemini_wordmark.svg",
      iconDark: "/gemini_wordmark.svg", // Same for both themes as you mentioned
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAIIndex((prev) => (prev + 1) % aiPlatforms.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentPlatform = aiPlatforms[currentAIIndex];

  // Get the appropriate icon based on theme
  const getCurrentIcon = () => {
    if (theme === "dark") {
      return currentPlatform.iconDark;
    }
    // Default to light theme for 'light' theme or undefined/system theme
    return currentPlatform.iconLight;
  };

  const codeContent = `import Image from "next/image";
import { useState, useEffect } from "react";
import { Play, Globe, Presentation, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export default function Landingpagetwo() {
  const [currentAIIndex, setCurrentAIIndex] = useState(0);
  const { theme } = useTheme();

  const aiPlatforms = [
    {
      iconLight: "/Grok_wordmark_light.svg",
      iconDark: "/Grok_wordmark_dark.svg",
    },
    {
      iconLight: "/OpenAI_wordmark_light.svg",
      iconDark: "/OpenAI_wordmark_dark.svg",
    },
    {
      iconLight: "/Claude AI_wordmark_light.svg",
      iconDark: "/Claude AI_wordmark_dark.svg",
    },
    {
      iconLight: "/gemini_wordmark.svg",
      iconDark: "/gemini_wordmark.svg", // Same for both themes
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAIIndex((prev) => (prev + 1) % aiPlatforms.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const currentPlatform = aiPlatforms[currentAIIndex];
  
  // Get the appropriate icon based on theme
  const getCurrentIcon = () => {
    if (theme === 'dark') {
      return currentPlatform.iconDark;
    }
    return currentPlatform.iconLight;
  };

  return (
    <div className="w-full">
      <div
        className="w-full"
        style={{ backgroundColor: "var(--lp2-bg-section)" }}
      >
        {/* Hero Section */}
        <section
          className="py-12 sm:py-16 px-4"
          style={{ backgroundColor: "var(--lp2-bg-main)" }}
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Top banner */}
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "var(--lp2-cta-bg)" }} />
              <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--lp2-cta-bg)" }}>
                Get mentioned in AI with Promptmonitor
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
              style={{ color: "var(--lp2-text-heading)" }}
            >
              Monitor and improve your <br className="hidden sm:block" /> brand visibility in AI/LLMs
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 px-4 sm:px-0 max-w-6xl mx-auto leading-relaxed"
              style={{ color: "var(--lp2-text-subheading)" }}
            >
              Marketers use Promptmonitor to dominate{" "}
              <span
                className="relative inline-block align-middle"
                style={{ width: "70px sm:90px", height: "20px sm:24px" }}
              >
                <span
                  className="absolute top-2 left-0 w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out transform -translate-y-1/2"
                  key={currentAIIndex}
                  style={{
                    animation: "slideInFromSame 0.6s ease-in-out",
                  }}
                >
                  <Image
                    src={getCurrentIcon()}
                    alt="AI Platform"
                    width={90}
                    height={20}
                    className="max-h-4 sm:max-h-5 max-w-full w-auto h-auto object-contain"
                  />
                </span>
              </span>{" "}
              AI visibility and drive more traffic, leads, and sales.
            </p>

            <style jsx>{\`
              @keyframes slideInFromSame {
                0% {
                  opacity: 0;
                  transform: translateY(0px) scale(0.95);
                }
                50% {
                  opacity: 0.5;
                  transform: translateY(-2px) scale(0.98);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0px) scale(1);
                }
              }
            \`}</style>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <div className="flex items-center rounded-lg px-3 sm:px-4 py-3 sm:py-4 flex-1 max-w-md w-full sm:w-auto">
                {/* Globe Icon inside the border */}
                <div
                  className="flex items-center gap-2 rounded px-2 sm:px-3 py-2 w-full"
                  style={{
                    border: "1px solid var(--lp2-input-border)",
                    backgroundColor: "var(--lp2-input-bg)",
                  }}
                >
                  <Globe
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                    style={{ color: "var(--lp2-input-icon)" }}
                  />
                  <input
                    type="text"
                    placeholder="Enter your website url, e.g. vercel.com"
                    className="bg-transparent outline-none flex-1 text-sm sm:text-base"
                    style={{ color: "var(--lp2-input-text)" }}
                  />
                </div>
              </div>

              <Button
                className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium flex items-center gap-2 h-11 sm:h-12 w-full sm:w-auto text-sm sm:text-base"
                style={{
                  backgroundColor: "var(--lp2-cta-bg)",
                  color: "var(--lp2-cta-text)",
                }}
              >
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded bg-white mr-1 sm:mr-2">
                  <img
                    src="https://www.promptmonitor.io/assets/googleicon.svg"
                    alt="Google"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                </span>
                Analyze For Free →
              </Button>
            </div>

            <Button
              variant="link"
              className="mx-auto mb-6 sm:mb-8 flex items-center bg-transparent hover:bg-transparent no-underline hover:no-underline text-sm sm:text-base"
              style={{ color: "var(--lp2-text-subheading)" }}
            >
              <Presentation className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-colors" />
              <span className="transition-colors font-medium">
                See live demo
              </span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-colors" />
            </Button>

            {/* Features */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm px-4 sm:px-0"
              style={{ color: "var(--lp2-text-subheading)" }}
            >
              {[
                "10 days free trial",
                "Cancel anytime",
                "Get insights in 2 minutes",
              ].map((feature, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <div
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--lp2-badge-bg)" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "var(--lp2-badge-text)" }}
                    >
                      ✓
                    </span>
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="max-w-7xl mx-auto px-4 pb-12 sm:pb-16">
          <div className="w-full flex items-center justify-center relative">
            <Image
              src="/promptmonitor-hero-img-latest.webp"
              alt="Promptmonitor Dashboard Preview"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              priority
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex flex-col items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
                {/* Play Button Circle */}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: "var(--lp2-overlay-play-bg)" }}
                >
                  <Play
                    className="w-6 h-6 sm:w-8 sm:h-8 ml-1"
                    fill="var(--lp2-overlay-play-icon)"
                    style={{ color: "var(--lp2-overlay-play-icon)" }}
                  />
                </div>
                {/* Watch Demo Text */}
                <span
                  className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                  style={{ color: "var(--lp2-overlay-text)" }}
                >
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 sm:mt-16">
            <div
              className="text-lg sm:text-xl px-4 sm:px-0"
              style={{ color: "var(--lp2-text-subheading)" }}
            >
              Over 1300+ Companies Signed Up
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}`;

  return (
    <div className="w-full">
      <PreviewCodeHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        previewComponent="landingpagetwo"
      />

      <div className="w-full">
        {activeTab === "preview" ? (
          <div className="w-full">
            <div
              className="w-full"
              style={{ backgroundColor: "var(--lp2-bg-section)" }}
            >
              {/* Hero Section */}
              <section
                className="py-12 sm:py-16 px-4"
                style={{ backgroundColor: "var(--lp2-bg-main)" }}
              >
                <div className="max-w-6xl mx-auto text-center">
                  {/* Top banner */}
                  <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                    <Globe
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: "var(--lp2-cta-bg)" }}
                    />
                    <span
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: "var(--lp2-cta-bg)" }}
                    >
                      Get mentioned in AI with Promptmonitor
                    </span>
                  </div>

                  {/* Heading */}
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
                    style={{ color: "var(--lp2-text-heading)" }}
                  >
                    Monitor and improve your <br className="hidden sm:block" />{" "}
                    brand visibility in AI/LLMs
                  </h1>

                  {/* Subheading */}
                  <p
                    className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 px-4 sm:px-0 max-w-6xl mx-auto leading-relaxed"
                    style={{ color: "var(--lp2-text-subheading)" }}
                  >
                    Marketers use Promptmonitor to dominate{" "}
                    <span
                      className="relative inline-block align-middle"
                      style={{ width: "70px sm:90px", height: "20px sm:24px" }}
                    >
                      <span
                        className="absolute top-2 left-0 w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out transform -translate-y-1/2"
                        key={currentAIIndex}
                        style={{
                          animation: "slideInFromSame 0.6s ease-in-out",
                        }}
                      >
                        <Image
                          src={getCurrentIcon()}
                          alt="AI Platform"
                          width={90}
                          height={20}
                          className="max-h-4 sm:max-h-5 max-w-full w-auto h-auto object-contain"
                        />
                      </span>
                    </span>{" "}
                    AI visibility and drive more traffic, leads, and sales.
                  </p>

                  <style jsx>{`
                    @keyframes slideInFromSame {
                      0% {
                        opacity: 0;
                        transform: translateY(0px) scale(0.95);
                      }
                      50% {
                        opacity: 0.5;
                        transform: translateY(-2px) scale(0.98);
                      }
                      100% {
                        opacity: 1;
                        transform: translateY(0px) scale(1);
                      }
                    }
                  `}</style>

                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
                    <div className="flex items-center rounded-lg px-3 sm:px-4 py-3 sm:py-4 flex-1 max-w-md w-full sm:w-auto">
                      {/* Globe Icon inside the border */}
                      <div
                        className="flex items-center gap-2 rounded px-2 sm:px-3 py-2 w-full"
                        style={{
                          border: "1px solid var(--lp2-input-border)",
                          backgroundColor: "var(--lp2-input-bg)",
                        }}
                      >
                        <Globe
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                          style={{ color: "var(--lp2-input-icon)" }}
                        />
                        <input
                          type="text"
                          placeholder="Enter your website url, e.g. vercel.com"
                          className="bg-transparent outline-none flex-1 text-sm sm:text-base"
                          style={{ color: "var(--lp2-input-text)" }}
                        />
                      </div>
                    </div>

                    <Button
                      className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium flex items-center gap-2 h-11 sm:h-12 w-full sm:w-auto text-sm sm:text-base"
                      style={{
                        backgroundColor: "var(--lp2-cta-bg)",
                        color: "var(--lp2-cta-text)",
                      }}
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded bg-white mr-1 sm:mr-2">
                        <img
                          src="https://www.promptmonitor.io/assets/googleicon.svg"
                          alt="Google"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                      </span>
                      Analyze For Free →
                    </Button>
                  </div>

                  <Button
                    variant="link"
                    className="mx-auto mb-6 sm:mb-8 flex items-center bg-transparent hover:bg-transparent no-underline hover:no-underline text-sm sm:text-base"
                    style={{ color: "var(--lp2-text-subheading)" }}
                  >
                    <Presentation className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-colors" />
                    <span className="transition-colors font-medium">
                      See live demo
                    </span>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transition-colors" />
                  </Button>

                  {/* Features */}
                  <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm px-4 sm:px-0"
                    style={{ color: "var(--lp2-text-subheading)" }}
                  >
                    {[
                      "10 days free trial",
                      "Cancel anytime",
                      "Get insights in 2 minutes",
                    ].map((feature, i) => (
                      <div className="flex items-center gap-2" key={i}>
                        <div
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "var(--lp2-badge-bg)" }}
                        >
                          <span
                            className="text-xs"
                            style={{ color: "var(--lp2-badge-text)" }}
                          >
                            ✓
                          </span>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Dashboard Section - Now a single image with play button overlay */}
              <section className="max-w-7xl mx-auto px-4 pb-12 sm:pb-16">
                <div className="w-full flex items-center justify-center relative">
                  <Image
                    src="/promptmonitor-hero-img-latest.webp"
                    alt="Promptmonitor Dashboard Preview"
                    width={1200}
                    height={800}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                    priority
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group flex flex-col items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
                      {/* Play Button Circle */}
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        style={{
                          backgroundColor: "var(--lp2-overlay-play-bg)",
                        }}
                      >
                        <Play
                          className="w-6 h-6 sm:w-8 sm:h-8 ml-1"
                          fill="var(--lp2-overlay-play-icon)"
                          style={{ color: "var(--lp2-overlay-play-icon)" }}
                        />
                      </div>
                      {/* Watch Demo Text */}
                      <span
                        className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                        style={{ color: "var(--lp2-overlay-text)" }}
                      >
                        Watch Demo
                      </span>
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12 sm:mt-16">
                  <div
                    className="text-lg sm:text-xl px-4 sm:px-0"
                    style={{ color: "var(--lp2-text-subheading)" }}
                  >
                    Over 1300+ Companies Signed Up
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="w-full h-full max-w-none text-left">
              <CodeViewTwo language="tsx" code={codeContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
