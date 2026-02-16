"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform,useSpring } from "framer-motion";
import { gsap } from "gsap";
import { 
  ArrowRightIcon, 
  PlayIcon,
  SparklesIcon,
  RocketLaunchIcon,
  UserGroupIcon 
} from "@heroicons/react/24/outline";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 15%"]
  });
const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const stats = [
    { icon: RocketLaunchIcon, value: "10K+", label: "Bots Created" },
    { icon: UserGroupIcon, value: "50K+", label: "Active Users" },
    { icon: SparklesIcon, value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >

      <div className="container-width section-padding relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 badge-light px-4 py-2 rounded-full text-sm font-bold mb-8"
          >
           
            <span>Your Virtual Persona</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" text-5xl md:text-7xl lg:text-8xl font-semibold  md:font-bold font-poppins mb-6 leading-tight "
          >
            Create Your{" "}
            <span className="brown-custom">Personal AI Bot</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg !text-zinc-600 dark:text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed tracking-snug"
          >
            Transform your knowledge, personality, and expertise into an intelligent AI bot. 
            Share your insights with the world and let others discover who you are through 
            your personalized AI assistant.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row items-center justify-center  sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 text-base px-6 py-3"
              onClick={()=>{
               window.location.href=`${process.env.NEXT_PUBLIC_BACKEND_URL}oauth2/authorization/google`
              }}
            >
              <span>Start Building</span>
              <ArrowRightIcon className="h-5 w-5" /> 
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 text-base px-6 py-3"
            >
              <PlayIcon className="h-5 w-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mb-3">
                  <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}