"use client";

import { useState, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { useGetProductsQuery } from "../store/apiSlice"; 
import ProductGrid from "../components/ProductGrid";
import ProductDetail from "../components/ProductDetail";

interface Product {
  Id: number;
  Title: string;
  Price: number;
  Image: string;
  Description: string;
  Category: string;
}

export default function Recipes() {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const filteredProducts = products.filter(
    (product) =>
      product.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isError) {
    return <div className="text-center py-20 text-red-600">Failed to load recipes.</div>;
  }

  return (
    <main className="bg-[#F6F5F0] min-h-screen">
      <section className="py-16 px-8 text-center relative">
        <div className="mx-auto max-w-4xl select-none outline-none caret-transparent">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a3c34] md:text-[52px] leading-[1.1]">
            Explore our simple, healthy recipes
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#4a5a54] md:text-[19px]">
            Discover quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name of ingredient or simply scroll the list and let something delicious catch your eyes
          </p>
        </div>

        <div className="mt-13 flex justify-end px-4 max-w-7xl mx-auto w-full">
          <div className="relative w-full max-w-[250px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <LuSearch size={18} />
            </div>
            <input
              type="text"
              placeholder="Search by name ..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-[#1a3c34] focus:outline-none focus:ring-1 focus:ring-[#1a3c34]/20 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          detailRef={detailRef}
        />
      )}

      <ProductGrid 
        products={filteredProducts} 
        loading={isLoading} 
        selectedProductId={selectedProduct?.Id} 
        onViewProduct={handleViewProduct} 
      />
    </main>
  );
}