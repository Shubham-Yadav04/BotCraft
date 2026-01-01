"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  CpuChipIcon,
  ShareIcon,
  CogIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon 
} from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: CpuChipIcon,
      title: "AI-Powered Intelligence",
      description: "Advanced natural language processing that understands context and provides intelligent responses based on your knowledge base.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: UserCircleIcon,
      title: "Personality Mirroring",
      description: "Train your bot to reflect your communication style, personality traits, and unique perspective on various topics.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: ShareIcon,
      title: "Easy Sharing",
      description: "Share your bot with anyone through a simple link. Let others discover your expertise and insights effortlessly.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: CogIcon,
      title: "Customizable Behavior",
      description: "Fine-tune your bot's responses, set boundaries, and customize how it represents you in different contexts.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Privacy & Security",
      description: "Your data is encrypted and secure. Control who can access your bot and what information it can share.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast",
      description: "Optimized for speed with instant responses. Your bot is always ready to engage with visitors.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: GlobeAltIcon,
      title: "Multi-Platform",
      description: "Embed your bot anywhere - websites, social media, or use our dedicated platform for seamless integration.",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Natural Conversations",
      description: "Engage in meaningful conversations that feel natural and authentic, just like talking to you directly.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="features" className="section-padding section-light">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 badge-light px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <CpuChipIcon className="h-4 w-4" />
            <span>Powerful Features</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold font-poppins mb-6 gradient-text"
          >
            Everything You Need
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Create, customize, and share your personal AI bot with powerful features 
            designed to represent you authentically and intelligently.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative card-bg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 shadow-lg`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}