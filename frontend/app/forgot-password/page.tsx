"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  SparklesIcon,
  EnvelopeIcon,
  ArrowLeftIcon 
} from "@heroicons/react/24/outline";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-1 absolute top-20 left-10 w-72 h-72 floating-light rounded-full"></div>
        <div className="floating-2 absolute bottom-20 right-10 w-96 h-96 floating-light rounded-full"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <SparklesIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold font-space-grotesk gradient-text">
              BotCraft
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-primary mb-2">
            {isSubmitted ? "Check your email" : "Forgot password?"}
          </h2>
          <p className="text-secondary">
            {isSubmitted 
              ? "We've sent a password reset link to your email address."
              : "No worries, we'll send you reset instructions."
            }
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-bg rounded-2xl p-8 shadow-xl"
        >
          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-muted" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Reset Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary text-lg py-3"
              >
                Send reset instructions
              </motion.button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <EnvelopeIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-secondary mb-4">
                  We've sent password reset instructions to:
                </p>
                <p className="font-medium text-primary">{email}</p>
              </div>
              <div className="text-sm text-secondary">
                <p>Didn't receive the email? Check your spam folder or</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  try again
                </button>
              </div>
            </div>
          )}

          {/* Back to Login */}
          <div className="mt-6">
            <Link
              href="/login"
              className="flex items-center justify-center space-x-2 text-secondary hover:text-primary transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Back to sign in</span>
            </Link>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/"
            className="text-secondary hover:text-primary transition-colors duration-200"
          >
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}