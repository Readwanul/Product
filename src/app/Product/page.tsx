
import React from "react";
import HeaderMain from "../components/header";
import ProductGrid from "../components/productgrid";

export default function Home() {

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
      <HeaderMain />
      </div>
      <ProductGrid />  

    </div>
  );
}