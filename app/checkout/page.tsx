"use client"

import { useEffect } from "react"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity } = useCart()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://www.paypal.com/sdk/js?client-id=AVv-lInNmnCOPiSS34ntsxy1TQLZswARKWgEGjK88JwWmAvodQDQTbpG0iD-Arylp4GQziqHS9Yrg03j&currency=USD`
    script.async = true
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: total.toFixed(2),
                  breakdown: {
                    item_total: {
                      value: subtotal.toFixed(2),
                      currency_code: "USD"
                    },
                    shipping: {
                      value: shipping.toFixed(2),
                      currency_code: "USD"
                    }
                  }
                },
                items: items.map(item => ({
                  name: item.name,
                  quantity: item.quantity.toString(),
                  unit_amount: {
                    value: item.price.toFixed(2),
                    currency_code: "USD"
                  }
                }))
              }]
            })
          },
          onApprove: async (data: any, actions: any) => {
            const order = await actions.order.capture()
            console.log("Payment successful", order)
            // Handle successful payment here
          }
        }).render("#paypal-button-container")
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [items, total, subtotal, shipping])

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mb-8 text-muted-foreground">Add some items to your cart before checking out.</p>
        <Button asChild>
          <a href="/">Continue Shopping</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="mb-8 text-2xl font-bold">Checkout</h1>
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <Card className="p-6">
              <h2 className="mb-6 text-lg font-semibold">Payment Method</h2>
              <div id="paypal-button-container" className="w-full" />
            </Card>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md">
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
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t pt-4">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 