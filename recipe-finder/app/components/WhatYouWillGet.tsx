"use client";

import { FaCarrot } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

export default function WhatYouWillGet() {
  return (
    <section className="py-16 px-8 select-none outline-none caret-transparent">
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
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow">
              <IoSearchSharp size={28} className="text-[#1a3c34]" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-green-900">Search in seconds</h3>
            <p className="mt-2 text-gray-600">
              Filter by name or ingredient and jump straight to the recipe you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}