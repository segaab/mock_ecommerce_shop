import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import { FilterBar } from "@/components/filter-bar"

export const metadata = {
  title: "Accessories Collection | ACME Store",
  description: "Browse our latest collection of accessories",
};

export default function AccessoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Accessories Collection</h1>
            <p className="text-muted-foreground md:text-xl">
              Complete your look with our stylish accessories
            </p>
          </div>

          <div className="mt-8">
            <FilterBar
              categories={[
                { name: "All Accessories", value: "all" },
                { name: "Bags", value: "bags" },
                { name: "Watches", value: "watches" },
                { name: "Jewelry", value: "jewelry" },
                { name: "Belts", value: "belts" },
              ]}
              sizes={[
                "One Size",
                "Small",
                "Medium",
                "Large"
              ]}
              colors={[
                { name: "Black", value: "black" },
                { name: "Brown", value: "brown" },
                { name: "Gold", value: "gold" },
                { name: "Silver", value: "silver" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {/* Mock accessories data */}
            {[1, 2, 3, 4].map((id) => (
              <Link key={id} href={`/product/accessories/${id}`}>
                <Card className="h-full overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt={`Accessory ${id}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Leather Bag {id}</h3>
                      <p className="text-sm text-muted-foreground">Bags</p>
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