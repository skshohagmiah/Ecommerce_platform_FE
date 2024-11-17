'use client'

import { useState } from 'react'
import { ShoppingBag, Store, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateStore = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle store creation logic here
    console.log('Store created!')
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <ShoppingBag className="mx-auto h-32 w-32 text-purple-600 text-primary" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome to Your E-commerce Platform</h2>
        <p className="mt-2 text-sm text-gray-600">
          You're just one step away from launching your online store. Create your first store to get started!
        </p>
        <div>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="mt-4" size={'lg'}>
                <Store className="mr-2 h-4 w-4" /> Create Your Store
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Your Store</DialogTitle>
                <DialogDescription>
                  Fill in the details below to set up your new online store.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateStore} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input id="storeName" placeholder="My Awesome Store" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeDescription">Store Description</Label>
                  <Textarea id="storeDescription" placeholder="Describe your store..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeUrl">Store URL</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://
                    </span>
                    <Input id="storeUrl" placeholder="my-store" className="rounded-l-none" required />
                  </div>
                </div>
                <div className="pt-4 flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Store</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}