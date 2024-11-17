'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { 
  ChevronLeft, 
  ChevronRight,
  LayoutGrid,
  Palette,
  Image,
  Type,
  Layers,
  ShoppingCart,
  Box,
  Shapes,
  PanelTop,
  ScrollText,
  Store,
  Pencil,
  Grid
} from 'lucide-react'

const menuSections = [
  {
    title: "Layout & Structure",
    items: [
      { icon: LayoutGrid, label: 'Page Layout', href: '/builder/layout' },
      { icon: Grid, label: 'Components', href: '/builder/components' },
      { icon: PanelTop, label: 'Header & Footer', href: '/builder/header-footer' },
      { icon: Shapes, label: 'Sections', href: '/builder/sections' },
    ]
  },
  {
    title: "Design & Styling",
    items: [
      { icon: Palette, label: 'Theme & Colors', href: '/builder/theme' },
      { icon: Type, label: 'Typography', href: '/builder/typography' },
      { icon: Image, label: 'Media Library', href: '/builder/media' },
      { icon: Layers, label: 'Effects & Animations', href: '/builder/effects' },
    ]
  },
  {
    title: "Store Content",
    items: [
      { icon: Store, label: 'Homepage', href: '/builder/homepage' },
      { icon: Box, label: 'Product Pages', href: '/builder/product-pages' },
      { icon: ScrollText, label: 'Content Blocks', href: '/builder/blocks' },
      { icon: ShoppingCart, label: 'Cart & Checkout', href: '/builder/checkout' },
    ]
  }
]

export default function StoreBuilderSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex flex-col h-screen bg-background border-r transition-all duration-300",
          isCollapsed ? "w-20" : "w-60"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && <span className="font-semibold">Store Builder</span>}
          <Button
            variant="ghost"
            size="icon"
            className={cn("", isCollapsed && "mx-auto")}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {menuSections.map((section) => (
            <div key={section.title} className="py-2">
              {!isCollapsed && (
                <h3 className="px-4 py-2 text-sm font-medium text-gray-500">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors",
                            isCollapsed ? "justify-center" : "justify-start"
                          )}
                        >
                          <item.icon size={20} />
                          {!isCollapsed && (
                            <span className="ml-3 text-sm">{item.label}</span>
                          )}
                        </Link>
                      </TooltipTrigger>
                      {isCollapsed && (
                        <TooltipContent side="right" sideOffset={10}>
                          {item.label}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t space-y-2">
          <Button
            variant="outline"
            className={cn(
              "w-full justify-center",
              isCollapsed ? "px-2" : "px-4"
            )}
          >
            <Pencil size={20} />
            {!isCollapsed && <span className="ml-2">Edit Mode</span>}
          </Button>
          <Button
            variant="default"
            className={cn(
              "w-full justify-center",
              isCollapsed ? "px-2" : "px-4"
            )}
          >
            <Store size={20} />
            {!isCollapsed && <span className="ml-2">Preview Store</span>}
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}