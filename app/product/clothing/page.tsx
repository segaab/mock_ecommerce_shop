import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { FilterBar } from "@/components/filter-bar"

export const metadata = {
  title: "Clothing Collection | ACME Store",
  description: "Browse our latest collection of clothing and apparel",
};

export default function ClothingPage() {
  const clothingCategories = [
    { name: "All Clothing", value: "all" },
    { name: "T-Shirts", value: "t-shirts" },
    { name: "Jackets", value: "jackets" },
    { name: "Pants", value: "pants" },
    { name: "Dresses", value: "dresses" },
  ];

  const clothingSizes = [
    "XS", "S", "M", "L", "XL", "XXL"
  ];

  const clothingColors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Blue", value: "blue" },
    { name: "Gray", value: "gray" },
    { name: "Navy", value: "navy" },
  ];

  const clothingItems = [
    {
      id: "1",
      name: "Classic White T-Shirt",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "T-Shirts",
    },
    {
      id: "4",
      name: "Denim Jacket",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Jackets",
    },
  ];

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
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Clothing Collection</h1>
            <p className="text-muted-foreground md:text-xl">
              Discover our latest styles and trending fashion pieces
            </p>
          </div>

          <div className="mt-8">
            <FilterBar
              categories={clothingCategories}
              sizes={clothingSizes}
              colors={clothingColors}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {clothingItems.map((item) => (
              <Link key={item.id} href={`/product/clothing/${item.id}`}>
                <Card className="h-full overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 