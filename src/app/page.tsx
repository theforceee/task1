"use client";

import HomeContent from "@/components/HomeContent";
import HomeIntro from "@/components/HomeIntro";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-10">
      <HomeIntro />

      <HomeContent />
    </div>
  );
}
