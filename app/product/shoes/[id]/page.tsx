import { notFound } from "next/navigation"
import ShoePageClient from "./ShoePageClient"

// This would typically come from your API or database
const mockShoes: Record<string, any> = {
  "1": {
    id: "1",
    name: "Classic Sneakers",
    price: 89.99,
    description: "Timeless sneakers with modern comfort technology. Perfect for everyday wear.",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["Black", "White"],
    category: "sneakers",
    features: [
      "Breathable mesh upper",
      "Cushioned insole",
      "Durable rubber outsole",
      "Classic design",
    ],
  },
  // Add more mock shoes as needed
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const shoe = mockShoes[params.id];
  if (!shoe) return { title: "Shoe Not Found | ACME Store" };
  return {
    title: `${shoe.name} | ACME Store`,
    description: shoe.description,
  };
}

export default function ShoePage({ params }: { params: { id: string } }) {
  const shoe = mockShoes[params.id];
  if (!shoe) notFound();

  return <ShoePageClient 
    id={shoe.id}
    name={shoe.name}
    price={shoe.price}
    description={shoe.description}
    images={shoe.images}
  />
} 