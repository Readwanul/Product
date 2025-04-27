'use client';
import React from "react";
import HeaderMain from "./components/header";
import ProductGrid from "./components/productgrid";

export default function Home() {

  return (
    <div>
      <HeaderMain/>
      <ProductGrid />
      <div className="flex justify-center mt-4">
      </div>  

    </div>
  );
}
