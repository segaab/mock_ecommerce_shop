"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"
import Footer from "@/components/footer"

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mb-8 text-muted-foreground">Start shopping to add items to your cart.</p>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-16">
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
            <h1 className="mt-4 text-3xl font-bold">Shopping Cart</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-6">
                  <div className="relative h-24 w-24 overflow-hidden rounded-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.color} {item.size && `/ ${item.size}`}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <p className="ml-auto font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <span>Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 