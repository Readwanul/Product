
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./productcard";

interface Product {
  id: number;
  unique_id: string;
  name: string;
  price: number;
  short_desc: string;
  category: { name: string };
  product_images: { name: string }[];
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://admin.refabry.com/api/all/product/get")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data?.data || []);
      });
  }, []);

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
      Our Products
    </h1>
    <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-lg">
      Explore our wide range of curated, quality products for every lifestyle.
    </p>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          unique_id={product.unique_id}
          name={product.name}
          price={product.price}
          image={product.product_images[0]?.name || ""}
          short_desc={product.short_desc}
        />
      ))}
    </div>
  </div>
</div>

  );
}
