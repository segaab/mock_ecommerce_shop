import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function StorePage() {
  // Featured products data
  const featuredProducts = [
    {
      id: "shoe-1",
      name: "Classic Sneakers",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Shoes",
      href: "/product/shoes/1"
    },
    {
      id: "1",
      name: "Classic White T-Shirt",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Clothing",
      href: "/product/clothing/1"
    },
    {
      id: "2",
      name: "Leather Crossbody Bag",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Accessories",
      href: "/product/accessories/2"
    },
    {
      id: "4",
      name: "Denim Jacket",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Clothing",
      href: "/product/clothing/4"
    },
  ]

  // Categories data
  const categories = [
    { name: "Clothing", image: "/placeholder.svg?height=300&width=300" },
    { name: "Accessories", image: "/placeholder.svg?height=300&width=300" },
    { name: "Footwear", image: "/placeholder.svg?height=300&width=300" },
    { name: "Car Accessories", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Latest Collection</h1>
                <p className="text-muted-foreground md:text-xl">
                  Shop the newest trends and find your perfect style. Quality products for every occasion.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#featured-products">
                    <Button size="lg">
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shop by Category</h2>
                <p className="text-muted-foreground md:text-xl">
                  Browse our collections and find what you're looking for
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {categories.map((category) => (
                <Link 
                  key={category.name} 
                  href={
                    category.name === "Footwear" 
                      ? "/product/shoes"
                      : category.name === "Clothing"
                      ? "/product/clothing"
                      : category.name === "Accessories"
                      ? "/product/accessories"
                      : category.name === "Car Accessories"
                      ? "/product/car-accessories"
                      : `#${category.name.toLowerCase()}`
                  } 
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-lg md:text-xl">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="featured-products" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
                <p className="text-muted-foreground md:text-xl">Our most popular items handpicked for you</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={product.href || `/product/${product.id}`}>
                  <Card className="h-full overflow-hidden group">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <p className="font-medium">${product.price.toFixed(2)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/products">
                <Button size="lg" variant="outline">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
                <p className="text-muted-foreground md:text-xl">
                  Get the latest updates on new products, sales, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
