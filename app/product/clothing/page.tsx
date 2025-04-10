import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import { FilterBar } from "@/components/filter-bar"

export const metadata = {
  title: "Clothing Collection | ACME Store",
  description: "Browse our latest collection of clothing for all occasions",
};

export default function ClothingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Clothing Collection</h1>
            <p className="text-muted-foreground md:text-xl">
              Discover our latest styles and trends
            </p>
          </div>

          <div className="mt-8">
            <FilterBar
              categories={[
                { name: "All Clothing", value: "all" },
                { name: "T-Shirts", value: "t-shirts" },
                { name: "Hoodies", value: "hoodies" },
                { name: "Jackets", value: "jackets" },
                { name: "Pants", value: "pants" },
              ]}
              sizes={["XS", "S", "M", "L", "XL", "XXL"]}
              colors={[
                { name: "Black", value: "black" },
                { name: "White", value: "white" },
                { name: "Blue", value: "blue" },
                { name: "Red", value: "red" },
                { name: "Gray", value: "gray" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* Mock clothing data */}
            {[1, 2, 3, 4].map((id) => (
              <Link key={id} href={`/product/clothing/${id}`}>
                <Card className="h-full overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt={`Clothing ${id}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Classic T-Shirt {id}</h3>
                      <p className="text-sm text-muted-foreground">T-Shirts</p>
                      <p className="font-medium">$29.99</p>
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