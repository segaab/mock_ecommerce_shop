"use client";

import { useState } from "react";

interface Category {
  name: string;
  value: string;
}

interface Color {
  name: string;
  value: string;
}

interface FilterBarProps {
  categories: Category[];
  sizes: string[];
  colors: Color[];
}

export function FilterBar({ categories, sizes, colors }: FilterBarProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="w-full sm:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <select
            value={selectedSize || ""}
            onChange={(e) => setSelectedSize(e.target.value || null)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">All Sizes</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <select
            value={selectedColor || ""}
            onChange={(e) => setSelectedColor(e.target.value || null)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">All Colors</option>
            {colors.map((color) => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 