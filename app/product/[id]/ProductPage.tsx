"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/CartContext"

export interface ProductPageProps {
  product: {
    id: string
    name: string
    price: number
    description: string
    features: string[]
    colors: { name: string; value: string }[]
    sizes: string[]
    rating: number
    reviewCount: number
    images: string[]
  }
}

export default function ProductPage({ product }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("m")
  const [selectedColor, setSelectedColor] = useState("black")
  const { addItem } = useCart()

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

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
          <div className="flex items-center gap-4">
            <Link href="/checkout">
              <Button variant="outline" size="icon">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : i < product.rating
                              ? "fill-primary/50 text-primary"
                              : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
                <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              {/* Color Selection */}
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`h-10 w-10 rounded-full border ${
                        selectedColor === color.value ? "ring-2 ring-primary ring-offset-2" : ""
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 min-w-[2.5rem] rounded-md border px-3 text-sm ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input bg-background"
                      }`}
                    >
                      {size.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => {
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    size: selectedSize,
                    color: selectedColor,
                    image: product.images[0]
                  })
                }}
              >
                Add to Cart
              </Button>

              {/* Product Information Tabs */}
              <Tabs defaultValue="details" className="mt-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="returns">Returns</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-4">
                  <ul className="list-disc pl-4 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="mt-4">
                  <p>Free shipping on orders over $50. Standard shipping takes 3-5 business days.</p>
                </TabsContent>
                <TabsContent value="returns" className="mt-4">
                  <p>Easy returns within 30 days of purchase. Items must be unworn and in original condition.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 