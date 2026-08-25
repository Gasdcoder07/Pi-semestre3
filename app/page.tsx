"use client";

import { CustomContainer } from "@/components/CustomContainer";

export default function Home() {

  return (
    <div>
      <main>
        <div className="flex flex-row align-middle items-end mb-10 justify-between">
          <h1 className="text-zinc-700 font-bold text-5xl">Mi punto de venta</h1>
          <div className="w-32 h-32 rounded-full bg-zinc-900/20 flex justify-center items-center"><h1 className="text-8xl font-bold text-black/20 rotate-45">C</h1></div>
        </div>
        <div className="flex flex-row">
          <CustomContainer w={80} bigg={true} />
          <CustomContainer w={20} bigg={true} />
        </div>
        <div className="flex flex-row">
          <CustomContainer w={80} bigg={true} />
          <CustomContainer w={20} bigg={true} />
        </div>
      </main>
    </div>
  );
}
