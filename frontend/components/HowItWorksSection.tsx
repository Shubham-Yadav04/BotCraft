"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  DocumentTextIcon,
  CogIcon,
  ShareIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/outline";

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      step: "01",
      icon: DocumentTextIcon,
      title: "Share Your Knowledge",
      description: "Upload documents, write about yourself, or simply chat with our AI to build your knowledge base. Include your expertise, experiences, and personality traits.",
      color: "indigo"
    },
    {
      step: "02", 
      icon: CogIcon,
      title: "Customize Your Bot",
      description: "Fine-tune your bot's personality, communication style, and response patterns. Set boundaries and define how you want to be represented.",
      color: "purple"
    },
    {
      step: "03",
      icon: ShareIcon,
      title: "Share & Connect",
      description: "Get a unique link to share your bot with anyone. Embed it on your website, share on social media, or use it for networking and professional purposes.",
      color: "pink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <section id="how-it-works" className="section-padding gradient-bg">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={stepVariants}
            className="inline-flex items-center space-x-2 badge-light px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <CogIcon className="h-4 w-4" />
            <span>Simple Process</span>
          </motion.div>

          <motion.h2
            variants={stepVariants}
            className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gray-900 dark:text-white"
          >
            How It <span className="gradient-text">Works</span>
          </motion.h2>

          <motion.p
            variants={stepVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Create your personal AI bot in three simple steps. No technical knowledge required.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 transform -translate-y-1/2 z-0" />

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={stepVariants}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="card-bg-secondary backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-full text-white font-bold text-xl mb-6 shadow-lg`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-${step.color}-50 dark:bg-${step.color}-900/30 rounded-xl mb-6`}>
                    <step.icon className={`h-7 w-7 text-${step.color}-600 dark:text-${step.color}-400`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.3 }}
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r from-${step.color}-500 to-${steps[index + 1].color}-500 rounded-full flex items-center justify-center shadow-lg`}>
                      <ArrowRightIcon className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
          >
            <span>Start Creating Now</span>
            <ArrowRightIcon className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}