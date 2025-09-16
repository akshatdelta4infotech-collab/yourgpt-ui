// utils/features.ts
import {
    MessageCircle, Globe, Image, Target, ShoppingCart, TrendingUp
} from "lucide-react";

export const features = [
    {
        icon: MessageCircle,
        title: "24/7 Instagram Support",
        description: "AI chatbot handles DMs, comments, and queries instantly - even while you sleep.",
        badge: "Always Active",
        gradient: "from-orange-500 to-red-500",
        chatScenario: [
            { type: "user", text: "Hi! Is your store open?", time: "2:34 AM" },
            { type: "bot", text: "Hello! 👋 Yes, I'm here 24/7 to help you! What can I assist you with today?", time: "2:34 AM" },
            { type: "user", text: "Do you have the blue sneakers in size 9?", time: "2:35 AM" },
            { type: "bot", text: "Let me check that for you! 🔍 Yes, we have the Blue Ocean Sneakers in size 9 available. Would you like to see them?", time: "2:35 AM" }
        ]
    },
    {
        icon: Globe,
        title: "Multi-Language Support",
        description: "Communicate naturally in 95+ languages with global customers worldwide.",
        badge: "Global Ready",
        gradient: "from-blue-500 to-purple-500",
        chatScenario: [
            { type: "user", text: "¿Tienen envío a México?", time: "3:12 PM" },
            { type: "bot", text: "¡Hola! 🇲🇽 Sí, enviamos a México. El tiempo de entrega es de 5-7 días laborables.", time: "3:12 PM" },
            { type: "user", text: "Parfait! Combien ça coûte?", time: "3:13 PM" },
            { type: "bot", text: "Bonjour! 🇫🇷 L'expédition vers le Mexique coûte 15€. Voulez-vous voir nos produits?", time: "3:13 PM" }
        ]
    },
    {
        icon: Image,
        title: "Rich Media Sharing",
        description: "Automatically share photos, videos, Stories, and Reels during conversations.",
        badge: "Visual First",
        gradient: "from-purple-500 to-pink-500",
        chatScenario: [
            { type: "user", text: "Can I see the red dress?", time: "1:45 PM" },
            { type: "bot", text: "Absolutely! Here's our stunning Red Velvet Dress ✨", time: "1:45 PM", hasImage: true },
            { type: "user", text: "Wow! Do you have a video of it?", time: "1:46 PM" },
            { type: "bot", text: "Yes! Check out this video showing the dress in motion 🎥", time: "1:46 PM", hasVideo: true }
        ]
    },
    {
        icon: Target,
        title: "Smart Recommendations",
        description: "AI-powered product suggestions based on customer preferences and behavior.",
        badge: "Personalized",
        gradient: "from-green-500 to-emerald-500",
        chatScenario: [
            { type: "user", text: "I like minimalist style", time: "4:22 PM" },
            { type: "bot", text: "Perfect! Based on your style, I recommend these curated items:", time: "4:22 PM" },
            { type: "bot", text: "🔸 Minimal White Tee - $29\n🔸 Clean Line Jeans - $89\n🔸 Simple Gold Necklace - $45", time: "4:22 PM" },
            { type: "user", text: "Love the necklace!", time: "4:23 PM" }
        ]
    },
    {
        icon: ShoppingCart,
        title: "Seamless Checkout",
        description: "Complete order processing and payment handling directly in Instagram chat.",
        badge: "One-Click Buy",
        gradient: "from-yellow-500 to-orange-500",
        chatScenario: [
            { type: "user", text: "I want to buy the gold necklace", time: "4:25 PM" },
            { type: "bot", text: "Great choice! 🛒 Simple Gold Necklace - $45\nShall I process this order for you?", time: "4:25 PM" },
            { type: "user", text: "Yes please!", time: "4:25 PM" },
            { type: "bot", text: "✅ Order confirmed! Payment processed successfully. Tracking info will be sent shortly.", time: "4:26 PM" }
        ]
    },
    {
        icon: TrendingUp,
        title: "Performance Analytics",
        description: "Track response times, conversions, and customer satisfaction in real-time.",
        badge: "Data Driven",
        gradient: "from-cyan-500 to-blue-500",
        chatScenario: [
            { type: "bot", text: "📊 Daily Summary:\n• 47 conversations handled\n• 89% satisfaction rate\n• $2,340 in sales generated", time: "11:59 PM" },
            { type: "bot", text: "🎯 Top performing products:\n1. Blue Sneakers (12 sold)\n2. Red Dress (8 sold)\n3. Gold Necklace (15 sold)", time: "11:59 PM" }
        ]
    }
];
