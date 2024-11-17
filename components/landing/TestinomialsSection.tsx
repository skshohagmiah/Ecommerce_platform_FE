'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content: "This e-commerce platform has revolutionized our online business. The intuitive interface and powerful features have helped us increase our sales by 200% in just three months!",
    author: "Sarah Johnson",
    role: "CEO, FashionFusion",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 2,
    content: "The inventory management system is a game-changer. We've reduced stockouts by 80% and improved our cash flow significantly. I can't imagine running our store without it now.",
    author: "Michael Chen",
    role: "Operations Manager, TechTrove",
    avatar: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 3,
    content: "Customer support is top-notch. Whenever we've had questions or issues, the team has been incredibly responsive and helpful. It's clear they care about our success.",
    author: "Emily Rodriguez",
    role: "Founder, EcoEssentials",
    avatar: "/placeholder.svg?height=80&width=80"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-24">
      <div className="max-w-screen-xl mx-auto p-2">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          What Our Customers Say
        </h2>
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: 300 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 * direction }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="text-center"
            >
              <blockquote className="relative mx-auto max-w-3xl text-xl text-gray-700">
                <Quote className="absolute -top-6 -left-6 h-12 w-12 text-primary/20" />
                <p className="relative z-10">{testimonials[currentIndex].content}</p>
              </blockquote>
              <div className="mt-8 flex items-center justify-center">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                  <AvatarFallback>{testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="ml-4 text-left">
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 left-0 right-0 flex -translate-y-1/2 justify-between">
            <Button size="icon" variant="ghost" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button size="icon" variant="ghost" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}