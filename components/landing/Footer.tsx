import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto p-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
            <p className="mb-4">
              We're dedicated to empowering businesses with cutting-edge e-commerce solutions. Our platform helps you build, manage, and grow your online presence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Features</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Support</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">API Status</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">System Status</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Security</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Newsletter</h2>
            <p className="mb-4">Stay up to date with the latest features and releases by joining our newsletter.</p>
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-primary"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your E-commerce Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}