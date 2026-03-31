"use-client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa6";
import { GiAvocado } from "react-icons/gi";
import { FaInstagramSquare } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";
import { AiOutlineTikTok } from "react-icons/ai";

export default function Footer() {
    const router = useRouter();
    

  return (
    <main className="bg-[#F6F5F0]">
      <section className="bg-[#F6F5F0] py-12 px-6 md:px-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#dfe5e1] bg-[#e9f0ea] px-6 py-12 text-center md:py-16">
          

     <div className="absolute -left-12 top-1/2 -translate-y-1/2 md:-left-8 lg:-left-4">
        <Image
            src="/Screenshot 2026-03-25 082940.png" 
            alt="Decorative fork illustration"
            width={256} 
            height={256}
            className="h-40 w-auto opacity-20 md:h-64 md:opacity-100 object-contain"
        />
     </div>

    <div className="absolute -right-12 top-1/2 -translate-y-1/2 md:-right-8 lg:-right-4">
        <Image
            src="/Screenshot 2026-03-25 082509.png" 
            alt="Decorative knife illustration"
            width={256} 
            height={256}
            className="h-40 w-auto opacity-20 md:h-64 md:opacity-100 object-contain"
        />
    </div>

          <div className="relative z-10 mx-auto max-w-lg select-none outline-none caret-transparent">
  <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#1a3c34] md:text-4xl">
    Ready to cook smarter?
  </h2>
  
  <p className="mb-8 text-sm font-medium text-[#3d5a52] md:text-base">
    Hit the button, pick a recipe, and get dinner on the table—fast.
  </p>

  <button 
    className="rounded-xl bg-[#1a3c34] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#244d43] active:scale-95 md:text-base"
    onClick={() => router.push("/recipespage")}
  >
    Browse recipes
  </button>
</div>
        </div>
      </section>
            <footer className="bg-[#F6F5F0] py-10 px-8 md:px-16 border-t border-gray-200/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base select-none outline-none caret-transparent">
            <span>Made with</span>
              <FaHeart className="text-red-500" size={16} />
            <span>and</span>
              <GiAvocado className="text-[#4a7c2c]" size={20} />
        </div>

        <div className="flex items-center gap-5 text-[#1a3c34]">
          <span aria-label="Instagram">
            <FaInstagramSquare size={24} />
          </span>
          <span aria-label="Butterfly">
            <PiButterflyFill size={26} />
          </span>
          <span aria-label="TikTok">
            <AiOutlineTikTok size={26} />
          </span>
        </div>

      </div>
    </footer>

  </main>
  );
}