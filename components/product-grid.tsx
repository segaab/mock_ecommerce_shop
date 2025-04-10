import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  category: string;
}

export function ProductGrid({ category }: ProductGridProps) {
  // This would typically come from your API or database
  const mockShoes: Product[] = [
    {
      id: "1",
      name: "Classic Sneakers",
      price: 89.99,
      image: "/shoes/sneaker-1.jpg",
      category: "sneakers",
    },
    {
      id: "2",
      name: "Running Shoes",
      price: 129.99,
      image: "/shoes/running-1.jpg",
      category: "running",
    },
    {
      id: "3",
      name: "Formal Oxfords",
      price: 159.99,
      image: "/shoes/formal-1.jpg",
      category: "formal",
    },
    {
      id: "4",
      name: "Casual Loafers",
      price: 99.99,
      image: "/shoes/casual-1.jpg",
      category: "casual",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockShoes.map((shoe) => (
        <Link
          key={shoe.id}
          href={`/product/shoes/${shoe.id}`}
          className="group"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={shoe.image}
              alt={shoe.name}
              fill
              className="object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-900">{shoe.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{shoe.category}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ${shoe.price.toFixed(2)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
} 