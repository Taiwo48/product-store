"use client";

import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa6";
import { GiAvocado } from "react-icons/gi";
import { FaInstagramSquare } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaCarrot } from "react-icons/fa";



export default function LandingPage() {
  const router = useRouter(); 

  return (
    <main className="bg-[#F6F5F0]">
      
      
            <section className="py-16 flex flex-col justify-center items-center text-center px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#1a3c34] md:text-[64px] leading-[1.1]">
            Healthy meals, zero fuss
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#4a5a54] md:text-[19px]">
            Discover eight quick, whole-food recipes that you can cook tonight — no processed junk, no guesswork.
          </p>
        <div className="mt-10 px-8 py-4 bg-[#1a3c34] text-white rounded-xl text-lg font-semibold shadow-sm inline-block select-none">
        Start exploring
        </div>
      </section>

      
      <div className="w-full flex justify-center py-4">
        <div className="bg-white p-2 rounded-2xl ">
          <img
            src="/Screenshot 2026-03-24 140612.png"
            alt="Recipe image"
            className="w-full max-w-6xl rounded-xl"
          />
        </div>
      </div>

      
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            What you’ll get
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow">
              <FaCarrot size={28} className="text-[#1a3c34]" />
            </div>
              <h3 className="mt-4 text-xl font-semibold text-green-900">Whole-food recipes</h3>
              <p className="mt-2 text-gray-600">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </div>
            <div className="flex flex-col items-start">
             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow">
              <IoFlash size={28} className="text-[#1a3c34]" />
            </div>
              <h3 className="mt-4 text-xl font-semibold text-green-900">Minimum fuss</h3>
              <p className="mt-2 text-gray-600">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow"><IoSearchSharp size={28} className="text-[#1a3c34]" />
</div>
              <h3 className="mt-4 text-xl font-semibold text-green-900">Search in seconds</h3>
              <p className="mt-2 text-gray-600">
                Filter by name or ingredient and jump straight to the recipe you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
              Built for real life
            </h2>
            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
              Cooking shouldn’t be complicated. These recipes come in <span className="font-semibold">under 30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat.
            </p>
            <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
              Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/Screenshot 2026-03-24 144745.png"
              alt="Recipe image"
              className="w-[500px] rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F6F5F0] py-12 px-6 md:px-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#dfe5e1] bg-[#e9f0ea] px-6 py-12 text-center md:py-16">
          

          <div className="absolute -left-12 top-1/2 -translate-y-1/2 md:-left-8 lg:-left-4">
            <img
              src="/Screenshot 2026-03-25 082940.png" 
              alt="Decorative fork illustration"
              
              className="h-40 w-auto opacity-20 md:h-64 md:opacity-100 object-contain"
            />
          </div>

          
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 md:-right-8 lg:-right-4">
            <img
              src="/Screenshot 2026-03-25 082509.png" 
              alt="Decorative knife illustration"
              className="h-40 w-auto opacity-20 md:h-64 md:opacity-100 object-contain"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-lg">
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
        
        <div className="flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base">
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