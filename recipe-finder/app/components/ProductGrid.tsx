"use client";

import Image from "next/image";
import { IoPricetag } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

interface Product {
  Id: number;       
  Title: string;    
  Price: number;    
  Image: string;    
  Description: string;
  Category: string;
}

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  selectedProductId?: number;
  onViewProduct: (product: Product) => void;
}

export default function ProductGrid({ 
  products, 
  loading, 
  selectedProductId, 
  onViewProduct 
}: ProductGridProps) {
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1a3c34]"></div>
         <p className="mt-4 text-[#1a3c34] font-medium">Fetching recipes...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No products found.</p>;
  }

  return (
    <section className="px-8 pb-16 max-w-7xl mx-auto flex justify-center select-none outline-none caret-transparent">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {products
          .filter((p) => p.Id !== selectedProductId)
          .map((product) => (
            <div
              key={product.Id}
              className="bg-white max-w-[320px] w-full rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md flex flex-col overflow-hidden"
            >
              <div className="p-6">
                <div className="aspect-square w-full max-w-[180px] mx-auto rounded-2xl overflow-hidden bg-gray-50 border border-gray-50">
                  <Image 
                    src={product.Image}
                    alt={product.Title}
                    width={180}
                    height={180}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 pointer-events-none"
                  />
                </div>
              </div>

              <div className="px-6 pb-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-[#1a3c34] leading-tight line-clamp-1">
                  {product.Title}
                </h2>

                <p className="mt-2 text-[13px] text-gray-600 leading-relaxed line-clamp-2">
                  {product.Description}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#1a3c34]">
                    <IoPricetag size={16} className="text-[#1a3c34]/70" />
                    <span className="text-base font-bold">
                      ${product.Price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#1a3c34]">
                    <BiCategoryAlt size={16} className="text-[#1a3c34]/70" />
                    <span className="text-sm font-bold capitalize">
                      {product.Category}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => onViewProduct(product)}
                  className="mt-4 w-full bg-[#1a3c34] text-white text-sm font-semibold py-2.5 rounded-full hover:bg-[#244d43] transition-all active:scale-95"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}