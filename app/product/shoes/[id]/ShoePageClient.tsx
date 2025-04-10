"use client"

import { useState } from "react"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ShoePageClientProps {
  id: string
  name: string
  price: number
  description: string
  images: string[]
}

export default function ShoePageClient({ id, name, price, description, images }: ShoePageClientProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem({
      id,
      name,
      price,
      quantity,
      size: selectedSize,
      image: images[0]
    })
  }

  return (
    <div className="container grid gap-8 py-10 md:grid-cols-2">
      <div className="relative aspect-square">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-2xl font-bold">${price}</p>
        <p className="text-gray-500">{description}</p>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Size</label>
          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "10", "11", "12"].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Quantity</label>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <Button 
          className="w-full"
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
} 