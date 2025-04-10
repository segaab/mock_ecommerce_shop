import ProductPage from "./ProductPage"

export default async function Page({ params }: { params: { id: string } }) {
  // In a real app, this would fetch from an API or database
  const product = {
    id: params.id,
    name: "Classic White T-Shirt",
    price: 29.99,
    description: "A comfortable and versatile t-shirt made from 100% organic cotton. Perfect for everyday wear.",
    features: ["100% organic cotton", "Regular fit", "Crew neck", "Machine washable", "Sustainably sourced"],
    colors: [
      { name: "Black", value: "black" },
      { name: "White", value: "white" },
      { name: "Gray", value: "gray" },
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    rating: 4.5,
    reviewCount: 127,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  }

  return <ProductPage product={product} />
}
