"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Classic White T-Shirt",
      price: 29.99,
      quantity: 2,
      size: "M",
      color: "White",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Leather Crossbody Bag",
      price: 89.99,
      quantity: 1,
      color: "Brown",
      image: "/placeholder.svg?height=80&width=80",
    },
  ])

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-bold inline-block">ACME Store</span>
            </Link>
            <MainNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:py-12">
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
            <h1 className="mt-4 text-3xl font-bold">Checkout</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items and Summary (Right Side) */}
            <div className="lg:col-span-1 lg:order-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-md">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.color} {item.size && `/ ${item.size}`}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-sm">Qty: {item.quantity}</p>
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-1.5">
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
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Complete Order
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Checkout Form (Left Side) */}
            <div className="lg:col-span-2 lg:order-1 space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                    <Input id="address2" placeholder="Apt 4B" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="NY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="10001" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup defaultValue="card">
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1">
                        Credit Card
                      </Label>
                      <div className="flex gap-2">
                        <div className="h-6 w-10 rounded bg-muted"></div>
                        <div className="h-6 w-10 rounded bg-muted"></div>
                        <div className="h-6 w-10 rounded bg-muted"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-4">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1">
                        PayPal
                      </Label>
                      <div className="h-6 w-10 rounded bg-muted"></div>
                    </div>
                  </RadioGroup>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input id="expiry-date" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip-code">ZIP Code</Label>
                        <Input id="zip-code" placeholder="10001" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
