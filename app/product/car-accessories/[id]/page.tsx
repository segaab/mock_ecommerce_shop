import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

interface CarAccessory {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  category: string;
  features: string[];
  specifications: Record<string, string>;
}

const mockCarAccessories: Record<string, CarAccessory> = {
  "car-1": {
    id: "car-1",
    name: "Premium Leather Steering Wheel Cover",
    price: 49.99,
    description: "Enhance your driving experience with our premium leather steering wheel cover. Made from genuine leather with ergonomic design for maximum comfort and grip.",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    colors: ["Black", "Brown", "Beige"],
    category: "Interior",
    features: [
      "Genuine leather construction",
      "Ergonomic design",
      "Non-slip grip",
      "Universal fit",
      "Easy installation",
    ],
    specifications: {
      "Material": "Genuine Leather",
      "Compatibility": "Universal Fit (14.5-15.5 inch)",
      "Installation": "DIY Wrap-around",
    },
  },
  "car-2": {
    id: "car-2",
    name: "LED Underglow Kit",
    price: 129.99,
    description: "Add stunning visual effects to your vehicle with our RGB LED underglow kit. Features app control, music sync, and multiple lighting modes.",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    colors: ["RGB", "Blue", "Red"],
    category: "Exterior",
    features: [
      "Smartphone app control",
      "Music sync capability",
      "Multiple lighting modes",
      "Waterproof design",
      "Easy installation",
    ],
    specifications: {
      "LED Type": "RGB SMD 5050",
      "Power": "12V DC",
      "Control": "Bluetooth App",
      "Waterproof Rating": "IP67",
    },
  },
  "car-3": {
    id: "car-3",
    name: "Smart Wireless Car Charger Mount",
    price: 79.99,
    description: "Automatic clamping wireless car charger with fast charging capability. Features infrared sensor for easy phone placement and removal.",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    colors: ["Black", "Silver"],
    category: "Electronics",
    features: [
      "15W fast wireless charging",
      "Automatic clamping",
      "Infrared sensor",
      "Air vent & dashboard mount",
      "360° rotation",
    ],
    specifications: {
      "Charging Power": "15W Max",
      "Input": "QC 3.0",
      "Mount Type": "Air Vent/Dashboard",
      "Phone Compatibility": "Universal (4.7-6.8 inch)",
    },
  },
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const item = mockCarAccessories[params.id];
  if (!item) return { title: "Product Not Found | ACME Store" };
  return {
    title: `${item.name} | ACME Store`,
    description: item.description,
  };
}

export default function CarAccessoryPage({ params }: { params: { id: string } }) {
  const item = mockCarAccessories[params.id];
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

              <div className="space-y-2">
                <h2 className="font-medium">Specifications</h2>
                <dl className="grid grid-cols-1 gap-2 text-sm">
                  {Object.entries(item.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="text-muted-foreground">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-4">
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