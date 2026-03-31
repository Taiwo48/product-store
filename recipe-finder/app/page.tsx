"use client";

import Landingpage from "./components/Landingpage";
import WhatYouWillGet from "./components/WhatYouWillGet";
import BuiltForRealLife from "./components/BuiltForRealLife";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F5F0]">
      <Landingpage /> 
      <WhatYouWillGet /> 
      <BuiltForRealLife />
      <Footer />
    </main>
  );
}