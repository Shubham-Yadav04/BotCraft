"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  CheckIcon,
  SparklesIcon,
  CommandLineIcon,
  RocketLaunchIcon 
} from "@heroicons/react/24/outline";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: SparklesIcon,
      description: "Perfect for individuals getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "1 Personal Bot",
        "Basic Customization",
        "100 Conversations/month",
        "Standard Support",
        "Basic Analytics"
      ],
      gradient: "from-gray-500 to-gray-600",
      popular: false
    },
    {
      name: "Professional",
      icon: RocketLaunchIcon,
      description: "For professionals and creators",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "5 Personal Bots",
        "Advanced Customization",
        "Unlimited Conversations",
        "Priority Support",
        "Advanced Analytics",
        "Custom Branding",
        "API Access"
      ],
      gradient: "from-indigo-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      icon: CommandLineIcon,
      description: "For teams and organizations",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Unlimited Bots",
        "White-label Solution",
        "Unlimited Conversations",
        "24/7 Premium Support",
        "Advanced Analytics & Reporting",
        "Custom Integrations",
        "Dedicated Account Manager",
        "SLA Guarantee"
      ],
      gradient: "from-purple-500 to-pink-600",
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="pricing" className="section-padding section-light">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 badge-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CommandLineIcon className="h-4 w-4" />
            <span>Simple Pricing</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 gradient-text">
            Choose Your Plan
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core features 
            with different limits and advanced capabilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <motion.span
                animate={{ x: isAnnual ? 20 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
              />
            </motion.button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                Save 17%
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative card-bg rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 card-hover ${
                plan.popular 
                  ? 'border-indigo-500 dark:border-indigo-400' 
                  : 'border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-xl mb-4 shadow-lg`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-poppins">
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.monthlyPrice > 0 && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      ${Math.round(plan.annualPrice / 12)}/month billed annually
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center`}>
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {plan.monthlyPrice === 0 ? 'Get Started Free' : 'Start Free Trial'}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300">
            All plans include a 14-day free trial. No credit card required. 
            <br />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Cancel anytime with no questions asked.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}