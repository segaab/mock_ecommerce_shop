import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { FilterBar } from "@/components/filter-bar"

export const metadata = {
  title: "All Products | ACME Store",
  description: "Browse our complete collection of products",
};

export default function AllProductsPage() {
  const categories = [
    { name: "All Categories", value: "all" },
    { name: "Clothing", value: "clothing" },
    { name: "Shoes", value: "shoes" },
    { name: "Accessories", value: "accessories" },
    { name: "Car Accessories", value: "car-accessories" },
  ];

  const allProducts = {
    clothing: [
      {
        id: "1",
        name: "Classic White T-Shirt",
        price: 29.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "Clothing",
        href: "/product/clothing/1"
      },
      {
        id: "4",
        name: "Denim Jacket",
        price: 79.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "Clothing",
        href: "/product/clothing/4"
      },
    ],
    shoes: [
      {
        id: "1",
        name: "Classic Sneakers",
        price: 89.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "Shoes",
        href: "/product/shoes/1"
      },
    ],
    accessories: [
      {
        id: "2",
        name: "Leather Crossbody Bag",
        price: 89.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "Accessories",
        href: "/product/accessories/2"
      },
    ],
    carAccessories: [
      {
        id: "car-1",
        name: "Premium Leather Steering Wheel Cover",
        price: 49.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "Car Accessories",
        href: "/product/car-accessories/car-1"
      },
      {
        id: "car-2",
        name: "LED Underglow Kit",
        price: 129.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "Car Accessories",
        href: "/product/car-accessories/car-2"
      },
      {
        id: "car-3",
        name: "Smart Wireless Car Charger Mount",
        price: 79.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "Car Accessories",
        href: "/product/car-accessories/car-3"
      },
    ],
  };

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
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">All Products</h1>
            <p className="text-muted-foreground md:text-xl">
              Browse our complete collection
            </p>
          </div>

          <div className="mt-8">
            <FilterBar
              categories={categories}
              sizes={[]}
              colors={[]}
            />
          </div>

          {/* Products by Category */}
          {Object.entries(allProducts).map(([categoryKey, products]) => (
            <div key={categoryKey} className="mt-12">
              <h2 className="text-2xl font-bold mb-6 capitalize">
                {categoryKey.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link key={`${categoryKey}-${product.id}`} href={product.href}>
                    <Card className="h-full overflow-hidden group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image}
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
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 