'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content: "This e-commerce platform has completely transformed how we do business online. The intuitive interface and powerful features helped us increase our sales by 200% in just three months! The automation tools have saved us countless hours.",
    author: "Sarah Johnson",
    role: "CEO, FashionFusion",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogo: "/api/placeholder/120/40",
    metrics: {
      salesIncrease: "200%",
      timeSpent: "-65%"
    }
  },
  {
    id: 2,
    content: "The inventory management system is a game-changer. We've reduced stockouts by 80% and improved our cash flow significantly. The real-time analytics give us insights we never had before. I can't imagine running our store without it now.",
    author: "Michael Chen",
    role: "Operations Manager, TechTrove",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogo: "/api/placeholder/120/40",
    metrics: {
      stockouts: "-80%",
      revenue: "+150%"
    }
  },
  {
    id: 3,
    content: "The customer support is exceptional. Whenever we've had questions or issues, the team has been incredibly responsive and helpful. The platform's scalability has allowed us to grow from a small shop to a multi-million dollar business.",
    author: "Emily Rodriguez",
    role: "Founder, EcoEssentials",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogo: "/api/placeholder/120/40",
    metrics: {
      growth: "400%",
      support: "24/7"
    }
  },
  {
    id: 4,
    content: "We switched from another platform and haven't looked back. The migration was seamless, and the features here are far superior. Our conversion rate has doubled, and customer satisfaction is at an all-time high.",
    author: "David Park",
    role: "Director of E-commerce, StyleHub",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    companyLogo: "/api/placeholder/120/40",
    metrics: {
      conversion: "+100%",
      satisfaction: "98%"
    }
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextTestimonial, 8000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <motion.div
          className="absolute -top-96 -right-96 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [-50, 50],
            y: [-50, 50],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-96 -left-96 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [50, -50],
            y: [50, -50],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Trusted by Leading
            <span className="block mt-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              E-commerce Brands
            </span>
          </motion.h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: 200 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 * direction }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="relative"
              onHoverStart={() => setIsAutoPlaying(false)}
              onHoverEnd={() => setIsAutoPlaying(true)}
            >
              <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
                <div className="mb-8 flex justify-between items-center">
                  <Image
                    src={testimonials[currentIndex].companyLogo}
                    alt="Company logo"
                    width={120}
                    height={40}
                    className="opacity-80"
                  />
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 h-16 w-16 text-primary/10" />
                  <p className="relative z-10 text-xl md:text-2xl text-gray-700 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>
                </blockquote>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 ring-4 ring-primary/10">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                      <AvatarFallback>{testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].author}</h4>
                      <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {Object.entries(testimonials[currentIndex].metrics).map(([key, value]) => (
                      <div key={key} className="text-center px-4 py-2 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-primary">{value}</p>
                        <p className="text-sm text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-4 -right-4 flex -translate-y-1/2 justify-between">
            <Button 
              size="lg" 
              variant="ghost" 
              onClick={prevTestimonial} 
              className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              onClick={nextTestimonial} 
              className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}