'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag, BarChart, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-28">
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Animated beams */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[40vh] w-[40vh] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-[80px]"
            style={{
              left: `${25 + i * 25}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: mousePosition.x * 0.02 * (i + 1),
              y: mousePosition.y * 0.02 * (i + 1),
            }}
            transition={{ type: 'spring', damping: 15, stiffness: 25 }}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto p-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight max-w-[700px] mx-auto lg:leading-[1.1] text-gray-900 sm:text-6xl">
            Build Your <span className='text-blue-600'>E_commerce Empire</span> With Ease
          </h1>
          <p className="mb-10 text-lg text-gray-600 sm:text-xl">
            <span className='font-bold bg-purple-600 p-1 text-white'>All-in-one platform</span> to create, manage, and scale your online store. From inventory to payments, we've got you covered.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="font-semibold py-6 px-12">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold py-6 px-12">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<ShoppingBag className="h-10 w-10 text-primary" />}
            title="Inventory Management"
            description="Effortlessly track and manage your product inventory across multiple channels."
          />
          <FeatureCard
            icon={<BarChart className="h-10 w-10 text-primary" />}
            title="Sales Analytics"
            description="Gain valuable insights with real-time sales data and performance metrics."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-primary" />}
            title="Customer Management"
            description="Build lasting relationships with integrated CRM and support tools."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
      <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}