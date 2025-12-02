import { ArrowLeft, ArrowRight } from "lucide-react";
import { History } from "@/types/types";
import React from "react";

export default function Team() {
  return (
    <section className="flex flex-col gap-8 bg-[#0F6935]">
      <div className="flex flex-col max-w-7xl w-full mx-auto my-4 gap-12 p-8">
        <header className="flex justify-between items-end text-white">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px] p-1">Nos Produis</h4>
            <h2 className=" uppercase font-bold">
              Nos produits et specialite pour vous
            </h2>
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
        <div className="grid grid-cols-4 gap-8">
          {[1, 2, 3].map((prod) => {
            return (
              <div className="flex flex-col justify-end bg-[linear-gradient(rgba(82,82,82,0.1),rgba(82,82,82,0.1)),url('/food1.jpeg')] p-4 text-white h-[300px]">
                <div className="flex flex-col gap-2 p-2 h-fit bg-[#686262ab]">
                  <h4 className="font-bold uppercase">Champignons frais</h4>
                  <p>Les champignons frais sont issus</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
