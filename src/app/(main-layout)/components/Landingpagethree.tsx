"use client";
import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Users,
  MousePointer,
  Link2,
  Globe,
  Tag,
  FileText,
  BarChart3,
  FolderOpen,
  Hash,
  Copy,
  ExternalLink,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeViewTwo from "./CodeViewTwo";
export default function Landingpagethree() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [currentCompanySet, setCurrentCompanySet] = useState(0);
  // All companies divided into sets of 10 (2 rows x 5 columns)
  const allCompanies = [
    // Set 1 - 10 companies with SVG logos
    [
      {
        name: "Twilio",
        logo: "https://assets.dub.co/companies/twilio.svg",
        color: "text-red-500",
      },
      {
        name: "Superhuman",
        logo: "https://assets.dub.co/companies/superhuman.svg",
        color: "text-purple-500",
      },
      {
        name: "Perplexity",
        logo: "https://assets.dub.co/companies/perplexity.svg",
        color: "text-blue-500",
      },
      {
        name: "Vercel",
        logo: "https://assets.dub.co/companies/vercel.svg",
        color: "text-yellow-500",
      },
      {
        name: "Raycast",
        logo: "https://assets.dub.co/companies/raycast.svg",
        color: "text-green-500",
      },
      {
        name: "Framer",
        logo: "https://assets.dub.co/companies/framer.svg",
        color: "text-purple-500",
      },
      {
        name: "Huberman Lab",
        logo: "https://assets.dub.co/companies/hubermanlab.svg",
        color: "text-blue-500",
      },
      {
        name: "Tonies",
        logo: "https://assets.dub.co/companies/tonies.svg",
        color: "text-green-600",
      },
      {
        name: "Buffer",
        logo: "https://assets.dub.co/companies/buffer.svg",
        color: "text-red-500",
      },
      {
        name: "Product Hunt",
        logo: "https://assets.dub.co/companies/product-hunt.svg",
        color: "text-gray-600",
      },
    ],
    // Set 2 - 10 companies with SVG logos
    [
      {
        name: "Whop",
        logo: "https://assets.dub.co/companies/whop.svg",
        color: "text-red-500",
      },
      {
        name: "Clerk",
        logo: "https://assets.dub.co/companies/clerk.svg",
        color: "text-purple-500",
      },
      {
        name: "Cal.com",
        logo: "https://assets.dub.co/companies/cal.svg",
        color: "text-blue-500",
      },
      {
        name: "Bolt",
        logo: "https://assets.dub.co/companies/bolt.svg",
        color: "text-yellow-500",
      },
      {
        name: "Supabase",
        logo: "https://assets.dub.co/companies/supabase.svg",
        color: "text-green-500",
      },
      {
        name: "Tella",
        logo: "https://assets.dub.co/companies/tella.svg",
        color: "text-purple-500",
      },
      {
        name: "Polymarket",
        logo: "https://assets.dub.co/companies/polymarket.svg",
        color: "text-blue-500",
      },
      {
        name: "Granola",
        logo: "https://assets.dub.co/companies/granola.svg",
        color: "text-green-600",
      },
      {
        name: "Superlist",
        logo: "https://assets.dub.co/companies/superlist.svg",
        color: "text-red-500",
      },
      {
        name: "Jobber",
        logo: "https://assets.dub.co/companies/jobber.svg",
        color: "text-gray-600",
      },
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanySet((prev) => (prev + 1) % allCompanies.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const currentCompanies = allCompanies[currentCompanySet];

  const linkData = [
    {
      shortLink: "go.acme.com/launch",
      destination: "acme.com/announcements/new-feature-launch",
      date: "Jul 4, 2025",
      views: 0,
      clicks: 0,
      conversions: 0,
    },
    {
      shortLink: "go.acme.com/announcement",
      destination: "acme.com/blog/announcement-blog-post",
      date: "Jun 29, 2025",
      views: "1.5K",
      clicks: 487,
      conversions: 280,
    },
    {
      shortLink: "go.acme.com/signup",
      destination: "acme.com/signup-today",
      date: "Feb 14, 2025",
      views: "1.8K",
      clicks: 0,
      conversions: 0,
    },
    {
      shortLink: "go.acme.com/access",
      destination: "acme.com/get-access-to-our-new-platform",
      date: "Mar 21, 2025",
      views: 432,
      clicks: 280,
      conversions: 142,
    },
    {
      shortLink: "go.acme.com/flash-sale",
      destination: "acme.com/collections/summer-2025-collection-sale",
      date: "Apr 30, 2025",
      views: 967,
      clicks: 532,
      conversions: 190,
    },
    {
      shortLink: "go.acme.com/special-offer",
      destination: "acme.com/sale/utm_source=linkedin&utm_medium=social",
      date: "",
      views: 0,
      clicks: 0,
      conversions: 0,
    },
  ];

  const codeContent = `"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
export default function Landingpagethree() {
  const [currentCompanySet, setCurrentCompanySet] = useState(0);
  // All companies divided into sets of 10 (2 rows x 5 columns)
  const allCompanies = [
    // Set 1 - 10 companies with SVG logos
    [
      {
        name: "Twilio",
        logo: "https://assets.dub.co/companies/twilio.svg",
        color: "text-red-500",
      },
      {
        name: "Superhuman",
        logo: "https://assets.dub.co/companies/" +
              "superhuman.svg",
        color: "text-purple-500",
      },
      {
        name: "Perplexity",
        logo: "https://assets.dub.co/companies/" +
              "perplexity.svg",
        color: "text-blue-500",
      },
      {
        name: "Vercel",
        logo: "https://assets.dub.co/companies/vercel.svg",
        color: "text-yellow-500",
      },
      {
        name: "Raycast",
        logo: "https://assets.dub.co/companies/raycast.svg",
        color: "text-green-500",
      },
      {
        name: "Framer",
        logo: "https://assets.dub.co/companies/framer.svg",
        color: "text-purple-500",
      },
      {
        name: "Huberman Lab",
        logo: "https://assets.dub.co/companies/" +
              "hubermanlab.svg",
        color: "text-blue-500",
      },
      {
        name: "Tonies",
        logo: "https://assets.dub.co/companies/tonies.svg",
        color: "text-green-600",
      },
      {
        name: "Buffer",
        logo: "https://assets.dub.co/companies/buffer.svg",
        color: "text-red-500",
      },
      {
        name: "Product Hunt",
        logo: "https://assets.dub.co/companies/" +
              "product-hunt.svg",
        color: "text-gray-600",
      },
    ],
    // Set 2 - 10 companies with SVG logos
    [
      {
        name: "Whop",
        logo: "https://assets.dub.co/companies/whop.svg",
        color: "text-red-500",
      },
      {
        name: "Clerk",
        logo: "https://assets.dub.co/companies/clerk.svg",
        color: "text-purple-500",
      },
      {
        name: "Cal.com",
        logo: "https://assets.dub.co/companies/cal.svg",
        color: "text-blue-500",
      },
      {
        name: "Bolt",
        logo: "https://assets.dub.co/companies/bolt.svg",
        color: "text-yellow-500",
      },
      {
        name: "Supabase",
        logo: "https://assets.dub.co/companies/" +
              "supabase.svg",
        color: "text-green-500",
      },
      {
        name: "Tella",
        logo: "https://assets.dub.co/companies/tella.svg",
        color: "text-purple-500",
      },
      {
        name: "Polymarket",
        logo: "https://assets.dub.co/companies/" +
              "polymarket.svg",
        color: "text-blue-500",
      },
      {
        name: "Granola",
        logo: "https://assets.dub.co/companies/granola.svg",
        color: "text-green-600",
      },
      {
        name: "Superlist",
        logo: "https://assets.dub.co/companies/" +
              "superlist.svg",
        color: "text-red-500",
      },
      {
        name: "Jobber",
        logo: "https://assets.dub.co/companies/jobber.svg",
        color: "text-gray-600",
      },
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanySet((prev) => (prev + 1) % allCompanies.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const currentCompanies = allCompanies[currentCompanySet];

  return (
    <div className="w-full font-inter">
      <div
        className="w-full min-h-[60vh] relative"
        style={{
          background: "linear-gradient(to bottom, var(--lp-bg-base), " +
                     "var(--lp-bg-subtle))",
        }}
      >
        {/* Grid Pattern Background - Covers entire section */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: \`
                linear-gradient(var(--lp-grid-line) 1px, transparent 1px),
                linear-gradient(90deg, var(--lp-grid-line) 1px, transparent 1px)
              \`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Gradient Overlay to fade grid near content and dashboard border */}
        <div
          className="absolute inset-0"
          style={{
            background: "var(--lp-gradient-overlay)",
          }}
        ></div>

        {/* Hero Section */}
        <div className={"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " +
                        "pt-16 sm:pt-20 pb-12 sm:pb-16 text-center z-10"}>
          {/* Content with higher z-index */}
          <div className="relative z-10">
            {/* Announcement Banner */}
            <div
              className={"inline-flex items-center px-3 sm:px-4 py-2 " +
                        "rounded-full shadow-sm hover:shadow-md cursor-pointer " +
                        "mb-6 sm:mb-8"}
              style={{
                border: "1px solid var(--lp-grid-line)",
                backgroundColor: "var(--lp-bg-card)",
              }}
            >
              <span
                className="text-xs sm:text-sm font-medium"
                style={{ color: "var(--lp-text-secondary)" }}
              >
                Introducing Dub Partners
              </span>
              <span
                className="ml-2 text-xs sm:text-sm"
                style={{ color: "var(--lp-text-muted)" }}
              >
                Read more
              </span>
              <ArrowRight
                className="w-3 h-3 ml-1"
                style={{ color: "var(--lp-text-muted)" }}
              />
            </div>

            {/* Main Heading */}
            <div className="relative mb-4 sm:mb-6">
              <h1
                className={"text-3xl sm:text-4xl md:text-5xl lg:text-6xl " +
                          "xl:text-7xl font-bold leading-tight px-4 sm:px-0"}
                style={{ color: "var(--lp-text-primary)" }}
              >
                Turn clicks into revenue
              </h1>
            </div>

            <div className="relative mb-8 sm:mb-10">
              <p
                className={"text-base sm:text-lg md:text-xl lg:text-2xl " +
                          "max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto " +
                          "leading-relaxed px-4 sm:px-0"}
                style={{ color: "var(--lp-text-secondary)" }}
              >
                Dub is the modern link attribution platform for short
                links, conversion tracking, and affiliate programs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={"flex flex-col sm:flex-row items-center " +
                            "justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 " +
                            "px-4 sm:px-0"}>
              <Button
                className={"px-4 sm:px-6 md:px-8 py-3 sm:py-4 " +
                          "text-sm sm:text-base md:text-lg shadow-lg " +
                          "w-full sm:w-auto max-w-xs sm:max-w-none"}
                style={{
                  backgroundColor: "var(--lp-accent)",
                  color: "var(--lp-accent-contrast)",
                }}
              >
                Start for free
              </Button>
              <Button
                className={"px-4 sm:px-6 md:px-8 py-3 sm:py-4 " +
                          "text-sm sm:text-base md:text-lg " +
                          "w-full sm:w-auto max-w-xs sm:max-w-none"}
                style={{
                  backgroundColor: "var(--lp-bg-card)",
                  border: "1px solid var(--lp-grid-line)",
                  color: "var(--lp-text-muted)",
                }}
              >
                Get a demo
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Buttons */}
        <div className={"flex justify-center mb-12 sm:mb-16 relative z-20 " +
                        "px-4 sm:px-0"}>
          <div className={"flex flex-col sm:flex-row items-center " +
                          "gap-2 sm:gap-3 w-full sm:w-auto " +
                          "max-w-md sm:max-w-none"}>
            <Button
              className={"text-xs sm:text-sm font-medium shadow-sm " +
                        "w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"}
              style={{
                color: "var(--lp-text-primary)",
                backgroundColor: "var(--lp-bg-card)",
                border: "1px solid var(--lp-grid-line)",
              }}
            >
              Short Links
            </Button>

            <Button
              className={"text-xs sm:text-sm font-medium shadow-sm " +
                        "w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"}
              style={{
                color: "var(--lp-text-primary)",
                backgroundColor: "var(--lp-bg-card)",
                border: "1px solid var(--lp-grid-line)",
              }}
            >
              Conversion Analytics
            </Button>
            <Button
              className={"text-xs sm:text-sm font-medium shadow-sm " +
                        "w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"}
              style={{
                color: "var(--lp-text-primary)",
                backgroundColor: "var(--lp-bg-card)",
                border: "1px solid var(--lp-grid-line)",
              }}
            >
              Affiliate Programs
            </Button>
          </div>
        </div>

        {/* Video Demo Section */}
        <div
          className={"grid-section relative overflow-visible " +
                    "px-4 sm:px-6 md:px-8"}
          style={{
            backgroundColor: "var(--lp-bg-subtle)",
          }}
        >
          <div className={"max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto " +
                          "py-8 sm:py-12 md:py-16 lg:py-20 relative"}>
            <HeroVideoDialog
              className="block"
              animationStyle="from-center"
              videoSrc={"https://commondatastorage.googleapis.com/" +
                       "gtv-videos-bucket/sample/BigBuckBunny.mp4"}
              thumbnailSrc={"https://startup-template-sage.vercel.app/" +
                           "hero-light.png"}
              thumbnailAlt="Dub Platform Demo Video"
            />

            {/* Video Bottom Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: "var(--lp-video-overlay)",
              }}
            ></div>

            {/* Black Overlapping Div */}
            <div
              className={"absolute bottom-0 left-1/2 transform " +
                        "-translate-x-1/2 translate-y-1/2 " +
                        "w-60 sm:w-72 md:w-80 h-12 sm:h-14 md:h-16 " +
                        "rounded-lg shadow-lg z-50 flex items-center " +
                        "justify-center"}
              style={{
                backgroundColor: "var(--lp-accent)",
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Link2
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: "var(--lp-accent-contrast)" }}
                />
                <span
                  className="font-medium text-sm sm:text-base"
                  style={{ color: "var(--lp-accent-contrast)" }}
                >
                  Short Links
                </span>
                <ArrowRight
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  style={{ color: "var(--lp-accent-contrast)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos - Outside grid pattern container */}
      <div
        className="py-8 sm:py-12 md:py-16 lg:py-20"
        style={{ backgroundColor: "var(--lp-bg-card)" }}
      >
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " +
                        "text-center"}>
          <div className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 " +
                          "lg:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-6 " +
                          "lg:gap-x-8 gap-y-3 sm:gap-y-4 md:gap-y-6 " +
                          "items-center justify-items-center max-w-5xl mx-auto"}>
            {currentCompanies.map((company, idx) => (
              <div
                key={\`\${currentCompanySet}-\${idx}\`}
                className="group cursor-pointer w-full"
              >
                <div
                  className={"flex flex-col items-center p-2 sm:p-3 md:p-4 " +
                            "lg:p-6 rounded-xl transition-all duration-200 " +
                            "hover:bg-opacity-50"}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className={\`group-hover:scale-110 transition-transform duration-200\`}
                    style={{
                      animation: "fadeInSlide 0.8s ease-in-out",
                    }}
                  >
                    {company.logo.startsWith("https://") ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className={"w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 " +
                                  "lg:w-20 lg:h-20 object-contain"}
                        style={{
                          filter: "var(--lp-logo-filter)",
                        }}
                      />
                    ) : (
                      <span className={\`text-lg sm:text-2xl md:text-3xl lg:text-4xl \${company.color}\`}>
                        {company.logo}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{\`
          @keyframes fadeInSlide {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        \`}</style>
      </div>
    </div>
  );
}`;

  return (
    <div className="w-full font-inter">
      <PreviewCodeHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        previewComponent="landingpagethree"
      />

      <div className="w-full min-h-[60vh]">
        {activeTab === "preview" ? (
          <div className="min-h-[60vh] font-inter">
            <div
              className="w-full min-h-[60vh] relative"
              style={{
                background:
                  "linear-gradient(to bottom, var(--lp-bg-base), var(--lp-bg-subtle))",
              }}
            >
              {/* Grid Pattern Background - Covers entire section */}
              <div className="absolute inset-0 opacity-40">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(var(--lp-grid-line) 1px, transparent 1px),
                      linear-gradient(90deg, var(--lp-grid-line) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                  }}
                ></div>
              </div>

              {/* Gradient Overlay to fade grid near content and dashboard border */}
              <div
                className="absolute inset-0"
                style={{
                  background: "var(--lp-gradient-overlay)",
                }}
              ></div>

              {/* Hero Section */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center z-10">
                {/* Content with higher z-index */}
                <div className="relative z-10">
                  {/* Announcement Banner */}
                  <div
                    className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full shadow-sm hover:shadow-md cursor-pointer mb-6 sm:mb-8"
                    style={{
                      border: "1px solid var(--lp-grid-line)",
                      backgroundColor: "var(--lp-bg-card)",
                    }}
                  >
                    <span
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: "var(--lp-text-secondary)" }}
                    >
                      Introducing Dub Partners
                    </span>
                    <span
                      className="ml-2 text-xs sm:text-sm"
                      style={{ color: "var(--lp-text-muted)" }}
                    >
                      Read more
                    </span>
                    <ArrowRight
                      className="w-3 h-3 ml-1"
                      style={{ color: "var(--lp-text-muted)" }}
                    />
                  </div>

                  {/* Main Heading */}
                  <div className="relative mb-4 sm:mb-6">
                    <h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 sm:px-0"
                      style={{ color: "var(--lp-text-primary)" }}
                    >
                      Turn clicks into revenue
                    </h1>
                  </div>

                  <div className="relative mb-8 sm:mb-10">
                    <p
                      className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                      style={{ color: "var(--lp-text-secondary)" }}
                    >
                      Dub is the modern link attribution platform for short
                      links, conversion tracking, and affiliate programs.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
                    <Button
                      className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none"
                      style={{
                        backgroundColor: "var(--lp-accent)",
                        color: "var(--lp-accent-contrast)",
                      }}
                    >
                      Start for free
                    </Button>
                    <Button
                      className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
                      style={{
                        backgroundColor: "var(--lp-bg-card)",
                        border: "1px solid var(--lp-grid-line)",
                        color: "var(--lp-text-muted)",
                      }}
                    >
                      Get a demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Feature Buttons */}
              <div className="flex justify-center mb-12 sm:mb-16 relative z-20 px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto max-w-md sm:max-w-none">
                  <Button
                    className="text-xs sm:text-sm font-medium shadow-sm w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"
                    style={{
                      color: "var(--lp-text-primary)",
                      backgroundColor: "var(--lp-bg-card)",
                      border: "1px solid var(--lp-grid-line)",
                    }}
                  >
                    Short Links
                  </Button>

                  <Button
                    className="text-xs sm:text-sm font-medium shadow-sm w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"
                    style={{
                      color: "var(--lp-text-primary)",
                      backgroundColor: "var(--lp-bg-card)",
                      border: "1px solid var(--lp-grid-line)",
                    }}
                  >
                    Conversion Analytics
                  </Button>
                  <Button
                    className="text-xs sm:text-sm font-medium shadow-sm w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"
                    style={{
                      color: "var(--lp-text-primary)",
                      backgroundColor: "var(--lp-bg-card)",
                      border: "1px solid var(--lp-grid-line)",
                    }}
                  >
                    Affiliate Programs
                  </Button>
                </div>
              </div>

              {/* Video Demo Section */}
              <div
                className="grid-section relative overflow-visible px-4 sm:px-6 md:px-8"
                style={{
                  backgroundColor: "var(--lp-bg-subtle)",
                }}
              >
                <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 relative">
                  <HeroVideoDialog
                    className="block"
                    animationStyle="from-center"
                    videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Dub Platform Demo Video"
                  />

                  {/* Video Bottom Gradient Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: "var(--lp-video-overlay)",
                    }}
                  ></div>

                  {/* Black Overlapping Div */}
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-60 sm:w-72 md:w-80 h-12 sm:h-14 md:h-16 rounded-lg shadow-lg z-50 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--lp-accent)",
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Link2
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        style={{ color: "var(--lp-accent-contrast)" }}
                      />
                      <span
                        className="font-medium text-sm sm:text-base"
                        style={{ color: "var(--lp-accent-contrast)" }}
                      >
                        Short Links
                      </span>
                      <ArrowRight
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        style={{ color: "var(--lp-accent-contrast)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Logos - Outside grid pattern container */}
            <div
              className="py-8 sm:py-12 md:py-16 lg:py-20"
              style={{ backgroundColor: "var(--lp-bg-card)" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4 md:gap-y-6 items-center justify-items-center max-w-5xl mx-auto">
                  {currentCompanies.map((company, idx) => (
                    <div
                      key={`${currentCompanySet}-${idx}`}
                      className="group cursor-pointer w-full"
                    >
                      <div
                        className="flex flex-col items-center p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl transition-all duration-200 hover:bg-opacity-50"
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        <div
                          className={`group-hover:scale-110 transition-transform duration-200`}
                          style={{
                            animation: "fadeInSlide 0.8s ease-in-out",
                          }}
                        >
                          {company.logo.startsWith("https://") ? (
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                              style={{
                                filter: "var(--lp-logo-filter)",
                              }}
                            />
                          ) : (
                            <span
                              className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl ${company.color}`}
                            >
                              {company.logo}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes fadeInSlide {
                  0% {
                    opacity: 0;
                    transform: translateY(20px) scale(0.9);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
              `}</style>
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
