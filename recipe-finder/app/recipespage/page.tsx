"use client";

import { useEffect, useState, useRef } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { IoPricetag } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function Recipes() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-[#F6F5F0] min-h-screen">
      <section className="py-16 px-8 text-center relative">
                <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a3c34] md:text-[52px] leading-[1.1]">
            Explore our simple, healthy recipes
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#4a5a54] md:text-[19px]">
            Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. 
            Use the search bar to find a recipe by name or ingredient, or simply scroll 
            the list and let something delicious catch your eye.
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
        <section ref={detailRef} className="px-8 pb-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden relative">

            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
            >
              <LuX size={20} className="text-[#1a3c34]" />
            </button>

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-12 bg-[#fafaf9] flex justify-center">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="max-h-[400px] object-contain drop-shadow-2xl"
                />
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-16">
                <div className="flex items-center gap-2 mb-4">
                  <BiCategoryAlt className="text-[#1a3c34]/60" size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#1a3c34]/60">
                    {selectedProduct.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c34] mb-6 leading-tight">
                  {selectedProduct.title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <IoPricetag className="text-[#1a3c34]" size={24} />
                  <span className="text-3xl font-bold text-[#1a3c34]">
                    ${selectedProduct.price.toFixed(2)}
                  </span>
                </div>

                <button className="px-10 py-4 bg-[#1a3c34] text-white font-bold rounded-full hover:bg-[#244d43] transition-all transform active:scale-95 shadow-lg shadow-[#1a3c34]/20">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-200" />
          <h3 className="mt-8 text-2xl font-bold text-[#1a3c34]">More Products</h3>
        </section>
      )}

<section className="px-8 pb-16 max-w-7xl mx-auto flex justify-center">
  {loading ? (
    <p className="text-center text-gray-500">Loading...</p>
  ) : filteredProducts.length === 0 ? (
    <p className="text-center text-gray-500 mt-6">No products found.</p>
  ) : (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
      {filteredProducts
        .filter((p) => p.id !== selectedProduct?.id)
        .map((product) => (
          <div
            key={product.id}
            className="bg-white max-w-[320px] w-full rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md flex flex-col overflow-hidden"
          >
            <div className="p-6">
              <div className="aspect-square w-full max-w-[180px] mx-auto rounded-2xl overflow-hidden bg-gray-50 border border-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div className="px-6 pb-6 flex flex-col flex-1">
              <h2 className="text-lg font-bold text-[#1a3c34] leading-tight line-clamp-1">
                {product.title}
              </h2>

              <p className="mt-2 text-[13px] text-gray-600 leading-relaxed line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#1a3c34]">
                  <IoPricetag size={16} className="text-[#1a3c34]/70" />
                  <span className="text-base font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#1a3c34]">
                  <BiCategoryAlt size={16} className="text-[#1a3c34]/70" />
                  <span className="text-sm font-bold capitalize">
                    {product.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleViewProduct(product)}
                className="mt-4 w-full bg-[#1a3c34] text-white text-sm font-semibold py-2.5 rounded-full hover:bg-[#244d43] transition-all active:scale-95"
              >
                View Product
              </button>
            </div>
          </div>
        ))}
    </div>
  )}
</section>
    </main>
  );
}