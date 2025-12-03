import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function JobPage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 p-8">
        <header className="flex justify-between items-end">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px]">Nos Offres</h4>
            <h2 className=" uppercase font-bold">
              Nos Recherchion les Profiles Suivent
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
          {[1, 2, 3].map((prod) => {
            return (
              <div
                className="flex flex-col gap-4 hover:bg-[#0F6935]/20 hover:p-4 duration-500"
                key={prod}
              >
                <img
                  src="/food1.jpeg"
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold uppercase">Champignons frais</h4>
                  <strong className="text-[#0F6935]">Dschang - Contract</strong>
                  <strong className="text-xl">3 posts</strong>
                  <p>
                    Les champignons frais sont issus de la récolte immédiate au
                    Site
                  </p>
                  <Link
                    href={"/"}
                    className="flex gap-8 h-fit w-fit py-2 text-[#0F6935] border-b border-b-[#0F6935]"
                  >
                    Postuler <ArrowRight />
                  </Link>
                  <a
                    href="mailto:contact@winterocodedesign.com"
                    className="text-[#0F6935]"
                  >
                    contact@winterocodedesign.com
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
