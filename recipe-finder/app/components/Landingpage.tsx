"use client";

import { useRouter } from "next/navigation";



export default function LandingPage() {
  const router = useRouter(); 

  return (
    <main className="bg-[#F6F5F0]">
  
        <section className="py-16 flex flex-col justify-center items-center text-center px-8 select-none outline-none caret-transparent">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a3c34] md:text-[64px] leading-[1.1]">
            Healthy meals, zero fuss
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#4a5a54] md:text-[19px]">
            Discover eight quick, whole-food recipes that you can cook tonight — no processed junk, no guesswork.
          </p>
  
          <div 
          className="mt-10 px-8 py-4 bg-[#1a3c34] text-white rounded-xl text-lg font-semibold shadow-sm inline-block select-none cursor-pointer hover:bg-[#244d43] active:scale-95 transition-all"
          onClick={() => router.push("/recipespage")}
          >
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
    </main>
  );
}