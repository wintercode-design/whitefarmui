import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function Client() {
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
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img
                src="/food1.jpeg"
                alt=""
                className="w-full h-[200px] object-cover"
              />

              <div className="flex flex-col">
                <h4 className="font-bold uppercase">Demanou Jeam Roger</h4>
                <p className="flex gap-4 h-fit w-fit p-1 text-[#0F6935]">
                  RESPONSABLE MAIMA
                </p>
              </div>
            </div>
            <p>
              Les champignons frais sont issus de la récolte immédiate au
              SiteLes champignons frais sont issus de la au sus de la récolte i
              SiteLes champignons frais sont récolte immédiate au Smpignon issus
              de la récolte immédiate au iteLes cha SiteLes champignons frais
              sont issus de la récolte immédiate au Site
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((prod) => {
              return (
                <div className="flex gap-2" key={prod}>
                  <img
                    src="/food1.jpeg"
                    alt=""
                    className="w-full max-w-[150px]  h-[120px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold uppercase">Demanou Jeam Roger</h4>
                    <p className="flex gap-8 h-fit w-fit text-[#0F6935]">
                      Commande
                    </p>
                    <p className="line-clamp-2">
                      Les champignons frais sont issus de la récolte immédiate
                      au Site
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
