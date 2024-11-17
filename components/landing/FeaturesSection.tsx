'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ShoppingCart, CreditCard, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeTab, setActiveTab] = useState('store')
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = {
    store: [
      { 
        icon: <ShoppingCart className="h-6 w-6" />, 
        title: 'Easy Store Setup', 
        description: 'Launch your online store in minutes with our intuitive drag-and-drop builder.',
        gradient: 'from-blue-500 to-blue-600'
      },
      { 
        icon: <CreditCard className="h-6 w-6" />, 
        title: 'Secure Payments', 
        description: 'Accept payments from anywhere in the world with our integrated payment solutions.',
        gradient: 'from-purple-500 to-purple-600'
      },
      { 
        icon: <TrendingUp className="h-6 w-6" />, 
        title: 'Sales Analytics', 
        description: 'Track your performance with real-time analytics and actionable insights.',
        gradient: 'from-indigo-500 to-indigo-600'
      },
    ],
    inventory: [
      { 
        icon: <Zap className="h-6 w-6" />, 
        title: 'Real-time Tracking', 
        description: 'Monitor your stock levels across all channels in real-time.',
        gradient: 'from-pink-500 to-pink-600'
      },
      { 
        icon: <Shield className="h-6 w-6" />, 
        title: 'Fraud Protection', 
        description: 'Advanced algorithms to detect and prevent inventory fraud.',
        gradient: 'from-emerald-500 to-emerald-600'
      },
      { 
        icon: <CheckCircle className="h-6 w-6" />, 
        title: 'Automated Reordering', 
        description: 'Set up automatic reordering when stock levels are low.',
        gradient: 'from-amber-500 to-amber-600'
      },
    ],
  }

  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            Powerful Features for Your
            <span className="block mt-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              E-commerce Success
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
            Our platform provides all the tools you need to build, manage, and grow your online business with confidence.
          </p>
        </motion.div>

        <Tabs 
          defaultValue="store" 
          className="mx-auto max-w-6xl"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-white/50 backdrop-blur-sm -p-2 rounded-full border border-gray-200">
            <TabsTrigger 
              value="store"
              className="rounded-full px-8 py-2 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Store Management
            </TabsTrigger>
            <TabsTrigger 
              value="inventory"
              className="rounded-full px-8 py-2 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Inventory Control
            </TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            {Object.entries(features).map(([key, featureList]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-12 grid gap-8 md:grid-cols-3"
                >
                  {featureList.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredFeature(index)}
                      onHoverEnd={() => setHoveredFeature(null)}
                      className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                    >
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                      
                      <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-r ${feature.gradient} p-4 text-white shadow-lg`}>
                        {feature.icon}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: hoveredFeature === index ? 1 : 0,
                          scale: hoveredFeature === index ? 1 : 0.8
                        }}
                        className="mt-6 flex items-center text-primary font-medium"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}