import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function Partner() {
  return (
    <section className="flex flex-col gap-8 bg-[#0F6935]">
      <div className="flex flex-col max-w-7xl w-full mx-auto my-4 gap-12 p-8 border-x border-white">
        <header className="flex justify-between items-end text-white">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px]">cos collaborateur</h4>
            <h2 className=" uppercase font-bold">NOS PARTENAIR</h2>
          </div>
          <div className="flex gap-2">
            <span className="border p-2 h-fit">
              <ArrowLeft />
            </span>
            <span className="border p-2 h-fit">
              <ArrowRight />
            </span>
          </div>
        </header>
        <div className="grid grid-cols-8 gap-8">
          {[1, 2, 3].map((prod) => {
            return (
              <div className="rounded-full flex justify-center items-center bg-gray-400 p-4 w-24 h-24">
                Logo {prod}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
