"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function OrderSummaryPage() {
  const { items } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 5.99 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">ACME Store</span>
            </Link>
            <MainNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:py-12">
          <div className="mb-8">
            <Link href="/cart" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
            <h1 className="mt-4 text-3xl font-bold">Order Summary</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Order Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-md">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.color} {item.size && `/ ${item.size}`}
                      </p>
                      <p className="mt-2 text-sm">
                        Quantity: {item.quantity}
                      </p>
                      <p className="mt-2 text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-lg font-semibold">Order Summary</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link href="/checkout/payment">
                  <Button className="mt-6 w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Payment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 