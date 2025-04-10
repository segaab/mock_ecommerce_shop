import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { FilterBar } from "@/components/filter-bar"

export const metadata = {
  title: "Shoes Collection | ACME Store",
  description: "Browse our latest collection of shoes for all occasions",
};

export default function ShoesPage() {
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
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Shoes Collection</h1>
            <p className="text-muted-foreground md:text-xl">
              Find your perfect pair from our carefully curated collection
            </p>
          </div>

          <div className="mt-8">
            <FilterBar
              categories={[
                { name: "All Shoes", value: "all" },
                { name: "Sneakers", value: "sneakers" },
                { name: "Running", value: "running" },
                { name: "Casual", value: "casual" },
                { name: "Formal", value: "formal" },
              ]}
              sizes={[
                "US 5", "US 6", "US 7", "US 8", "US 9", 
                "US 10", "US 11", "US 12", "US 13"
              ]}
              colors={[
                { name: "Black", value: "black" },
                { name: "White", value: "white" },
                { name: "Blue", value: "blue" },
                { name: "Red", value: "red" },
                { name: "Brown", value: "brown" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* Mock shoes data */}
            {[1, 2, 3, 4].map((id) => (
              <Link key={id} href={`/product/shoes/${id}`}>
                <Card className="h-full overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt={`Shoe ${id}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Classic Sneaker {id}</h3>
                      <p className="text-sm text-muted-foreground">Sneakers</p>
                      <p className="font-medium">$89.99</p>
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