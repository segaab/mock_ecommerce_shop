"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function PaymentPage() {
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
            <Link href="/checkout" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
            <h1 className="mt-4 text-3xl font-bold">Payment</h1>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup defaultValue="card" className="space-y-4">
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1">Credit Card</Label>
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                  </div>
                </RadioGroup>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Complete Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 