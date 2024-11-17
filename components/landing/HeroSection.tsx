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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-24 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[45vh] w-[45vh] rounded-full bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent blur-3xl"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              x: mousePosition.x * 0.02 * ((i + 1) * 0.5),
              y: mousePosition.y * 0.02 * ((i + 1) * 0.5),
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 text-5xl font-bold tracking-tight max-w-[700px] mx-auto leading-tight lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Build Your E‑commerce Empire
            </h1>
            <p className="mb-12 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
              Transform your business with our <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full font-medium">all-in-one platform</span> designed to help you create, manage, and scale your online store effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 px-8 rounded-full shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold py-6 px-8 rounded-full border-2 hover:bg-gray-50">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureCard
            icon={<ShoppingBag className="h-10 w-10 text-blue-600" />}
            title="Smart Inventory"
            description="Automate your inventory management across all sales channels with real-time tracking and alerts."
          />
          <FeatureCard
            icon={<BarChart className="h-10 w-10 text-purple-600" />}
            title="Advanced Analytics"
            description="Make data-driven decisions with powerful insights and customizable reporting dashboards."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-blue-600" />}
            title="Customer Success"
            description="Build lasting relationships with integrated CRM, support tools, and personalized experiences."
          />
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="rounded-2xl bg-white/50 backdrop-blur-sm p-8 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all hover:shadow-2xl hover:shadow-gray-200/50"
    >
      <div className="mb-6 inline-block rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}