"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";


export default function LandingPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-[#F6F5F0]">
      <nav className="w-full bg-[#F6F5F0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
          <div className="flex items-center gap-2">
  <Image
    src="/Screenshot 2026-03-24 234148.png"
    alt="Healthy Recipe Finder"
    className="w-7 h-7"
    width={28}
    height={28}
  />
  <span className="font-semibold text-lg text-green-900">
    Healthy Recipe Finder
  </span>
</div>

<ul className="hidden lg:flex gap-8 text-[#1a3c34] font-medium">
  <li className="relative pb-1">
    <Link href="/" className="hover:text-[#244d43] transition-colors">Home</Link>
    {pathname === "/" && (
      <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-[#F0A27A]" />
    )}
  </li>
  
  <li className="pb-1 text-gray-400 cursor-default">About</li>
  
  <li
    className="relative pb-1 cursor-pointer hover:text-[#244d43] transition-colors"
    onClick={() => router.push("/recipespage")}
  >
    Recipes
    {pathname === "/recipespage" && (
      <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-[#F0A27A]" />
    )}
  </li>
</ul>

<span 
  className="hidden lg:block bg-[#1a3c34] text-white px-5 py-2 rounded-md select-none cursor-pointer hover:bg-[#244d43] active:scale-95 transition-all shadow-sm"
  onClick={() => router.push("/recipespage")}
>
  Browse recipes
</span>

          <button
            className="lg:hidden text-green-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden px-6 pb-4">
            <ul className="flex flex-col gap-4 text-green-900 font-medium">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="text-gray-400 cursor-default">About</li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  router.push("/recipespage");
                  setIsOpen(false);
                }}
              >
                Recipes
              </li>
            </ul>
            <button
              className="mt-4 w-full bg-green-900 text-white py-2 rounded-md"
              onClick={() => {
                router.push("/recipespage");
                setIsOpen(false);
              }}
            >
              Browse recipes
            </button>
          </div>
        )}
      </nav>
    </main>
  );
}