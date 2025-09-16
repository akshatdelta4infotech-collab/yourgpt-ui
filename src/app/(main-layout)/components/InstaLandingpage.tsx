import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Bot,
  Zap,
  Users,
  Heart,
  Send,
  ArrowRight,
  Sparkles,
  Camera,
  CheckCheck,
  Link,
  Rocket,
  CheckCircle,
  ShoppingCart,
  Sun,
  Bell,
  Target,
  TrendingUp,
  Instagram,
  Plus,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/utils/features";

import PreviewCodeHeader from "./PreviewCodeHeader";
import CodeView from "./CodeView";

// Props type
type InstaLandingpageProps = {
  hideHeader?: boolean;
};

export default function InstaLandingpage({
  hideHeader = false,
}: InstaLandingpageProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

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
        return ""; // ~384px
      case "tablet":
        return ""; // ~768px
      case "desktop":
      default:
        return ""; // Full width
    }
  };

  // Get container alignment based on viewport
  const getContainerAlignment = () => {
    switch (viewport) {
      case "mobile":
      case "tablet":
        return ""; // Left aligned (no mx-auto)
      case "desktop":
      default:
        return "mx-auto"; // Center aligned
    }
  };

  //   functions for hero sections
  const chatMessages = [
    {
      user: "Sarah_fashion",
      message: "Is this dress available in size M?",
      time: "2m ago",
      avatar: "S",
    },
    {
      bot: true,
      message:
        "Yes! The M size is in stock. Would you like me to reserve it for you? 😊",
      time: "1m ago",
    },
    {
      user: "mike_fitness",
      message: "What's your return policy?",
      time: "5m ago",
      avatar: "M",
    },
    {
      bot: true,
      message:
        "We offer 30-day hassle-free returns! Need help with an order? 📦",
      time: "4m ago",
    },
    { user: "anna_beauty", message: "💕", time: "now", avatar: "A" },
    {
      bot: true,
      message: "Thanks for the love! Check our story for exclusive deals ✨",
      time: "now",
    },
  ];

  const aiFeatures = [
    { icon: MessageCircle, text: "24/7 Instant Response" },
    { icon: Bot, text: "Smart AI Conversations" },
    { icon: Zap, text: "Automated Sales" },
    { icon: Users, text: "Customer Support" },
  ];
  //   functions for features sections
  const [currentFeature, setCurrentFeature] = useState(0);
  const [messages, setMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // animate chat scenario
  useEffect(() => {
    setMessages([]);
    const currentMessages = features[currentFeature].chatScenario;

    currentMessages.forEach((message, index) => {
      setTimeout(() => {
        if (message.type === "bot") {
          setIsTyping(true);
          setTimeout(() => {
            setMessages((prev) => [...prev, message]);
            setIsTyping(false);
          }, 1000);
        } else {
          setMessages((prev) => [...prev, message]);
        }
      }, index * 2000);
    });
  }, [currentFeature]);

  // auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextFeature = () =>
    setCurrentFeature((prev) => (prev + 1) % features.length);
  const prevFeature = () =>
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);

  // how it works functions

  const howItWorksSteps = [
    {
      step: "01",
      icon: Bot,
      title: "Create Your Custom AI Agent",
      description:
        "Set up your Instagram AI agent with your business knowledge, brand voice, and product details",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "02",
      icon: Link,
      title: "Connect to Instagram Business",
      description:
        "Link your Instagram business account securely with our one-click setup process. No technical skills required.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      step: "03",
      icon: Rocket,
      title: "Deploy and Test",
      description:
        "Launch your Instagram chatbot and test it with real conversations to ensure everything works perfectly.",
      gradient: "from-green-500 to-blue-500",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Go Live & Scale",
      description:
        "Your AI chatbot is now live, handling customer inquiries 24/7 and converting followers into customers.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  // use case function
  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Boost Instagram sales by automating product queries, order processing, and shipping updates 24/7.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sun,
      title: "Content Creators",
      description:
        "Manage fan engagement, brand partnerships, and content inquiries automatically on Instagram.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Bell,
      title: "Support Teams",
      description:
        "Handle Instagram support, returns, and customer questions instantly with AI.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Lead Generation",
      description:
        "Convert Instagram followers into customers with automated lead capture and nurturing.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  //  use effect for hero setion
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % chatMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  //faqs data section
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How do I connect my AI chatbot to Instagram?",
      answer:
        "Simply connect your Instagram Business account through our secure OAuth integration. Our platform will guide you through the setup process in just a few minutes, and you'll have your AI chatbot responding to messages automatically.",
    },
    {
      question: "Do I need an Instagram Business account?",
      answer:
        "Yes, you'll need an Instagram Business or Creator account to use our chatbot features. This allows us to access Instagram's messaging API and provide automated responses to your customers.",
    },
    {
      question: "Can my Instagram chatbot handle DMs and comments?",
      answer:
        "Absolutely! Your AI chatbot can respond to direct messages automatically and can also engage with comments on your posts, providing instant customer support 24/7.",
    },
    {
      question: "What types of media and files can my AI chatbot handle?",
      answer:
        "Your chatbot can process and respond to text messages, images, and can send back various media types including photos, videos, and documents to provide comprehensive customer support.",
    },
    {
      question: "Can I automate product recommendations on Instagram?",
      answer:
        "Yes! Our AI can analyze customer inquiries and automatically suggest relevant products from your catalog, complete with images, prices, and direct purchase links.",
    },
    {
      question: "How can I track my Instagram chatbot's performance?",
      answer:
        "Our comprehensive dashboard provides real-time analytics including response rates, customer satisfaction scores, conversation volumes, and conversion metrics to help you optimize your Instagram strategy.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Simple FAQ Illustration - Just floating and glowing effects
  const FAQIllustration = () => {
    return (
      <div className="relative flex items-center justify-center p-8">
        <div className="relative w-72 h-72">
          {/* Simple glowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl" />

          {/* Simple border glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-indigo-500/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.4)",
                "0 0 20px rgba(99, 102, 241, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main content area */}
          <div className="absolute inset-4 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6">
            {/* Central bot with simple float */}
            <motion.div
              className="relative mb-8"
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Simple text that fades in and out */}
            <div className="text-center space-y-2">
              <motion.p
                className="text-sm text-white font-medium"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AI-Powered Support
              </motion.p>
              <motion.p
                className="text-xs text-slate-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                24/7 Customer Service
              </motion.p>
            </div>

            {/* Simple corner dots */}
            {[
              { position: "top-3 left-3", delay: 0 },
              { position: "top-3 right-3", delay: 0.5 },
              { position: "bottom-3 left-3", delay: 1 },
              { position: "bottom-3 right-3", delay: 1.5 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} w-2 h-2 bg-indigo-400/60 rounded-full`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: item.delay,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Simple CTA Illustration - Static layout with gentle animations
  const CTAIllustration = () => {
    return (
      <div className="relative flex items-center justify-center p-8">
        <div className="relative w-72 h-72">
          {/* Simple background circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full" />

          {/* Gentle pulsing border */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-500/30"
            animate={{
              scale: [1, 1.02, 1],
              borderColor: [
                "rgba(168, 85, 247, 0.3)",
                "rgba(236, 72, 153, 0.4)",
                "rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner content area */}
          <div className="absolute inset-8 bg-slate-900/80 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center">
            {/* Central Instagram icon */}
            <motion.div
              className="relative z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Static positioned icons around the circle - no complex orbiting */}
            <motion.div
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              <Bot className="w-4 h-4 text-white" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            >
              <TrendingUp className="w-4 h-4 text-white" />
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
            >
              <MessageCircle className="w-4 h-4 text-white" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center"
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            >
              <Users className="w-4 h-4 text-white" />
            </motion.div>

            {/* Simple connecting lines - static */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-px h-16 bg-gradient-to-t from-transparent via-indigo-400/30 to-transparent absolute top-6" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent absolute right-6" />
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent absolute bottom-6" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-indigo-400/30 to-transparent absolute left-6" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* ✅ Conditionally show header */}
      {!hideHeader && (
        <PreviewCodeHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          previewComponent="InstaLandingpage"
          hideTopBorder={false}
          onViewportChange={handleViewportChange}
        />
      )}
      {activeTab === "preview" ? (
        <div
          className={` ${getContainerWidth()} ${getContainerAlignment()} min-h-screen relative overflow-hidden mt-10 `}
          style={{ backgroundColor: "oklch(0.141 0.005 285.823)" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />
          </div>

          {/* Floating Instagram Chat Bubbles - Left Side */}
          <div
            className={`absolute left-0 top-0 h-full overflow-hidden ${
              viewport === "mobile"
                ? "w-40 opacity-10" // smaller + lighter
                : viewport === "tablet"
                ? "w-60 opacity-15" // medium
                : "w-80 opacity-20" // default desktop
            }`}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={`left-${i}`}
                className={`absolute bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/10 transition-all duration-[4000ms] ease-in-out animate-bounce ${
                  i === currentMessage % 3
                    ? "opacity-100 scale-105"
                    : "opacity-60"
                }`}
                style={{
                  top: `${15 + i * (viewport === "mobile" ? 18 : 14)}%`, // more spacing on mobile
                  left: `-${viewport === "mobile" ? 10 : 15 + (i % 2) * 12}px`,
                  transform: `rotate(${-5 + i * 3}deg) translateY(${
                    Math.sin(Date.now() / 1500 + i) *
                    (viewport === "mobile" ? 6 : 12) // reduce float on mobile
                  }px)`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: "8s",
                }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                    {chatMessages[i]?.avatar || "U"}
                  </div>
                  <span className="text-white/70 text-xs md:text-sm">
                    {chatMessages[i]?.user || "User"}
                  </span>
                </div>
                <p className="text-white/80 text-xs md:text-sm">
                  {chatMessages[i]?.message || "Hey there!"}
                </p>
                <span className="text-white/50 text-[10px] md:text-xs">
                  {chatMessages[i]?.time || "now"}
                </span>
              </div>
            ))}
          </div>

          {/* Floating Instagram Chat Bubbles - Right Side */}
          <div
            className={`absolute right-0 top-0 h-full overflow-hidden ${
              viewport === "mobile"
                ? "w-40 opacity-10"
                : viewport === "tablet"
                ? "w-60 opacity-15"
                : "w-80 opacity-25"
            }`}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={`right-${i}`}
                className={`absolute bg-black/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-pink-500/15 transition-all duration-[2500ms] ease-in-out animate-bounce ${
                  i === (currentMessage + 1) % 3
                    ? "opacity-100 scale-105 -translate-x-1"
                    : "opacity-60 translate-x-0"
                }`}
                style={{
                  top: `${10 + i * (viewport === "mobile" ? 22 : 18)}%`,
                  right: `-${viewport === "mobile" ? 10 : 15 + (i % 2) * 15}px`,
                  transform: `rotate(${12 + (i % 5) * -4}deg) translateY(${
                    Math.sin(Date.now() / 1000 + i + 1) *
                    (viewport === "mobile" ? 5 : 10)
                  }px)`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: "8s",
                }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm font-medium">
                    AI Assistant
                  </span>
                </div>
                <p className="text-white/80 text-xs md:text-sm">
                  {i % 2 === 0
                    ? "I can help you with product info, orders, and more! 🤖"
                    : "Thanks for your message! How can I assist you today? ✨"}
                </p>
                <span className="text-white/50 text-[10px] md:text-xs">
                  now
                </span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full px-6 flex items-center justify-center min-h-screen">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-4 py-2 mb-8">
                <Bot className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400 text-sm font-medium">
                  AI-Powered Instagram Automation
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className={`font-black mb-4 md:mb-6 leading-tight ${
                  viewport === "mobile"
                    ? "text-3xl"
                    : viewport === "tablet"
                    ? "text-5xl"
                    : "text-7xl"
                }`}
              >
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Automate Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Instagram Chats
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  with AI
                </span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-gray-300 mx-auto leading-relaxed mb-8 md:mb-12 ${
                  viewport === "mobile"
                    ? "text-base max-w-xs"
                    : viewport === "tablet"
                    ? "text-lg max-w-xl"
                    : "text-2xl max-w-3xl"
                }`}
              >
                Transform your Instagram DMs into a powerful sales machine. Our
                AI chatbot engages customers
                <span className="text-pink-400 font-semibold"> 24/7</span>,
                answers questions instantly, and
                <span className="text-purple-400 font-semibold">
                  {" "}
                  converts followers into customers
                </span>
                .
              </p>

              {/* Buttons */}
              <div
                className={`flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 ${
                  viewport === "mobile" ? "flex-col" : "flex-row"
                }`}
              >
                <Button
                  size="lg"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 border-0"
                >
                  <Zap
                    className={`${
                      viewport === "mobile" ? "w-4 h-4 mr-2" : "w-5 h-5 mr-2"
                    }`}
                  />
                  Get Started Now
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="inline-flex items-center justify-center border-2 border-gray-600 text-white hover:bg-white hover:text-gray-900 font-bold px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 bg-white/5"
                >
                  <MessageCircle
                    className={`${
                      viewport === "mobile" ? "w-4 h-4 mr-2" : "w-5 h-5 mr-2"
                    }`}
                  />
                  See How It Works
                </Button>
              </div>

              {/* Features Grid */}
              <div
                className={`grid gap-4 sm:gap-6 w-full max-w-4xl mx-auto px-4 sm:px-6
    ${viewport === "mobile" ? "grid-cols-2" : "grid-cols-4"}`}
              >
                {aiFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm rounded-xl 
        ${viewport === "mobile" ? "p-4" : "p-6"} 
        border border-white/10 hover:border-pink-500/30 
        transition-all duration-300 group hover:bg-white/10`}
                  >
                    <feature.icon
                      className={`mx-auto group-hover:scale-110 transition-transform duration-300
          ${viewport === "mobile" ? "w-6 h-6 mb-2" : "w-8 h-8 mb-3"}
        `}
                    />
                    <p
                      className={`text-white/80 font-medium text-center
          ${viewport === "mobile" ? "text-xs" : "text-sm"}
        `}
                    >
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400 text-xs sm:text-sm md:text-base">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400">
                    10k+
                  </div>
                  <div>Businesses</div>
                </div>
                <div className="hidden sm:block w-px h-6 sm:h-7 md:h-8 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
                    99.9%
                  </div>
                  <div>Uptime</div>
                </div>
                <div className="hidden sm:block w-px h-6 sm:h-7 md:h-8 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400">
                    5x
                  </div>
                  <div>ROI Increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Hearts */}
            {[...Array(8)].map((_, i) => (
              <Heart
                key={`heart-${i}`}
                className="absolute text-pink-500/20 animate-pulse"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + i * 8}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${2 + (i % 3)}s`,
                }}
                size={12 + (i % 3) * 6} // smaller on mobile
              />
            ))}

            {/* Floating Send Icons */}
            {[...Array(6)].map((_, i) => (
              <Send
                key={`send-${i}`}
                className="absolute text-purple-500/20 animate-bounce"
                style={{
                  right: `${15 + i * 12}%`,
                  top: `${25 + i * 12}%`,
                  animationDelay: `${i * 1.2}s`,
                  animationDuration: `${3 + (i % 2)}s`,
                }}
                size={10 + (i % 2) * 4} // smaller on mobile
              />
            ))}
          </div>

          {/* features sections */}

          <div
            className="min-h-screen mt-20"
            style={{ backgroundColor: "oklch(0.141 0.005 285.823)" }}
          >
            <div className="max-w-7xl mx-auto p-6">
              {/* Header */}
              <div
                className={`text-center ${
                  viewport === "mobile"
                    ? "mb-8"
                    : viewport === "tablet"
                    ? "mb-10"
                    : "mb-12"
                }`}
              >
                <div
                  className={`flex items-center justify-center gap-2 ${
                    viewport === "mobile" ? "mb-3" : "mb-4"
                  }`}
                >
                  <div
                    className={`rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ${
                      viewport === "mobile" ? "p-1.5" : "p-2"
                    }`}
                  >
                    <Sparkles
                      className={`text-white ${
                        viewport === "mobile" ? "w-4 h-4" : "w-5 h-5"
                      }`}
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className={`bg-gray-800 text-gray-200 ${
                      viewport === "mobile" ? "text-xs" : "text-sm"
                    }`}
                  >
                    Live Demo
                  </Badge>
                </div>
                <h1
                  className={`font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent ${
                    viewport === "mobile"
                      ? "text-3xl mb-3"
                      : viewport === "tablet"
                      ? "text-4xl mb-4"
                      : "text-5xl mb-4"
                  }`}
                >
                  Instagram AI Chatbot <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    In Action
                  </span>
                </h1>
                <p
                  className={`text-gray-400 mx-auto ${
                    viewport === "mobile"
                      ? "text-sm max-w-md"
                      : viewport === "tablet"
                      ? "text-base max-w-xl"
                      : "text-lg max-w-2xl"
                  }`}
                >
                  Watch how our AI transforms Instagram conversations into sales
                </p>
              </div>

              {/* Split Layout */}
              <div
                className={`grid gap-6 ${
                  viewport === "mobile"
                    ? "grid-cols-1 h-[500px]"
                    : viewport === "tablet"
                    ? "grid-cols-1 h-[550px]"
                    : "grid-cols-2 h-[600px]"
                }`}
              >
                {/* Left: Chat */}
                <Card
                  className={`bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden 
      ${viewport === "mobile" ? "order-1 h-[400px]" : ""} 
      ${viewport === "tablet" ? "order-1 h-[500px]" : ""} 
      ${viewport === "desktop" ? "order-2 h-[600px]" : ""}`}
                >
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Chat Header */}
                    <div
                      className={`border-b border-gray-800 bg-gradient-to-r from-purple-600/20 to-pink-600/20 ${
                        viewport === "mobile" ? "p-3" : "p-4"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center ${
                            viewport === "mobile" ? "w-8 h-8" : "w-10 h-10"
                          }`}
                        >
                          <Bot
                            className={`text-white ${
                              viewport === "mobile" ? "w-4 h-4" : "w-5 h-5"
                            }`}
                          />
                        </div>
                        <div>
                          <h3
                            className={`text-white font-semibold ${
                              viewport === "mobile" ? "text-sm" : "text-base"
                            }`}
                          >
                            Instagram AI Assistant
                          </h3>
                          <div
                            className={`flex items-center gap-1 text-green-400 ${
                              viewport === "mobile" ? "text-xs" : "text-sm"
                            }`}
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Online
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div
                      className={`flex-1 overflow-y-auto space-y-4 ${
                        viewport === "mobile" ? "p-3" : "p-4"
                      }`}
                    >
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            message.type === "user"
                              ? "justify-end"
                              : "justify-start"
                          } animate-in slide-in-from-bottom duration-500`}
                        >
                          <div
                            className={`px-4 py-3 rounded-2xl ${
                              viewport === "mobile" ? "max-w-[70%]" : "max-w-xs"
                            } ${
                              message.type === "user"
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                : "bg-gray-800 text-gray-100 border border-gray-700"
                            }`}
                          >
                            <p
                              className={`leading-relaxed ${
                                viewport === "mobile" ? "text-xs" : "text-sm"
                              }`}
                            >
                              {message.text}
                            </p>
                            {message.hasImage && (
                              <div
                                className={`mt-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center ${
                                  viewport === "mobile" ? "h-20" : "h-24"
                                }`}
                              >
                                <Camera className="w-6 h-6 text-white" />
                              </div>
                            )}
                            {message.hasVideo && (
                              <div
                                className={`mt-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center ${
                                  viewport === "mobile" ? "h-20" : "h-24"
                                }`}
                              >
                                <div
                                  className={`text-white ${
                                    viewport === "mobile"
                                      ? "text-[10px]"
                                      : "text-xs"
                                  }`}
                                >
                                  ▶ Video Preview
                                </div>
                              </div>
                            )}
                            <div className="flex justify-between items-center mt-1">
                              <span
                                className={`opacity-70 ${
                                  viewport === "mobile"
                                    ? "text-[10px]"
                                    : "text-xs"
                                }`}
                              >
                                {message.time}
                              </span>
                              {message.type === "user" && (
                                <CheckCheck
                                  className={`opacity-70 ${
                                    viewport === "mobile"
                                      ? "w-2.5 h-2.5"
                                      : "w-3 h-3"
                                  }`}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Typing */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div
                            className={`bg-gray-800 border border-gray-700 rounded-2xl ${
                              viewport === "mobile" ? "px-3 py-2" : "px-4 py-3"
                            }`}
                          >
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chat Input */}
                    <div
                      className={`border-t border-gray-800 ${
                        viewport === "mobile" ? "p-3" : "p-4"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-2 bg-gray-800 rounded-full ${
                          viewport === "mobile" ? "p-2" : "p-3"
                        }`}
                      >
                        <input
                          className={`flex-1 bg-transparent text-gray-400 placeholder-gray-500 outline-none ${
                            viewport === "mobile" ? "text-xs" : "text-sm"
                          }`}
                          placeholder="Type a message..."
                          disabled
                        />
                        <Send
                          className={`${
                            viewport === "mobile" ? "w-4 h-4" : "w-5 h-5"
                          } text-gray-500`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Right: Feature Card */}
                <div
                  className={`
      ${viewport === "mobile" ? "order-2" : ""} 
      ${viewport === "tablet" ? "order-2" : ""} 
      ${viewport === "desktop" ? "order-1" : ""}
      space-y-6
    `}
                >
                  <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden h-full">
                    <CardContent
                      className={`flex flex-col h-full 
      ${viewport === "mobile" ? "p-4" : ""} 
      ${viewport === "tablet" ? "p-6" : ""} 
      ${viewport === "desktop" ? "p-8" : ""}`}
                    >
                      {/* Icon + Badge */}
                      <div
                        className={`flex items-start justify-between 
        ${viewport === "mobile" ? "mb-4" : ""} 
        ${viewport === "tablet" ? "mb-5" : ""} 
        ${viewport === "desktop" ? "mb-6" : ""}`}
                      >
                        <div
                          className={`rounded-2xl bg-gradient-to-r ${
                            features[currentFeature].gradient
                          } transform transition-all duration-500 
          ${viewport === "mobile" ? "p-2.5" : ""} 
          ${viewport === "tablet" ? "p-3" : ""} 
          ${viewport === "desktop" ? "p-4" : ""}`}
                        >
                          {React.createElement(features[currentFeature].icon, {
                            className: `${
                              viewport === "mobile"
                                ? "w-5 h-5"
                                : viewport === "tablet"
                                ? "w-6 h-6"
                                : "w-8 h-8"
                            } text-white`,
                          })}
                        </div>

                        <Badge
                          variant="outline"
                          className={`bg-gray-800/50 text-gray-300 border-gray-700 
          ${viewport === "mobile" ? "text-[10px] px-2 py-0.5" : ""} 
          ${viewport === "tablet" ? "text-xs px-2.5 py-1" : ""} 
          ${viewport === "desktop" ? "text-sm px-3 py-1" : ""}`}
                        >
                          {features[currentFeature].badge}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div>
                          <h2
                            className={`font-bold text-white mb-2 
        ${viewport === "mobile" ? "text-lg" : ""} 
        ${viewport === "tablet" ? "text-xl mb-3" : ""} 
        ${viewport === "desktop" ? "text-2xl mb-4" : ""}`}
                          >
                            {features[currentFeature].title}
                          </h2>
                          <p
                            className={`text-gray-400 
        ${viewport === "mobile" ? "text-xs leading-snug" : ""} 
        ${viewport === "tablet" ? "text-sm leading-relaxed" : ""} 
        ${viewport === "desktop" ? "text-base leading-relaxed" : ""}`}
                          >
                            {features[currentFeature].description}
                          </p>
                        </div>

                        <div
                          className={`grid gap-3 mt-4 
      ${viewport === "mobile" ? "grid-cols-1" : ""} 
      ${viewport === "tablet" ? "grid-cols-2" : ""} 
      ${viewport === "desktop" ? "grid-cols-3 gap-4" : ""}`}
                        >
                          <div
                            className={`text-center rounded-lg bg-gray-800/30 
        ${viewport === "mobile" ? "p-2" : ""} 
        ${viewport === "tablet" ? "p-3" : ""} 
        ${viewport === "desktop" ? "p-4" : ""}`}
                          >
                            <div
                              className={`font-bold text-white 
          ${viewport === "mobile" ? "text-base" : ""} 
          ${viewport === "tablet" ? "text-lg" : ""} 
          ${viewport === "desktop" ? "text-2xl" : ""}`}
                            >
                              99%
                            </div>
                            <div
                              className={`text-gray-400 
          ${viewport === "mobile" ? "text-[10px]" : ""} 
          ${viewport === "tablet" ? "text-xs" : ""} 
          ${viewport === "desktop" ? "text-sm" : ""}`}
                            >
                              Uptime
                            </div>
                          </div>

                          <div
                            className={`text-center rounded-lg bg-gray-800/30 
        ${viewport === "mobile" ? "p-2" : ""} 
        ${viewport === "tablet" ? "p-3" : ""} 
        ${viewport === "desktop" ? "p-4" : ""}`}
                          >
                            <div
                              className={`font-bold text-white 
          ${viewport === "mobile" ? "text-base" : ""} 
          ${viewport === "tablet" ? "text-lg" : ""} 
          ${viewport === "desktop" ? "text-2xl" : ""}`}
                            >
                              &lt;1s
                            </div>
                            <div
                              className={`text-gray-400 
          ${viewport === "mobile" ? "text-[10px]" : ""} 
          ${viewport === "tablet" ? "text-xs" : ""} 
          ${viewport === "desktop" ? "text-sm" : ""}`}
                            >
                              Response
                            </div>
                          </div>

                          <div
                            className={`text-center rounded-lg bg-gray-800/30 
        ${viewport === "mobile" ? "p-2" : ""} 
        ${viewport === "tablet" ? "p-3" : ""} 
        ${viewport === "desktop" ? "p-4" : ""}`}
                          >
                            <div
                              className={`font-bold text-white 
          ${viewport === "mobile" ? "text-base" : ""} 
          ${viewport === "tablet" ? "text-lg" : ""} 
          ${viewport === "desktop" ? "text-2xl" : ""}`}
                            >
                              24/7
                            </div>
                            <div
                              className={`text-gray-400 
          ${viewport === "mobile" ? "text-[10px]" : ""} 
          ${viewport === "tablet" ? "text-xs" : ""} 
          ${viewport === "desktop" ? "text-sm" : ""}`}
                            >
                              Available
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Navigation */}
                      <div
                        className={`
    flex items-center justify-between
    ${viewport === "mobile" ? "pt-4" : ""}
    ${viewport === "tablet" ? "pt-5" : ""}
    ${viewport === "desktop" ? "pt-6" : ""}
  `}
                      >
                        {/* Prev Button */}
                        <button
                          onClick={prevFeature}
                          className={`
      rounded-full bg-gray-800 hover:bg-gray-700 transition-colors
      ${viewport === "mobile" ? "p-1.5" : ""}
      ${viewport === "tablet" ? "p-2" : ""}
      ${viewport === "desktop" ? "p-3" : ""}
    `}
                        >
                          <ArrowRight
                            className={`
        text-white rotate-180
        ${viewport === "mobile" ? "w-4 h-4" : ""}
        ${viewport === "tablet" ? "w-5 h-5" : ""}
        ${viewport === "desktop" ? "w-6 h-6" : ""}
      `}
                          />
                        </button>
                        <div
                          className={`
      flex
      ${viewport === "mobile" ? "space-x-1" : ""}
      ${viewport === "tablet" ? "space-x-2" : ""}
      ${viewport === "desktop" ? "space-x-3" : ""}
    `}
                        >
                          {features.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentFeature(index)}
                              className={`
          h-2 rounded-full transition-all
          ${viewport === "mobile" ? "w-1.5" : ""}
          ${viewport === "tablet" ? "w-2" : ""}
          ${viewport === "desktop" ? "w-2.5" : ""}
          ${
            index === currentFeature
              ? `${viewport === "mobile" ? "bg-purple-500 w-4" : ""} 
                 ${viewport === "tablet" ? "bg-purple-500 w-6" : ""} 
                 ${viewport === "desktop" ? "bg-purple-500 w-8" : ""}`
              : "bg-gray-600"
          }
        `}
                            />
                          ))}
                        </div>
                        {/* Next Button */}
                        <button
                          onClick={nextFeature}
                          className={`
      rounded-full bg-gray-800 hover:bg-gray-700 transition-colors
      ${viewport === "mobile" ? "p-1.5" : ""}
      ${viewport === "tablet" ? "p-2" : ""}
      ${viewport === "desktop" ? "p-3" : ""}
    `}
                        >
                          <ArrowRight
                            className={`
        text-white
        ${viewport === "mobile" ? "w-4 h-4" : ""}
        ${viewport === "tablet" ? "w-5 h-5" : ""}
        ${viewport === "desktop" ? "w-6 h-6" : ""}
      `}
                          />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* CTA */}
              <div
                className={`
    text-center
    ${viewport === "mobile" ? "mt-6" : ""}
    ${viewport === "tablet" ? "mt-10" : ""}
    ${viewport === "desktop" ? "mt-12" : ""}
  `}
              >
                <button
                  className={`
      inline-flex items-center rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105
      bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700
      ${viewport === "mobile" ? "gap-2 px-5 py-2.5 text-sm" : ""}
      ${viewport === "tablet" ? "gap-2.5 px-6 py-3 text-base" : ""}
      ${viewport === "desktop" ? "gap-3 px-8 py-4 text-lg" : ""}
    `}
                >
                  <span>View all features</span>
                  <ArrowRight
                    className={`
        ${viewport === "mobile" ? "w-4 h-4" : ""}
        ${viewport === "tablet" ? "w-5 h-5" : ""}
        ${viewport === "desktop" ? "w-6 h-6" : ""}
      `}
                  />
                </button>
              </div>
            </div>

            {/* BG Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              {/* Top-right blob */}
              <div
                className={`
      absolute rounded-full blur-3xl animate-pulse bg-purple-500/10
      ${viewport === "mobile" ? "-top-20 -right-20 w-40 h-40" : ""}
      ${viewport === "tablet" ? "-top-32 -right-32 w-60 h-60" : ""}
      ${viewport === "desktop" ? "-top-40 -right-40 w-80 h-80" : ""}
    `}
              />
              {/* Bottom-left blob */}
              <div
                className={`
      absolute rounded-full blur-3xl animate-pulse bg-pink-500/10
      ${viewport === "mobile" ? "-bottom-20 -left-20 w-40 h-40" : ""}
      ${viewport === "tablet" ? "-bottom-32 -left-32 w-60 h-60" : ""}
      ${viewport === "desktop" ? "-bottom-40 -left-40 w-80 h-80" : ""}
    `}
              />
            </div>
          </div>

          {/* how it work and use case section */}

          <section
            className={`
    ${viewport === "mobile" ? "mt-40 px-4" : ""}
    ${viewport === "tablet" ? "mt-30 px-6" : ""}
    ${viewport === "desktop" ? "mt-20 px-8" : ""}py-65
  `}
          >
            {/* Header */}
            <div
              className={`
      text-center
      ${viewport === "mobile" ? "mb-8" : ""}
      ${viewport === "tablet" ? "mb-12" : ""}
      ${viewport === "desktop" ? "mb-16" : ""}
    `}
            >
              <div
                className={`
        flex items-center justify-center gap-2
        ${viewport === "mobile" ? "mb-3" : ""}
        ${viewport === "tablet" ? "mb-4" : ""}
        ${viewport === "desktop" ? "mb-4" : ""}
      `}
              >
                <div
                  className={`
          rounded-full bg-gradient-to-r from-blue-500 to-purple-500
          ${viewport === "mobile" ? "p-2" : ""}
          ${viewport === "tablet" ? "p-3" : ""}
          ${viewport === "desktop" ? "p-3" : ""}
        `}
                >
                  <Sparkles
                    className={`
            text-white
            ${viewport === "mobile" ? "w-4 h-4" : ""}
            ${viewport === "tablet" ? "w-5 h-5" : ""}
            ${viewport === "desktop" ? "w-5 h-5" : ""}
          `}
                  />
                </div>
                <Badge
                  variant="secondary"
                  className={`
          bg-gray-800 text-gray-200
          ${viewport === "mobile" ? "text-xs" : ""}
          ${viewport === "tablet" ? "text-sm" : ""}
          ${viewport === "desktop" ? "text-sm" : ""}
        `}
                >
                  Simple Setup
                </Badge>
              </div>

              <h2
                className={`
        font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
        ${viewport === "mobile" ? "text-2xl mb-2" : ""}
        ${viewport === "tablet" ? "text-3xl mb-3" : ""}
        ${viewport === "desktop" ? "text-5xl mb-4" : ""}
      `}
              >
                How to Build Your Instagram AI Chatbot
              </h2>
              <p
                className={`
        text-gray-400 mx-auto
        ${viewport === "mobile" ? "text-sm max-w-sm" : ""}
        ${viewport === "tablet" ? "text-base max-w-xl" : ""}
        ${viewport === "desktop" ? "text-xl max-w-3xl" : ""}
      `}
              >
                Start automating your Instagram messages in just 4 easy steps
              </p>
            </div>

            {/* Steps Grid */}
            <div
              className={`
      grid gap-4 relative mx-auto
      ${viewport === "mobile" ? "grid-cols-2 max-w-md" : ""}
      ${viewport === "tablet" ? "grid-cols-2 gap-6 max-w-3xl" : ""}
      ${viewport === "desktop" ? "grid-cols-4 gap-6 max-w-6xl" : ""}
    `}
            >
              {howItWorksSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className="group cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:scale-105"
                  >
                    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full relative">
                      <CardContent
                        className={`
                text-center h-full flex flex-col
                ${viewport === "mobile" ? "p-4" : ""}
                ${viewport === "tablet" ? "p-5" : ""}
                ${viewport === "desktop" ? "p-6" : ""}
              `}
                      >
                        {/* Step Badge */}
                        <div
                          className={`
                  ${viewport === "mobile" ? "mb-4" : ""}
                  ${viewport === "tablet" ? "mb-5" : ""}
                  ${viewport === "desktop" ? "mb-6" : ""}
                `}
                        >
                          <Badge
                            variant="outline"
                            className={`
                    bg-gradient-to-r ${
                      step.gradient
                    } text-white border-0 font-semibold
                    ${viewport === "mobile" ? "px-2 py-0.5 text-xs" : ""}
                    ${viewport === "tablet" ? "px-3 py-1 text-sm" : ""}
                    ${viewport === "desktop" ? "px-3 py-1 text-sm" : ""}
                  `}
                          >
                            Step {step.step}
                          </Badge>
                        </div>

                        {/* Icon */}
                        <div
                          className={`
                  mx-auto rounded-2xl bg-gradient-to-r ${
                    step.gradient
                  } transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110
                  ${viewport === "mobile" ? "p-3 mb-4" : ""}
                  ${viewport === "tablet" ? "p-3 mb-5" : ""}
                  ${viewport === "desktop" ? "p-4 mb-6" : ""}
                `}
                        >
                          <Icon
                            className={`
                    text-white
                    ${viewport === "mobile" ? "w-6 h-6" : ""}
                    ${viewport === "tablet" ? "w-7 h-7" : ""}
                    ${viewport === "desktop" ? "w-8 h-8" : ""}
                  `}
                          />
                        </div>

                        {/* Content */}
                        <h3
                          className={`
                  font-bold text-white group-hover:text-gray-100
                  ${viewport === "mobile" ? "text-base mb-2" : ""}
                  ${viewport === "tablet" ? "text-lg mb-2" : ""}
                  ${viewport === "desktop" ? "text-xl mb-3" : ""}
                `}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`
                  text-gray-400
                  ${viewport === "mobile" ? "text-xs" : ""}
                  ${viewport === "tablet" ? "text-sm" : ""}
                  ${viewport === "desktop" ? "text-sm" : ""}
                `}
                        >
                          {step.description}
                        </p>

                        {/* Arrow connection only on desktop */}
                        {i < howItWorksSteps.length - 1 &&
                          viewport === "desktop" && (
                            <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                              <div className="w-6 h-6 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center">
                                <ArrowRight className="w-3 h-3 text-gray-400" />
                              </div>
                            </div>
                          )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </section>

          {/* use case section */}

          <section
            className={`
    ${viewport === "mobile" ? "mt-10 px-4" : ""}
    ${viewport === "tablet" ? "mt-16 px-6" : ""}
    ${viewport === "desktop" ? "mt-26 px-8" : ""}
  `}
          >
            {/* Header */}
            <div
              className={`
      text-center
      ${viewport === "mobile" ? "mb-8" : ""}
      ${viewport === "tablet" ? "mb-12" : ""}
      ${viewport === "desktop" ? "mb-16" : ""}
    `}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className={`
          bg-gray-800 text-gray-200
          ${viewport === "mobile" ? "text-xs" : ""}
          ${viewport === "tablet" ? "text-sm" : ""}
          ${viewport === "desktop" ? "text-sm" : ""}
        `}
                >
                  Perfect For
                </Badge>
              </div>

              <h2
                className={`
        font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
        ${viewport === "mobile" ? "text-2xl mb-2" : ""}
        ${viewport === "tablet" ? "text-4xl mb-3" : ""}
        ${viewport === "desktop" ? "text-5xl mb-4" : ""}
      `}
              >
                Instagram AI Chatbot Use Cases
              </h2>
              <p
                className={`
        text-gray-400 mx-auto
        ${viewport === "mobile" ? "text-sm max-w-xs" : ""}
        ${viewport === "tablet" ? "text-base max-w-md" : ""}
        ${viewport === "desktop" ? "text-xl max-w-3xl" : ""}
      `}
              >
                See how businesses like yours are growing with Instagram AI
                chatbots
              </p>
            </div>

            {/* Grid */}
            <div
              className={`
      grid gap-6 mx-auto
      ${viewport === "mobile" ? "grid-cols-1 max-w-sm" : ""}
      ${viewport === "tablet" ? "grid-cols-2 max-w-3xl" : ""}
      ${viewport === "desktop" ? "grid-cols-2 max-w-5xl gap-8" : ""}
    `}
            >
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={i}
                    className="group cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:scale-105"
                  >
                    <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 transition-all duration-300 h-full overflow-hidden hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                      <CardContent
                        className={`
                text-center h-full flex flex-col
                ${viewport === "mobile" ? "p-4" : ""}
                ${viewport === "tablet" ? "p-6" : ""}
                ${viewport === "desktop" ? "p-8" : ""}
              `}
                      >
                        {/* Gradient Icon */}
                        <div
                          className={`
                  relative mx-auto
                  ${viewport === "mobile" ? "mb-4" : ""}
                  ${viewport === "tablet" ? "mb-5" : ""}
                  ${viewport === "desktop" ? "mb-6" : ""}
                `}
                        >
                          <div
                            className={`
                    rounded-full bg-gradient-to-r ${
                      useCase.gradient
                    } flex items-center justify-center group-hover:animate-pulse
                    ${viewport === "mobile" ? "w-14 h-14" : ""}
                    ${viewport === "tablet" ? "w-16 h-16" : ""}
                    ${viewport === "desktop" ? "w-20 h-20" : ""}
                  `}
                          >
                            <Icon
                              className={`
                      text-white
                      ${viewport === "mobile" ? "w-7 h-7" : ""}
                      ${viewport === "tablet" ? "w-8 h-8" : ""}
                      ${viewport === "desktop" ? "w-10 h-10" : ""}
                    `}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <h3
                          className={`
                  font-bold text-white group-hover:text-gray-100
                  ${viewport === "mobile" ? "text-lg mb-2" : ""}
                  ${viewport === "tablet" ? "text-xl mb-3" : ""}
                  ${viewport === "desktop" ? "text-2xl mb-4" : ""}
                `}
                        >
                          {useCase.title}
                        </h3>
                        <p
                          className={`
                  text-gray-400
                  ${viewport === "mobile" ? "text-sm" : ""}
                  ${viewport === "tablet" ? "text-base" : ""}
                  ${viewport === "desktop" ? "text-base" : ""}
                `}
                        >
                          {useCase.description}
                        </p>

                        {/* Hover CTA */}
                        <div
                          className={`
                  transition duration-300 transform opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                  ${viewport === "mobile" ? "mt-4" : ""}
                  ${viewport === "tablet" ? "mt-5" : ""}
                  ${viewport === "desktop" ? "mt-6" : ""}
                `}
                        >
                          <div
                            className={`
                    flex items-center justify-center text-purple-400
                    ${viewport === "mobile" ? "text-xs" : ""}
                    ${viewport === "tablet" ? "text-sm" : ""}
                    ${viewport === "desktop" ? "text-sm" : ""}
                  `}
                          >
                            <span className="font-medium mr-2">Learn More</span>
                            <ArrowRight
                              className={`
                      ${viewport === "mobile" ? "w-3 h-3" : ""}
                      ${viewport === "tablet" ? "w-4 h-4" : ""}
                      ${viewport === "desktop" ? "w-4 h-4" : ""}
                    `}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </section>

          {/* faqs and cta section */}
          <div
            className="min-h-screen  text-white"
            style={{ backgroundColor: "oklch(0.141 0.005 285.823)" }}
          >
            {/* FAQ Section */}
            <section
              className={`
    max-w-7xl mx-auto
    ${viewport === "mobile" ? "py-12 px-4" : ""}
    ${viewport === "tablet" ? "py-16 px-6" : ""}
    ${viewport === "desktop" ? "py-24 px-8" : ""}
  `}
            >
              {/* Header */}
              <motion.div
                className={`
      text-center
      ${viewport === "mobile" ? "mb-10" : ""}
      ${viewport === "tablet" ? "mb-14" : ""}
      ${viewport === "desktop" ? "mb-20" : ""}
    `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={`
        bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto
        ${viewport === "mobile" ? "w-12 h-1 mb-4" : ""}
        ${viewport === "tablet" ? "w-14 h-1 mb-5" : ""}
        ${viewport === "desktop" ? "w-16 h-1 mb-6" : ""}
      `}
                />
                <h2
                  className={`
        font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight
        ${viewport === "mobile" ? "text-2xl mb-4" : ""}
        ${viewport === "tablet" ? "text-4xl mb-5" : ""}
        ${viewport === "desktop" ? "text-5xl mb-6" : ""}
      `}
                >
                  Frequently Asked Questions
                </h2>
                <p
                  className={`
        text-slate-400 mx-auto
        ${viewport === "mobile" ? "text-sm max-w-xs" : ""}
        ${viewport === "tablet" ? "text-base max-w-md" : ""}
        ${viewport === "desktop" ? "text-lg max-w-2xl" : ""}
      `}
                >
                  Check out the most common questions and answers below
                </p>
              </motion.div>

              {/* Main content grid */}
              <div
                className={`
      items-start
      ${viewport === "mobile" ? "grid grid-cols-1 gap-8" : ""}
      ${viewport === "tablet" ? "grid grid-cols-1 gap-10" : ""}
      ${viewport === "desktop" ? "grid lg:grid-cols-2 gap-12" : ""}
    `}
              >
                {/* FAQ Illustration */}
                <motion.div
                  className={`
        flex
        ${viewport === "mobile" ? "justify-center mb-6" : ""}
        ${viewport === "tablet" ? "justify-center mb-8" : ""}
        ${viewport === "desktop" ? "justify-start mb-0" : ""}
      `}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <FAQIllustration />
                </motion.div>

                {/* FAQ List */}
                <motion.div
                  className={`
        space-y-4
        ${viewport === "mobile" ? "max-h-[400px]" : ""}
        ${viewport === "tablet" ? "max-h-[450px]" : ""}
        ${viewport === "desktop" ? "max-h-[500px]" : ""}
      `}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-slate-900/40 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      <motion.button
                        className={`
              w-full flex items-center justify-between focus:outline-none group
              ${viewport === "mobile" ? "p-3" : ""}
              ${viewport === "tablet" ? "p-4" : ""}
              ${viewport === "desktop" ? "p-5" : ""}
            `}
                        onClick={() => toggleFAQ(index)}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span
                          className={`
                font-semibold text-white group-hover:text-indigo-300 transition-colors
                ${viewport === "mobile" ? "text-sm" : ""}
                ${viewport === "tablet" ? "text-base" : ""}
                ${viewport === "desktop" ? "text-base" : ""}
              `}
                        >
                          {faq.question}
                        </span>
                        <motion.div
                          className={`
                bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 ml-4
                ${viewport === "mobile" ? "w-6 h-6" : ""}
                ${viewport === "tablet" ? "w-7 h-7" : ""}
                ${viewport === "desktop" ? "w-8 h-8" : ""}
              `}
                          animate={{ rotate: activeIndex === index ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus
                            className={`
                  text-white
                  ${viewport === "mobile" ? "w-3 h-3" : ""}
                  ${viewport === "tablet" ? "w-3.5 h-3.5" : ""}
                  ${viewport === "desktop" ? "w-4 h-4" : ""}
                `}
                          />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`
                    leading-relaxed text-slate-300
                    ${viewport === "mobile" ? "px-3 pb-3 text-sm" : ""}
                    ${viewport === "tablet" ? "px-4 pb-4 text-sm" : ""}
                    ${viewport === "desktop" ? "px-5 pb-5 text-base" : ""}
                  `}
                            >
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
            <section
              className={`
    ${viewport === "mobile" ? "py-12 px-4" : ""}
    ${viewport === "tablet" ? "py-16 px-6" : ""}
    ${viewport === "desktop" ? "py-24 px-8" : ""}
    max-w-7xl mx-auto relative overflow-hidden
  `}
            >
              {/* Background particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-indigo-400/20 rounded-full"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${30 + i * 15}%`,
                    }}
                    animate={{ y: [-5, 5, -5], opacity: [0.2, 0.6, 0.2] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.5,
                    }}
                  />
                ))}
              </div>

              <div
                className={`
      grid gap-12 items-center relative z-10
      ${viewport === "desktop" ? "lg:grid-cols-2" : "grid-cols-1"}
    `}
              >
                {/* Left Content */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Tagline */}
                  <motion.div
                    className={`
          inline-flex items-center border rounded-full font-medium
          ${viewport === "mobile" ? "px-3 py-1 text-xs" : ""}
          ${viewport === "tablet" ? "px-4 py-2 text-sm" : ""}
          ${viewport === "desktop" ? "px-5 py-2 text-base" : ""}
          bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-300
        `}
                    whileHover={{ scale: 1.02 }}
                  >
                    🚀 AI-Powered Automation
                  </motion.div>

                  {/* Heading */}
                  <h2
                    className={`
          font-bold bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent leading-tight
          ${viewport === "mobile" ? "text-2xl" : ""}
          ${viewport === "tablet" ? "text-4xl" : ""}
          ${viewport === "desktop" ? "text-5xl" : ""}
        `}
                  >
                    Start Growing Your Instagram Business with AI Today
                  </h2>

                  {/* Paragraph */}
                  <p
                    className={`
          text-slate-300 leading-relaxed
          ${viewport === "mobile" ? "text-sm" : ""}
          ${viewport === "tablet" ? "text-base" : ""}
          ${viewport === "desktop" ? "text-lg" : ""}
        `}
                  >
                    Join thousands of successful businesses using YourGPT's
                    Instagram automation platform to increase engagement, boost
                    sales, and provide 24/7 customer support.
                  </p>

                  {/* Buttons */}
                  <div
                    className={`
          flex gap-4
          ${viewport === "mobile" ? "flex-col" : ""}
          ${viewport === "tablet" ? "flex-row" : ""}
          ${viewport === "desktop" ? "flex-row" : ""}
        `}
                  >
                    <motion.button
                      className={`
            inline-flex items-center justify-center font-semibold rounded-xl shadow-lg transition-all duration-300
            ${viewport === "mobile" ? "px-6 py-3 text-sm" : ""}
            ${viewport === "tablet" ? "px-7 py-3.5 text-base" : ""}
            ${viewport === "desktop" ? "px-8 py-4 text-lg" : ""}
            bg-gradient-to-r from-indigo-500 to-purple-600 text-white
          `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>

                    <motion.button
                      className={`
            inline-flex items-center justify-center border font-semibold rounded-xl transition-all duration-300
            ${viewport === "mobile" ? "px-6 py-3 text-sm" : ""}
            ${viewport === "tablet" ? "px-7 py-3.5 text-base" : ""}
            ${viewport === "desktop" ? "px-8 py-4 text-lg" : ""}
            bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700/50
          `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule a Demo
                    </motion.button>
                  </div>
                </motion.div>

                {/* Right Illustration */}
                <motion.div
                  className={`
        flex
        ${viewport === "mobile" ? "justify-center mt-8" : ""}
        ${viewport === "tablet" ? "justify-center" : ""}
        ${viewport === "desktop" ? "justify-end" : ""}
      `}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CTAIllustration />
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <CodeView language="tsx" code={`// Your InstaLandingpage code here`} />
      )}
    </div>
  );
}
