"use client";
import { useState, useEffect } from "react";
import { Link2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeView from "./CodeView";

// Props type
type LandingpagethreeProps = {
  hideHeader?: boolean;
};
export default function Landingpagethree({
  hideHeader = false,
}: LandingpagethreeProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [currentCompanySet, setCurrentCompanySet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

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
      setIsAnimating(true);

      // After out animation completes, change the company set and trigger in animation
      setTimeout(() => {
        setCurrentCompanySet((prev) => (prev + 1) % allCompanies.length);
        setIsAnimating(false);
      }, 700); // Faster transition - halfway through the rotation
    }, 5000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Reset viewport to desktop when switching to code tab
  useEffect(() => {
    if (activeTab === "code") {
      setViewport("desktop");
    }
  }, [activeTab]);

  const currentCompanies = allCompanies[currentCompanySet];

  // Handle viewport changes
  const handleViewportChange = (
    newViewport: "mobile" | "tablet" | "desktop"
  ) => {
    setViewport(newViewport);
  };

  // Get container width based on viewport
  const getContainerWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-sm"; // ~384px
      case "tablet":
        return "max-w-2xl"; // ~672px
      case "desktop":
      default:
        return "w-full"; // Full width
    }
  };

  // Get container alignment based on viewport
  const getContainerAlignment = () => {
    switch (viewport) {
      case "mobile":
      case "tablet":
        return "mr-auto"; // Left aligned for mobile and tablet
      case "desktop":
      default:
        return "mx-auto"; // Center aligned for desktop
    }
  };

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
import { ArrowRight, Link2 } from "lucide-react";

// Component for Button - You can replace this with your own Button component
const Button = ({ children, className, style, ...props }) => (
  <button
    className={\`inline-flex items-center justify-center rounded-md text-sm 
                font-medium transition-colors focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-ring 
                focus-visible:ring-offset-2 disabled:opacity-50 
                disabled:pointer-events-none ring-offset-background \${className}\`}
    style={style}
    {...props}
  >
    {children}
  </button>
);

// Component for HeroVideoDialog - You can replace this with your own video component
const HeroVideoDialog = ({ videoSrc, thumbnailSrc, thumbnailAlt, className, animationStyle }) => (
  <div className={\`relative \${className}\`}>
    <div className="relative rounded-lg overflow-hidden shadow-2xl">
      <img 
        src={thumbnailSrc} 
        alt={thumbnailAlt}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center 
                           justify-center shadow-lg hover:bg-white transition-colors">
          <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] 
                          border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
        </button>
      </div>
    </div>
  </div>
);

export default function ResponsiveLandingPage() {
  const [currentCompanySet, setCurrentCompanySet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewport, setViewport] = useState("desktop");

  // All companies divided into sets of 10
  const allCompanies = [
    // Set 1 - 10 companies with SVG logos
    [
      { name: "Twilio", logo: "https://assets.dub.co/companies/twilio.svg", color: "text-red-500" },
      { name: "Superhuman", logo: "https://assets.dub.co/companies/superhuman.svg", color: "text-purple-500" },
      { name: "Perplexity", logo: "https://assets.dub.co/companies/perplexity.svg", color: "text-blue-500" },
      { name: "Vercel", logo: "https://assets.dub.co/companies/vercel.svg", color: "text-yellow-500" },
      { name: "Raycast", logo: "https://assets.dub.co/companies/raycast.svg", color: "text-green-500" },
      { name: "Framer", logo: "https://assets.dub.co/companies/framer.svg", color: "text-purple-500" },
      { name: "Huberman Lab", logo: "https://assets.dub.co/companies/hubermanlab.svg", color: "text-blue-500" },
      { name: "Tonies", logo: "https://assets.dub.co/companies/tonies.svg", color: "text-green-600" },
      { name: "Buffer", logo: "https://assets.dub.co/companies/buffer.svg", color: "text-red-500" },
      { name: "Product Hunt", logo: "https://assets.dub.co/companies/product-hunt.svg", color: "text-gray-600" },
    ],
    // Set 2 - 10 companies with SVG logos
    [
      { name: "Whop", logo: "https://assets.dub.co/companies/whop.svg", color: "text-red-500" },
      { name: "Clerk", logo: "https://assets.dub.co/companies/clerk.svg", color: "text-purple-500" },
      { name: "Cal.com", logo: "https://assets.dub.co/companies/cal.svg", color: "text-blue-500" },
      { name: "Bolt", logo: "https://assets.dub.co/companies/bolt.svg", color: "text-yellow-500" },
      { name: "Supabase", logo: "https://assets.dub.co/companies/supabase.svg", color: "text-green-500" },
      { name: "Tella", logo: "https://assets.dub.co/companies/tella.svg", color: "text-purple-500" },
      { name: "Polymarket", logo: "https://assets.dub.co/companies/polymarket.svg", color: "text-blue-500" },
      { name: "Granola", logo: "https://assets.dub.co/companies/granola.svg", color: "text-green-600" },
      { name: "Superlist", logo: "https://assets.dub.co/companies/superlist.svg", color: "text-red-500" },
      { name: "Jobber", logo: "https://assets.dub.co/companies/jobber.svg", color: "text-gray-600" },
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCompanySet((prev) => (prev + 1) % allCompanies.length);
        setIsAnimating(false);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCompanies = allCompanies[currentCompanySet];

  // Get container width based on viewport
  const getContainerWidth = () => {
    switch (viewport) {
      case "mobile": return "max-w-sm";
      case "tablet": return "max-w-2xl";
      case "desktop":
      default: return "w-full";
    }
  };

  // Get container alignment based on viewport
  const getContainerAlignment = () => {
    switch (viewport) {
      case "mobile":
      case "tablet": return "mr-auto";
      case "desktop":
      default: return "mx-auto";
    }
  };

  

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      
      {/* Viewport Controls - Optional: Remove if not needed */}
      <div className="flex gap-2 mb-4 p-4 bg-gray-100 rounded-lg">
        <button
          onClick={() => setViewport("mobile")}
          className={\`px-3 py-1 rounded text-sm \${viewport === "mobile" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}\`}
        >
          📱 Mobile
        </button>
        <button
          onClick={() => setViewport("tablet")}
          className={\`px-3 py-1 rounded text-sm \${viewport === "tablet" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}\`}
        >
          💻 Tablet
        </button>
        <button
          onClick={() => setViewport("desktop")}
          className={\`px-3 py-1 rounded text-sm \${viewport === "desktop" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}\`}
        >
          🖥️ Desktop
        </button>
      </div>

      <div className={\`\${getContainerWidth()} \${getContainerAlignment()} min-h-[60vh] font-sans\`}>
        <div className="min-h-[60vh]">
          <div
            className="w-full min-h-[60vh] relative"
            style={{
              background: "linear-gradient(to bottom, var(--lp-bg-base), var(--lp-bg-subtle))",
            }}
          >
            {/* Grid Pattern Background */}
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

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "var(--lp-gradient-overlay)" }}
            ></div>

            {/* Hero Section */}
            <div
              className={\`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 z-10 \${
                viewport === "mobile" ? "text-left" : "text-center"
              }\`}
            >
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
                    🎉 Introducing New Features
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
                    className={
                      viewport === "mobile"
                        ? "text-2xl font-bold leading-tight px-4"
                        : viewport === "tablet"
                        ? "text-3xl font-bold leading-tight px-4"
                        : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 sm:px-0"
                    }
                    style={{ color: "var(--lp-text-primary)" }}
                  >
                    Turn clicks into revenue
                  </h1>
                </div>

                <div className="relative mb-8 sm:mb-10">
                  <p
                    className={
                      viewport === "mobile"
                        ? "text-sm max-w-xs mx-auto leading-relaxed px-4"
                        : viewport === "tablet"
                        ? "text-base max-w-lg mx-auto leading-relaxed px-4"
                        : "text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                    }
                    style={{ color: "var(--lp-text-secondary)" }}
                  >
                    A modern platform for short links, conversion tracking, and affiliate programs.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div
                  className={\`flex items-center justify-center mb-12 sm:mb-16 px-4 sm:px-0 \${
                    viewport === "mobile"
                      ? "flex-col gap-3"
                      : viewport === "tablet"
                      ? "flex-col sm:flex-row gap-3 sm:gap-4"
                      : "flex-col sm:flex-row gap-3 sm:gap-4"
                  }\`}
                >
                  <Button
                    className={
                      viewport === "mobile"
                        ? "px-6 py-3 text-base font-semibold shadow-lg w-full max-w-xs rounded-lg"
                        : viewport === "tablet"
                        ? "px-4 py-2 text-sm font-semibold shadow-lg w-auto max-w-fit rounded-lg"
                        : "px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none"
                    }
                    style={{
                      backgroundColor: "var(--lp-accent)",
                      color: "var(--lp-accent-contrast)",
                    }}
                  >
                    Start for free
                  </Button>
                  <Button
                    className={
                      viewport === "mobile"
                        ? "px-6 py-3 text-base font-semibold w-full max-w-xs rounded-lg"
                        : viewport === "tablet"
                        ? "px-4 py-2 text-sm font-semibold w-auto max-w-fit rounded-lg"
                        : "px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
                    }
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
              <div
                className={\`flex items-center w-full sm:w-auto \${
                  viewport === "mobile"
                    ? "flex-col gap-3 max-w-xs"
                    : viewport === "tablet"
                    ? "flex-row gap-2 max-w-fit"
                    : "flex-col sm:flex-row gap-2 sm:gap-3 max-w-md sm:max-w-none"
                }\`}
              >
                {["Short Links", "Conversion Analytics", "Affiliate Programs"].map((feature) => (
                  <Button
                    key={feature}
                    className={
                      viewport === "mobile"
                        ? "text-sm font-medium shadow-sm w-full px-4 py-3 rounded-lg"
                        : viewport === "tablet"
                        ? "text-xs font-medium shadow-sm w-auto px-3 py-2 rounded-lg"
                        : "text-xs sm:text-sm font-medium shadow-sm w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"
                    }
                    style={{
                      color: "var(--lp-text-primary)",
                      backgroundColor: "var(--lp-bg-card)",
                      border: "1px solid var(--lp-grid-line)",
                    }}
                  >
                    {feature}
                  </Button>
                ))}
              </div>
            </div>

            {/* Video Demo Section */}
            <div
              className="grid-section relative overflow-visible px-4 sm:px-6 md:px-8"
              style={{ backgroundColor: "var(--lp-bg-subtle)" }}
            >
              <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 relative">
                <HeroVideoDialog
                  className="block"
                  animationStyle="from-center"
                  videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                  thumbnailAlt="Platform Demo Video"
                />

                {/* Video Bottom Gradient Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{ background: "var(--lp-video-overlay)" }}
                ></div>

                {/* Overlapping Feature Badge */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                             translate-y-1/2 w-60 sm:w-72 md:w-80 h-12 sm:h-14 md:h-16 
                             rounded-lg shadow-lg z-50 flex items-center justify-center"
                  style={{ backgroundColor: "var(--lp-accent)" }}
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

          {/* Company Logos Section */}
          <div
            className="py-8 sm:py-12 md:py-16 lg:py-20"
            style={{ backgroundColor: "var(--lp-bg-card)" }}
          >
            <div
              className={
                viewport === "mobile"
                  ? "max-w-sm mr-auto px-4 text-left"
                  : viewport === "tablet"
                  ? "max-w-2xl mr-auto px-6 text-center"
                  : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
              }
            >
              <div
                className={
                  viewport === "mobile"
                    ? "grid grid-cols-2 gap-x-6 gap-y-8 items-center justify-items-center max-w-xs mx-auto"
                    : viewport === "tablet"
                    ? "grid grid-cols-5 gap-x-4 gap-y-6 items-center justify-items-center max-w-2xl mx-auto"
                    : \`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                       gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 
                       gap-y-3 sm:gap-y-4 md:gap-y-6 items-center 
                       justify-items-center max-w-5xl mx-auto\`
                }
              >
                {currentCompanies.slice(0, 10).map((company, idx) => (
                  <div key={\`\${currentCompanySet}-\${idx}\`} className="group cursor-pointer w-full">
                    <div
                      className={
                        viewport === "mobile"
                          ? "flex flex-col items-center p-2 rounded-lg transition-all duration-200 hover:bg-opacity-50"
                          : viewport === "tablet"
                          ? "flex flex-col items-center p-3 rounded-xl transition-all duration-200 hover:bg-opacity-50"
                          : \`flex flex-col items-center p-2 sm:p-3 md:p-4 lg:p-6 
                             rounded-xl transition-all duration-200 hover:bg-opacity-50\`
                      }
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div
                        className={\`logo-container group-hover:scale-110 transition-transform duration-200 \${
                          viewport === "mobile"
                            ? "w-16 h-16"
                            : viewport === "tablet"
                            ? "w-12 h-12"
                            : "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                        } flex items-center justify-center \${
                          isAnimating ? "animate-flip-out" : "animate-flip-in"
                        }\`}
                      >
                        {company.logo.startsWith("https://") ? (
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="max-w-full max-h-full object-contain"
                            style={{ filter: "var(--lp-logo-filter)" }}
                          />
                        ) : (
                          <span
                            className={\`\${
                              viewport === "mobile"
                                ? "text-lg"
                                : viewport === "tablet"
                                ? "text-sm"
                                : "text-lg sm:text-xl md:text-2xl lg:text-3xl"
                            } \${company.color} font-semibold\`}
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

            <style jsx>{\`
              @keyframes flipOut {
                0% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
                100% { transform: perspective(400px) rotateX(-90deg); opacity: 0; }
              }
              
              @keyframes flipIn {
                0% { transform: perspective(400px) rotateX(90deg); opacity: 0; }
                100% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
              }
              
              .animate-flip-out { animation: flipOut 0.6s ease-in-out forwards; }
              .animate-flip-in { animation: flipIn 0.6s ease-in-out forwards; }
              .logo-container { transform-style: preserve-3d; }
            \`}</style>
          </div>
        </div>
      </div>
    </>
  );
}`;

  return (
    <div className="w-full font-inter">
      <div className="min-h-[60vh]">
        {hideHeader || activeTab === "preview" ? (
          <div
            className={`${getContainerWidth()} ${getContainerAlignment()} min-h-[60vh]`}
          >
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
                {/* Hero Section */}
                <div
                  className={
                    "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 z-10 " +
                    (viewport === "mobile" ? "text-left" : "text-center")
                  }
                >
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
                        className={
                          viewport === "mobile"
                            ? "text-2xl font-bold leading-tight px-4"
                            : viewport === "tablet"
                            ? "text-3xl font-bold leading-tight px-4"
                            : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4 sm:px-0"
                        }
                        style={{ color: "var(--lp-text-primary)" }}
                      >
                        Turn clicks into revenue
                      </h1>
                    </div>

                    <div className="relative mb-8 sm:mb-10">
                      <p
                        className={
                          viewport === "mobile"
                            ? "text-sm max-w-xs mx-auto leading-relaxed px-4"
                            : viewport === "tablet"
                            ? "text-base max-w-lg mx-auto leading-relaxed px-4"
                            : "text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                        }
                        style={{ color: "var(--lp-text-secondary)" }}
                      >
                        Dub is the modern link attribution platform for short
                        links, conversion tracking, and affiliate programs.
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div
                      className={`flex items-center justify-center mb-12 sm:mb-16 px-4 sm:px-0 ${
                        viewport === "mobile"
                          ? "flex-col gap-3"
                          : viewport === "tablet"
                          ? "flex-col sm:flex-row gap-3 sm:gap-4"
                          : "flex-col sm:flex-row gap-3 sm:gap-4"
                      }`}
                    >
                      <Button
                        className={
                          viewport === "mobile"
                            ? "px-6 py-3 text-base font-semibold shadow-lg w-full max-w-xs rounded-lg"
                            : viewport === "tablet"
                            ? "px-4 py-2 text-sm font-semibold shadow-lg w-auto max-w-fit rounded-lg"
                            : "px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none"
                        }
                        style={{
                          backgroundColor: "var(--lp-accent)",
                          color: "var(--lp-accent-contrast)",
                        }}
                      >
                        Start for free
                      </Button>
                      <Button
                        className={
                          viewport === "mobile"
                            ? "px-6 py-3 text-base font-semibold w-full max-w-xs rounded-lg"
                            : viewport === "tablet"
                            ? "px-4 py-2 text-sm font-semibold w-auto max-w-fit rounded-lg"
                            : "px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
                        }
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
                  <div
                    className={`flex items-center w-full sm:w-auto ${
                      viewport === "mobile"
                        ? "flex-col gap-3 max-w-xs"
                        : viewport === "tablet"
                        ? "flex-row gap-2 max-w-fit"
                        : "flex-col sm:flex-row gap-2 sm:gap-3 max-w-md sm:max-w-none"
                    }`}
                  >
                    <Button
                      className={
                        viewport === "mobile"
                          ? "text-sm font-medium shadow-sm w-full px-4 py-3 rounded-lg"
                          : viewport === "tablet"
                          ? "text-xs font-medium shadow-sm w-auto px-3 py-2 rounded-lg"
                          : "text-xs sm:text-sm font-medium shadow-sm w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"
                      }
                      style={{
                        color: "var(--lp-text-primary)",
                        backgroundColor: "var(--lp-bg-card)",
                        border: "1px solid var(--lp-grid-line)",
                      }}
                    >
                      Short Links
                    </Button>

                    <Button
                      className={
                        viewport === "mobile"
                          ? "text-sm font-medium shadow-sm w-full px-4 py-3 rounded-lg"
                          : viewport === "tablet"
                          ? "text-xs font-medium shadow-sm w-auto px-3 py-2 rounded-lg"
                          : "text-xs sm:text-sm font-medium shadow-sm w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"
                      }
                      style={{
                        color: "var(--lp-text-primary)",
                        backgroundColor: "var(--lp-bg-card)",
                        border: "1px solid var(--lp-grid-line)",
                      }}
                    >
                      Conversion Analytics
                    </Button>
                    <Button
                      className={
                        viewport === "mobile"
                          ? "text-sm font-medium shadow-sm w-full px-4 py-3 rounded-lg"
                          : viewport === "tablet"
                          ? "text-xs font-medium shadow-sm w-auto px-3 py-2 rounded-lg"
                          : "text-xs sm:text-sm font-medium shadow-sm w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3"
                      }
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
                <div
                  className={
                    viewport === "mobile"
                      ? "max-w-sm mr-auto px-4 text-left"
                      : viewport === "tablet"
                      ? "max-w-2xl mr-auto px-6 text-center"
                      : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                  }
                >
                  <div
                    className={
                      viewport === "mobile"
                        ? "grid grid-cols-2 gap-x-6 gap-y-8 items-center justify-items-center max-w-xs mx-auto"
                        : viewport === "tablet"
                        ? "grid grid-cols-5 gap-x-4 gap-y-6 items-center justify-items-center max-w-2xl mx-auto"
                        : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-3 sm:gap-y-4 md:gap-y-6 items-center justify-items-center max-w-5xl mx-auto"
                    }
                  >
                    {/* Show all companies for mobile (2x5), all for tablet (5x2), all for desktop */}
                    {currentCompanies
                      .slice(
                        0,
                        viewport === "mobile"
                          ? 10
                          : viewport === "tablet"
                          ? 10
                          : 10
                      )
                      .map((company, idx) => (
                        <div
                          key={`${currentCompanySet}-${idx}`}
                          className="group cursor-pointer w-full"
                        >
                          <div
                            className={
                              viewport === "mobile"
                                ? "flex flex-col items-center p-2 rounded-lg transition-all duration-200 hover:bg-opacity-50"
                                : viewport === "tablet"
                                ? "flex flex-col items-center p-3 rounded-xl transition-all duration-200 hover:bg-opacity-50"
                                : "flex flex-col items-center p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl transition-all duration-200 hover:bg-opacity-50"
                            }
                            style={{
                              backgroundColor: "transparent",
                            }}
                          >
                            {/* Fixed size container for consistent logo dimensions */}
                            <div
                              className={`logo-container group-hover:scale-110 transition-transform duration-200 ${
                                viewport === "mobile"
                                  ? "w-16 h-16"
                                  : viewport === "tablet"
                                  ? "w-12 h-12"
                                  : "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                              } flex items-center justify-center ${
                                isAnimating
                                  ? "animate-flip-out"
                                  : "animate-flip-in"
                              }`}
                            >
                              {company.logo.startsWith("https://") ? (
                                <img
                                  src={company.logo}
                                  alt={company.name}
                                  className="max-w-full max-h-full object-contain"
                                  style={{
                                    filter: "var(--lp-logo-filter)",
                                  }}
                                />
                              ) : (
                                <span
                                  className={`${
                                    viewport === "mobile"
                                      ? "text-lg"
                                      : viewport === "tablet"
                                      ? "text-sm"
                                      : "text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                  } ${company.color} font-semibold`}
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
                  @keyframes flipOut {
                    0% {
                      transform: perspective(400px) rotateX(0deg);
                      opacity: 1;
                    }
                    100% {
                      transform: perspective(400px) rotateX(-90deg);
                      opacity: 0;
                    }
                  }

                  @keyframes flipIn {
                    0% {
                      transform: perspective(400px) rotateX(90deg);
                      opacity: 0;
                    }
                    100% {
                      transform: perspective(400px) rotateX(0deg);
                      opacity: 1;
                    }
                  }

                  .animate-flip-out {
                    animation: flipOut 0.6s ease-in-out forwards;
                  }

                  .animate-flip-in {
                    animation: flipIn 0.6s ease-in-out forwards;
                  }

                  .logo-container {
                    transform-style: preserve-3d;
                  }
                `}</style>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="w-full h-full text-left">
              <CodeView language="tsx" code={codeContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
