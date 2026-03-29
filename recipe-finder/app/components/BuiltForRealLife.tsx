"use client";

import Image from "next/image";

export default function BuiltForRealLife() {
  return (
          <section className="py-20 px-8 select-none outline-none caret-transparent">
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
  <Image
    src="/Screenshot 2026-03-24 144745.png"
    alt="Recipe image"
    width={500}
    height={400}
    className="w-[500px] h-auto rounded-2xl shadow-md pointer-events-none" 
  />
</div>
  </div>
</section>
    );
}