import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 p-8">
        <header className="flex">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px]">Blogs</h4>
            <h2 className=" uppercase font-bold">
              SUIver notre blog pour rester a jour
            </h2>
          </div>
        </header>
        <div className="gap-8 grid grid-cols-5">
          <div className="grid grid-cols-3 gap-10 col-span-3">
            {[1, 2, 3].map((prod) => {
              return (
                <div className="flex flex-col" key={prod}>
                  <img
                    src="/food1.jpeg"
                    alt=""
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold uppercase">Champignons frais</h4>
                    <p>
                      Les champignons frais sont issus de la récolte immédiate
                      au Site
                    </p>
                    <Link
                      href={"/"}
                      className="flex gap-8 h-fit w-fit py-2 text-[#0F6935] border-b border-b-[#0F6935]"
                    >
                      Commande <ArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col justify-end col-span-2 bg-[linear-gradient(rgba(82,82,82,0.2),rgba(82,82,82,0.8)),url('/food1.jpeg')] p-4 text-white">
            <div className="flex flex-col gap-2 p-2 h-fit bg-[#686262ab]">
              <h4 className="font-bold uppercase">Champignons frais</h4>
              <p>
                Les champignons frais sont issus de la récolte immédiate au Site
              </p>
              <div className="flex gap-2">
                <span className="border p-2 h-fit">
                  <ArrowLeft />
                </span>
                <span className="border p-2 h-fit">
                  <ArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
