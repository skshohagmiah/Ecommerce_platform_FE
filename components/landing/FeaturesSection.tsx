'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ShoppingCart, CreditCard, TrendingUp, Zap, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('store')

  const features = {
    store: [
      { icon: <ShoppingCart className="h-6 w-6" />, title: 'Easy Store Setup', description: 'Launch your online store in minutes with our intuitive drag-and-drop builder.' },
      { icon: <CreditCard className="h-6 w-6" />, title: 'Secure Payments', description: 'Accept payments from anywhere in the world with our integrated payment solutions.' },
      { icon: <TrendingUp className="h-6 w-6" />, title: 'Sales Analytics', description: 'Track your performance with real-time analytics and actionable insights.' },
    ],
    inventory: [
      { icon: <Zap className="h-6 w-6" />, title: 'Real-time Tracking', description: 'Monitor your stock levels across all channels in real-time.' },
      { icon: <Shield className="h-6 w-6" />, title: 'Fraud Protection', description: 'Advanced algorithms to detect and prevent inventory fraud.' },
      { icon: <CheckCircle className="h-6 w-6" />, title: 'Automated Reordering', description: 'Set up automatic reordering when stock levels are low.' },
    ],
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Powerful Features for Your E-commerce Success</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our platform provides all the tools you need to build, manage, and grow your online business.
          </p>
        </div>

        <Tabs defaultValue="store" className="mx-auto max-w-6xl" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-2 max-w-3xl mx-auto">
            <TabsTrigger value="store">Store Management</TabsTrigger>
            <TabsTrigger value="inventory">Inventory Control</TabsTrigger>
          </TabsList>
          {Object.entries(features).map(([key, featureList]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid gap-8 md:grid-cols-3 w-full">
                {featureList.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg bg-white p-6 shadow-lg lg:min-w-[300px]"
                  >
                    <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Button size="lg" className="font-semibold">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}