
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
    <div className="px-20 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
  );
}
