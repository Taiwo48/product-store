"use client";

import { IoPricetag } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { LuX } from "react-icons/lu";
import Image from "next/image";

interface Product {
  Id: number;
  Title: string;
  Price: number;
  Image: string;
  Description: string;
  Category: string;
}

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  detailRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProductDetail({ product, onClose, detailRef }: ProductDetailProps) {
  return (
    <section 
      ref={detailRef} 
      className="px-8 pb-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500 select-none outline-none caret-transparent"
    >
      <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
        >
          <LuX size={20} className="text-[#1a3c34]" />
        </button>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-12 bg-[#fafaf9] flex justify-center">
            <Image 
              src={product.Image} 
              alt={product.Title} 
              width={600} 
              height={400} 
              className="max-h-[400px] w-auto object-contain drop-shadow-2xl pointer-events-none" 
            />
          </div>

          <div className="w-full md:w-1/2 p-10 md:p-16">
            <div className="flex items-center gap-2 mb-4">
              <BiCategoryAlt className="text-[#1a3c34]/60" size={20} />
              <span className="text-sm font-bold uppercase tracking-widest text-[#1a3c34]/60">
                {product.Category}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c34] mb-6 leading-tight">
              {product.Title}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.Description}
            </p>

            <div className="flex items-center gap-3 mb-8">
              <IoPricetag className="text-[#1a3c34]" size={24} />
              <span className="text-3xl font-bold text-[#1a3c34]">
                ${product.Price.toFixed(2)}
              </span>
            </div>

            <button 
              disabled 
              className="px-10 py-4 bg-[#1a3c34] text-white font-bold rounded-full transition-all shadow-lg shadow-[#1a3c34]/20 
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-200" />
      <h3 className="mt-8 text-2xl font-bold text-[#1a3c34]">More Products</h3>
    </section>
  );
}