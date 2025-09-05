"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Shield, Clock, ChevronRight } from "lucide-react";
import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeView from "./CodeView";

export default function Landingpageone() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const codeContent = `import { Button } from "@/components/ui/button";
import { Star, Shield, Clock, ChevronRight } from "lucide-react";
export default function HeroSection() {
  return (
    <div
      className="w-full min-h-[60vh]"
      style={{ background: "var(--lp-bg-gradient)" }}
    >
      {/* Divider line */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: "var(--lp-divider)" }}
      ></div>
      {/* Hero Content */}
      <div
        className="w-full mx-auto px-4 sm:px-6 py-6 sm:py-8"
        style={{ background: "var(--lp-section-gradient)" }}
      >
        {/* Referral Banner */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm text-center"
            style={{
              backgroundColor: "var(--lp-banner-bg)",
              color: "var(--lp-banner-text)",
            }}
          >
            Our online referral program is now available. Earn Rewards
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1
            className={
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl " +
              "xl:text-7xl font-bold leading-tight mb-1 " +
              "px-4 sm:px-0"
            }
            style={{ color: "var(--lp-heading)" }}
          >
            Data Extraction
          </h1>
          <h1 className={
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl " +
            "xl:text-7xl font-bold leading-tight mb-4 sm:mb-5 " +
            "px-4 sm:px-0"
          }>
            <span style={{ color: "var(--lp-heading-accent)" }}>
              Excellence
            </span>{" "}
            <span style={{ color: "var(--lp-heading)" }}>at Scale</span>
          </h1>

          <p
            className={
              "text-base sm:text-lg md:text-xl max-w-xs " +
              "sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            }
            style={{ color: "var(--lp-subheading)" }}
          >
            Gather data efficiently with the industry-leading proxy
            network and enjoy limitless web scraping solutions on the
            most intense tasks.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className={
          "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 " +
          "justify-items-center mb-8 sm:mb-12 px-4 sm:px-0 max-w-4xl mx-auto"
        }>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Star
              className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              style={{ color: "var(--lp-icon-primary)" }}
            />
            <span
              className="font-medium text-xs sm:text-sm"
              style={{ color: "var(--lp-trust-label)" }}
            >
              Trustpilot
            </span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Star
              className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              style={{ color: "var(--lp-icon-primary)" }}
            />
            <span
              className="font-medium text-xs sm:text-sm"
              style={{ color: "var(--lp-trust-label)" }}
            >
              4.5 rating
            </span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Shield
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: "var(--lp-icon-secondary)" }}
            />
            <span
              className="font-medium text-xs sm:text-sm"
              style={{ color: "var(--lp-trust-label)" }}
            >
              10M+ Proxy Pool
            </span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Clock
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: "var(--lp-icon-secondary)" }}
            />
            <span
              className="font-medium text-xs sm:text-sm"
              style={{ color: "var(--lp-trust-label)" }}
            >
              30 Day Free Trial
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4 sm:px-0">
          <Button
            className={
              "px-6 sm:px-8 py-3 sm:py-4 rounded-xl " +
              "text-base sm:text-lg font-semibold " +
              "w-full sm:w-auto max-w-xs sm:max-w-none"
            }
            style={{
              backgroundColor: "var(--lp-btn-primary-bg)",
              color: "var(--lp-btn-primary-text)",
            }}
          >
            Get Started
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="hidden lg:block relative mb-16 sm:mb-24">
          <div className="flex justify-center items-center space-x-4 px-72">
            {/* Left decorative line with dot */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
              <div
                className="w-80 h-0.5"
                style={{ backgroundColor: "var(--lp-line)" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--lp-dot)" }}
              ></div>
            </div>

            {/* Right decorative line with dot */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--lp-dot)" }}
              ></div>
              <div
                className="w-80 h-0.5"
                style={{ backgroundColor: "var(--lp-line)" }}
              ></div>
            </div>

            {[
              {
                bg: "bg-[url('https://lightningproxies.net/" +
                     "_next/static/media/product-1-icon.a6ef8e72.svg')] " +
                     "bg-white bg-center bg-no-repeat bg-contain",
                hoverText: "Residential Proxies",
                rotate: "-rotate-6",
              },
              {
                bg: "bg-[url('https://lightningproxies.net/" +
                     "_next/static/media/product-2-icon.ccc056ce.svg')] " +
                     "bg-white bg-center bg-no-repeat bg-contain",
                hoverText: "Data Center Proxies",
                rotate: "rotate-3",
              },
              {
                bg: "bg-[url('https://lightningproxies.net/" +
                     "_next/static/media/product-3-icon.70a30262.svg')] " +
                     "bg-white bg-center bg-no-repeat bg-contain",
                hoverText: "ISP Proxies",
                rotate: "-rotate-3",
              },
              {
                bg: "bg-[url('https://lightningproxies.net/" +
                     "_next/static/media/product-4-icon.775307d5.svg')] " +
                     "bg-white bg-center bg-no-repeat bg-contain",
                hoverText: "IPv6 Proxies",
                rotate: "rotate-6",
              },
              {
                bg: "bg-[url('https://lightningproxies.net/" +
                     "_next/static/media/product-5-icon.580560e0.svg')] " +
                     "bg-white bg-center bg-no-repeat bg-contain",
                hoverText: "Mobile Proxies",
                rotate: "-rotate-12",
              },
            ].map(({ bg, hoverText, rotate }, i) => (
              <div
                key={i}
                className={
                  \`w-16 h-16 \${bg} rounded-2xl flex items-center \` +
                  \`justify-center group relative transition-transform \` +
                  \`duration-300 \${rotate} group-hover:[transform:rotate(0deg)]\`
                }
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <span className={
                  "absolute opacity-0 group-hover:opacity-100 " +
                  "transition-opacity duration-200 bg-black/80 " +
                  "text-white text-xs px-3 py-1 rounded " +
                  "whitespace-nowrap -bottom-8 left-1/2 " +
                  "transform -translate-x-1/2 z-20"
                }>
                  {hoverText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Feature Icons Grid */}
        <div className={
          "lg:hidden grid grid-cols-3 sm:grid-cols-5 " +
          "gap-3 sm:gap-4 justify-items-center " +
          "mb-12 sm:mb-16 px-4"
        }>
          {[
            {
              bg: "bg-[url('https://lightningproxies.net/" +
                   "_next/static/media/product-1-icon.a6ef8e72.svg')] " +
                   "bg-white bg-center bg-no-repeat bg-contain",
              hoverText: "Residential Proxies",
            },
            {
              bg: "bg-[url('https://lightningproxies.net/" +
                   "_next/static/media/product-2-icon.ccc056ce.svg')] " +
                   "bg-white bg-center bg-no-repeat bg-contain",
              hoverText: "Data Center Proxies",
            },
            {
              bg: "bg-[url('https://lightningproxies.net/" +
                   "_next/static/media/product-3-icon.70a30262.svg')] " +
                   "bg-white bg-center bg-no-repeat bg-contain",
              hoverText: "ISP Proxies",
            },
            {
              bg: "bg-[url('https://lightningproxies.net/" +
                   "_next/static/media/product-4-icon.775307d5.svg')] " +
                   "bg-white bg-center bg-no-repeat bg-contain",
              hoverText: "IPv6 Proxies",
            },
            {
              bg: "bg-[url('https://lightningproxies.net/" +
                   "_next/static/media/product-5-icon.580560e0.svg')] " +
                   "bg-white bg-center bg-no-repeat bg-contain",
              hoverText: "Mobile Proxies",
            },
          ].map(({ bg, hoverText }, i) => (
            <div
              key={i}
              className={
                \`w-12 h-12 sm:w-16 sm:h-16 \${bg} \` +
                \`rounded-xl sm:rounded-2xl flex items-center \` +
                \`justify-center\`
              }
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              title={hoverText}
            >
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="w-full overflow-hidden">
          <h3
            className="font-medium mb-6 sm:mb-8 tracking-wide text-center text-xs sm:text-sm px-4"
            style={{ color: "var(--lp-trust-label)" }}
          >
            TRUSTED BY TOP PARTNERS IN THE INDUSTRY
          </h3>

          <div className="relative w-full">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center py-4 animate-scroll min-w-max">
                {[
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/incogniton-logo.cd08b27e.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/multilogin-logo.31e76296.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/undetectable-logo.fb583c6f.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/adspower.f58c3762.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/gologin-logo.5379eaad.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/octobrowser-logo.a9f428ed.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/dolphinanty-logo.b90d60f3.svg",
                  },
                  // Duplicate items for continuous scroll effect
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/incogniton-logo.cd08b27e.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/multilogin-logo.31e76296.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/undetectable-logo.fb583c6f.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/adspower.f58c3762.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/gologin-logo.5379eaad.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/octobrowser-logo.a9f428ed.svg",
                  },
                  {
                    img: "https://lightningproxies.net/_next/" +
                         "static/media/dolphinanty-logo.b90d60f3.svg",
                  },
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center px-6 sm:px-8 first:pl-20 last:pr-20"
                  >
                    <img
                      src={partner.img}
                      alt="partner logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain -mx-4"
                      style={{
                        filter: "var(--lp-logo-filter)",
                      }}
                    />
                    <div
                      className="h-6 sm:h-8 w-px ml-6 sm:ml-8"
                      style={{ backgroundColor: "var(--lp-divider)" }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{\`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        \`}</style>

        {/* Bottom Banner */}
        <div className="flex justify-center mt-12 sm:mt-16 px-4">
          <div
            className={
              "rounded-full px-4 sm:px-6 py-2 sm:py-3 " +
              "cursor-pointer transition-colors text-center " +
              "text-xs sm:text-sm"
            }
            style={{
              backgroundColor: "var(--lp-bottom-banner-bg)",
              borderColor: "var(--lp-bottom-banner-border)",
              color: "var(--lp-bottom-banner-text)",
              border: "1px solid",
            }}
          >
            Learn how Lightning Proxies is transforming the proxy
            landscape worldwide
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1 sm:ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
`;

  return (
    <div className="w-full">
      <PreviewCodeHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        previewComponent="landingpageone"
      />

      <div className="w-full min-h-[60vh]">
        {activeTab === "preview" ? (
          <div className="min-h-[60vh]">
            <div
              className="w-full min-h-[60vh]"
              style={{ background: "var(--lp-bg-gradient)" }}
            >
              {/* Divider line */}
              <div
                className="h-px w-full"
                style={{ backgroundColor: "var(--lp-divider)" }}
              ></div>

              {/* Hero Content */}
              <div
                className="w-full mx-auto px-4 sm:px-6 py-6 sm:py-8"
                style={{ background: "var(--lp-section-gradient)" }}
              >
                {/* Referral Banner */}
                <div className="flex justify-center mb-12 sm:mb-16">
                  <div
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm text-center"
                    style={{
                      backgroundColor: "var(--lp-banner-bg)",
                      color: "var(--lp-banner-text)",
                    }}
                  >
                    Our online referral program is now available. Earn Rewards
                  </div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-6 sm:mb-8">
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-1 px-4 sm:px-0"
                    style={{ color: "var(--lp-heading)" }}
                  >
                    Data Extraction
                  </h1>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-5 px-4 sm:px-0">
                    <span style={{ color: "var(--lp-heading-accent)" }}>
                      Excellence
                    </span>{" "}
                    <span style={{ color: "var(--lp-heading)" }}>at Scale</span>
                  </h1>

                  <p
                    className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
                    style={{ color: "var(--lp-subheading)" }}
                  >
                    Gather data efficiently with the industry-leading proxy
                    network and enjoy limitless web scraping solutions on the
                    most intense tasks.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center mb-8 sm:mb-12 px-4 sm:px-0 max-w-4xl mx-auto">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Star
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                      style={{ color: "var(--lp-icon-primary)" }}
                    />
                    <span
                      className="font-medium text-xs sm:text-sm"
                      style={{ color: "var(--lp-trust-label)" }}
                    >
                      Trustpilot
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Star
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                      style={{ color: "var(--lp-icon-primary)" }}
                    />
                    <span
                      className="font-medium text-xs sm:text-sm"
                      style={{ color: "var(--lp-trust-label)" }}
                    >
                      4.5 rating
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Shield
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "var(--lp-icon-secondary)" }}
                    />
                    <span
                      className="font-medium text-xs sm:text-sm"
                      style={{ color: "var(--lp-trust-label)" }}
                    >
                      10M+ Proxy Pool
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Clock
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "var(--lp-icon-secondary)" }}
                    />
                    <span
                      className="font-medium text-xs sm:text-sm"
                      style={{ color: "var(--lp-trust-label)" }}
                    >
                      30 Day Free Trial
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mb-12 sm:mb-16 px-4 sm:px-0">
                  <Button
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold w-full sm:w-auto max-w-xs sm:max-w-none"
                    style={{
                      backgroundColor: "var(--lp-btn-primary-bg)",
                      color: "var(--lp-btn-primary-text)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--lp-btn-primary-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--lp-btn-primary-bg)";
                    }}
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </div>

                {/* Feature Icons */}
                <div className="hidden lg:block relative mb-16 sm:mb-24">
                  <div className="flex justify-center items-center space-x-4 px-72">
                    {/* Left decorative line with dot */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
                      <div
                        className="w-80 h-0.5"
                        style={{ backgroundColor: "var(--lp-line)" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--lp-dot)" }}
                      ></div>
                    </div>

                    {/* Right decorative line with dot */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--lp-dot)" }}
                      ></div>
                      <div
                        className="w-80 h-0.5"
                        style={{ backgroundColor: "var(--lp-line)" }}
                      ></div>
                    </div>

                    {[
                      {
                        bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-1-icon.a6ef8e72.svg')] bg-white bg-center bg-no-repeat bg-contain",
                        hoverText: "Residential Proxies",
                        rotate: "-rotate-6",
                      },
                      {
                        bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-2-icon.ccc056ce.svg')] bg-white bg-center bg-no-repeat bg-contain",
                        hoverText: "Data Center Proxies",
                        rotate: "rotate-3",
                      },
                      {
                        bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-3-icon.70a30262.svg')] bg-white bg-center bg-no-repeat bg-contain",
                        hoverText: "ISP Proxies",
                        rotate: "-rotate-3",
                      },
                      {
                        bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-4-icon.775307d5.svg')] bg-white bg-center bg-no-repeat bg-contain",
                        hoverText: "IPv6 Proxies",
                        rotate: "rotate-6",
                      },
                      {
                        bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-5-icon.580560e0.svg')] bg-white bg-center bg-no-repeat bg-contain",
                        hoverText: "Mobile Proxies",
                        rotate: "-rotate-12",
                      },
                    ].map(({ bg, hoverText, rotate }, i) => (
                      <div
                        key={i}
                        className={
                          `w-16 h-16 ${bg} rounded-2xl flex items-center ` +
                          `justify-center group relative transition-transform ` +
                          `duration-300 ${rotate} group-hover:[transform:rotate(0deg)]`
                        }
                        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                      >
                        <span
                          className={
                            "absolute opacity-0 group-hover:opacity-100 " +
                            "transition-opacity duration-200 bg-black/80 " +
                            "text-white text-xs px-3 py-1 rounded " +
                            "whitespace-nowrap -bottom-8 left-1/2 " +
                            "transform -translate-x-1/2 z-20"
                          }
                        >
                          {hoverText}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Feature Icons Grid */}
                <div className="lg:hidden grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 justify-items-center mb-12 sm:mb-16 px-4">
                  {[
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-1-icon.a6ef8e72.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "Residential Proxies",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-2-icon.ccc056ce.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "Data Center Proxies",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-3-icon.70a30262.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "ISP Proxies",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-4-icon.775307d5.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "IPv6 Proxies",
                    },
                    {
                      bg: "bg-[url('https://lightningproxies.net/_next/static/media/product-5-icon.580560e0.svg')] bg-white bg-center bg-no-repeat bg-contain",
                      hoverText: "Mobile Proxies",
                    },
                  ].map(({ bg, hoverText }, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundImage: `url('${
                          bg.match(/url\('([^']+)'\)/)?.[1]
                        }')`,
                        backgroundColor: "white",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                      title={hoverText}
                    ></div>
                  ))}
                </div>

                {/* Partners */}
                <div className="w-full overflow-hidden">
                  <h3
                    className="font-medium mb-6 sm:mb-8 tracking-wide text-center text-xs sm:text-sm px-4"
                    style={{ color: "var(--lp-trust-label)" }}
                  >
                    TRUSTED BY TOP PARTNERS IN THE INDUSTRY
                  </h3>

                  <div className="relative w-full">
                    <div className="overflow-x-auto scrollbar-hide">
                      <div className="flex items-center py-4 animate-scroll min-w-max">
                        {[
                          {
                            img: "https://lightningproxies.net/_next/static/media/incogniton-logo.cd08b27e.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/multilogin-logo.31e76296.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/undetectable-logo.fb583c6f.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/adspower.f58c3762.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/gologin-logo.5379eaad.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/octobrowser-logo.a9f428ed.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/dolphinanty-logo.b90d60f3.svg",
                          },
                          // Duplicate items for continuous scroll effect
                          {
                            img: "https://lightningproxies.net/_next/static/media/incogniton-logo.cd08b27e.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/multilogin-logo.31e76296.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/undetectable-logo.fb583c6f.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/adspower.f58c3762.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/gologin-logo.5379eaad.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/octobrowser-logo.a9f428ed.svg",
                          },
                          {
                            img: "https://lightningproxies.net/_next/static/media/dolphinanty-logo.b90d60f3.svg",
                          },
                        ].map((partner, index) => (
                          <div
                            key={index}
                            className="flex items-center px-6 sm:px-8 first:pl-20 last:pr-20"
                          >
                            <img
                              src={partner.img}
                              alt="partner logo"
                              className="w-24 h-24 sm:w-32 sm:h-32 object-contain -mx-4"
                              style={{
                                filter: "var(--lp-logo-filter)",
                              }}
                            />
                            <div
                              className="h-6 sm:h-8 w-px ml-6 sm:ml-8"
                              style={{ backgroundColor: "var(--lp-divider)" }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes scroll {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .animate-scroll {
                    animation: scroll 30s linear infinite;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>

                {/* Bottom Banner */}
                <div className="flex justify-center mt-12 sm:mt-16 px-4">
                  <div
                    className="rounded-full px-4 sm:px-6 py-2 sm:py-3 cursor-pointer transition-colors text-center text-xs sm:text-sm"
                    style={{
                      backgroundColor: "var(--lp-bottom-banner-bg)",
                      borderColor: "var(--lp-bottom-banner-border)",
                      color: "var(--lp-bottom-banner-text)",
                      border: "1px solid",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--lp-bottom-banner-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--lp-bottom-banner-bg)";
                    }}
                  >
                    Learn how Lightning Proxies is transforming the proxy
                    landscape worldwide
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1 sm:ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="w-full h-full max-w-none text-left">
              <CodeView language="tsx" code={codeContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
