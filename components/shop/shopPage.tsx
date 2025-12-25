"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Product } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import { useAppContext } from "@/providers/appContext";

type Props = {
  products: Product[];
};

export default function ShopPage({ products }: Props) {
  const [kg, setKg] = useState<number>(1);
  const [current, setcurrent] = useState<number>(-1);
  const { baseURL } = useAppContext();
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 p-8">
        <header className="flex justify-between items-end">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px]">Nos Produis</h4>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((prod) => {
            return (
              <div
                key={prod.id}
                className="flex flex-col hover:bg-[#0F6935]/20 hover:p-2 duration-500 gap-4"
                onClick={() => setcurrent(prod.id)}
              >
                <img
                  src={
                    prod.cover?.url
                      ? `${baseURL}${prod.cover.url}`
                      : "/food1.jpeg"
                  }
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold uppercase">{prod.name}</h4>
                  <p>{prod.description}</p>
                  <div className="flex gap-2">
                    <span className="flex gap-8 h-fit w-full py-2 text-[#0F6935] border-b border-b-[#0F6935]">
                      {prod.price}XAF/Kg
                    </span>
                    <span className="flex w-full gap-8 h-fit py-2 text-[#0F6935] border-b border-b-[#0F6935]">
                      <p>{prod.unit}</p>
                      <input
                        type="number"
                        value={prod.id === current ? kg : 1}
                        onChange={(e) => setKg(Number(e.target.value))}
                        className="focus:outline-neutral-200 w-20"
                      />
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/237696636639?text=Bonjour, je suis intéressé par, ${encodeURIComponent(
                      prod.name
                    )}, Je voudrais ${prod.id === current ? kg : 1} Kg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between gap-2 h-fit py-2 px-8 text-white bg-[#0F6935]"
                  >
                    Commander <ArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
