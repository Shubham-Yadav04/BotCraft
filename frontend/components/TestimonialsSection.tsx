"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";
import { StarIcon } from "@heroicons/react/24/solid";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "BotCraft helped me create an AI version of myself that perfectly represents my expertise. My network can now get insights from me 24/7!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Entrepreneur", 
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The customization options are incredible. My bot sounds exactly like me and shares my business philosophy with potential clients.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Scientist",
      company: "BioLab Inc",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: "I use my BotCraft bot to share my research findings and connect with other scientists. It's like having a personal research assistant.",
      rating: 5
    },
    {
      name: "James Park",
      role: "Creative Director",
      company: "Design Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "My creative bot showcases my design philosophy and helps potential clients understand my approach before we even meet.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Consultant",
      company: "Growth Agency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "BotCraft transformed how I network. People can learn about my marketing strategies and expertise through my AI bot anytime.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      company: "DevCorp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "The technical implementation is flawless. My bot accurately represents my coding philosophy and helps other developers learn.",
      rating: 5
    }
  ];

  // Split testimonials into two rows for marquee
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="card-bg rounded-2xl p-6 shadow-lg mx-4 min-w-[350px] max-w-[350px] card-hover">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center space-x-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-padding section-light-alt overflow-hidden">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 badge-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <StarIcon className="h-4 w-4" />
            <span>Loved by Creators</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 gradient-text">
            What People Say
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who are using BotCraft to share their expertise 
            and connect with their audience in a whole new way.
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          {/* First Row - Left to Right */}
          <Marquee
            gradient={false}
            speed={30}
            pauseOnHover={true}
            className="py-4"
          >
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
            ))}
          </Marquee>

          {/* Second Row - Right to Left */}
          <Marquee
            gradient={false}
            speed={30}
            direction="right"
            pauseOnHover={true}
            className="py-4"
          >
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
            ))}
          </Marquee>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "10K+", label: "Happy Users" },
            { value: "50K+", label: "Bots Created" },
            { value: "99%", label: "Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}