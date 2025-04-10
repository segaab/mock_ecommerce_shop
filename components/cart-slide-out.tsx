"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"

export default function CartSlideOut() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity } = useCart()

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest(".cart-slide-out")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="relative"
      >
        <ShoppingBag className="h-5 w-5" />
        <span className="sr-only">Cart</span>
        {items.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            {items.length}
          </span>
        )}
      </Button>

      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`cart-slide-out fixed right-0 top-0 h-full w-full max-w-md bg-background p-6 shadow-lg transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close cart</span>
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button className="mt-4" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="mt-6 space-y-6">
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
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                      <p className="mt-1 text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <Link href="/cart">
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    View Cart
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
} 