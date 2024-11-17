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
  LayoutDashboard,
  ShoppingCart,
  PackageSearch,
  Users,
  BarChart2,
  Truck,
  Tags,
  Bell,
  Settings,
  Wallet,
  MessagesSquare,
  Percent,
  BadgeDollarSign,
  Store,
  Boxes,
  CircleDollarSign,
  LogOut,
  Building
} from 'lucide-react'

const menuSections = [
  {
    title: "Overview",
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
      { icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
      { icon: CircleDollarSign, label: 'Revenue', href: '/dashboard/revenue' },
      { icon: Bell, label: 'Notifications', href: '/dashboard/notifications', badge: '3' },
    ]
  },
  {
    title: "Orders & Products",
    items: [
      { icon: ShoppingCart, label: 'Orders', href: '/dashboard/orders', badge: '12' },
      { icon: PackageSearch, label: 'Products', href: '/dashboard/products' },
      { icon: Boxes, label: 'Inventory', href: '/dashboard/inventory' },
      { icon: Tags, label: 'Categories', href: '/dashboard/categories' },
    ]
  },
  {
    title: "Sales & Marketing",
    items: [
      { icon: Users, label: 'Customers', href: '/dashboard/customers' },
      { icon: Percent, label: 'Discounts', href: '/dashboard/discounts' },
      { icon: BadgeDollarSign, label: 'Promotions', href: '/dashboard/promotions' },
      { icon: MessagesSquare, label: 'Reviews', href: '/dashboard/reviews', badge: '5' },
    ]
  },
  {
    title: "Operations",
    items: [
      { icon: Truck, label: 'Shipping', href: '/dashboard/shipping' },
      { icon: Wallet, label: 'Payments', href: '/dashboard/payments' },
      { icon: Building, label: 'Suppliers', href: '/dashboard/suppliers' },
      { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
    ]
  }
]

export default function StoreDashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex flex-col h-screen bg-background border-r transition-all duration-300",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Store className="h-6 w-6" />
              <span className="font-semibold">Store Admin</span>
            </div>
          )}
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
                            "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors relative",
                            isCollapsed ? "justify-center" : "justify-start"
                          )}
                        >
                          <item.icon size={20} />
                          {!isCollapsed && (
                            <>
                              <span className="ml-3 text-sm">{item.label}</span>
                              {item.badge && (
                                <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </>
                          )}
                          {isCollapsed && item.badge && (
                            <span className="absolute top-1 right-1 bg-primary w-4 h-4 text-xs flex items-center justify-center text-primary-foreground rounded-full">
                              {item.badge}
                            </span>
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

        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50",
              isCollapsed && "justify-center"
            )}
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}