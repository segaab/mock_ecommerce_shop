import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

interface Accessory {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  features: string[];
}

const mockAccessories: Record<string, Accessory> = {
  "2": {
    id: "2",
    name: "Leather Crossbody Bag",
    price: 89.99,
    description: "Elegant and practical leather crossbody bag, perfect for everyday use. Features multiple compartments and adjustable strap.",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    category: "Bags",
    features: [
      "Genuine leather construction",
      "Adjustable shoulder strap",
      "Multiple interior compartments",
      "Secure zip closure",
      "Metal hardware accents",
    ],
  },
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const item = mockAccessories[params.id];
  if (!item) return { title: "Accessory Not Found | ACME Store" };
  return {
    title: `${item.name} | ACME Store`,
    description: item.description,
  };
}

export default function AccessoryPage({ params }: { params: { id: string } }) {
  const item = mockAccessories[params.id];
  if (!item) notFound();

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {item.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${item.name} - View ${index + 2}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">{item.name}</h1>
                <p className="text-2xl font-semibold mt-2">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="space-y-2">
                <h2 className="font-medium">Description</h2>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              <div className="space-y-2">
                <h2 className="font-medium">Features</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                  {item.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {item.sizes.length > 1 && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                      {item.sizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                    {item.colors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <Button className="w-full" size="lg">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 