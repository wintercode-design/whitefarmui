import { ArrowRight, AtSign, MapPin, Play } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col min-h-[50vh] bg-no-repeat bg-cover bg-[linear-gradient(rgba(82,82,82,0.2),rgba(82,82,82,0.8)),url('/hero.jpeg')]">
      <div className="flex">
        <div className="flex flex-col gap-2 border-r border-white justify-end p-8 text-white w-[185px]">
          <AtSign />
          <div className="flex flex-col">
            <p>Contacter Nous</p>
            <p>+237696636639</p>
            <p>679683512</p>
            <strong>Cameroon</strong>
          </div>
        </div>
        <div className="text-[#ffffff] flex flex-col gap-4 flex-1 max-w-lg p-8 mt-[150px]">
          <h4>Alimentation saine, durable et local</h4>
          <h1 className=" uppercase font-bold">Champignons Bio</h1>
          <h3>Champignons frais ou séchés, qualité garantie </h3>
        </div>
      </div>
      <div className="flex border-t border-white items-start">
        <div className="flex flex-col gap-2 border-r border-white justify-start p-8 text-white w-[185px] min-h-[200px]">
          <MapPin />
          <div className="flex flex-col">
            <p>Menoua</p>
            <p>Dschang</p>
            <strong>Cameroon</strong>
          </div>
        </div>
        <div className="flex gap-2 flex-1 p-8 justify-start items-start min-h-[200px]">
          <button className="flex gap-2 h-fit py-2 px-8 text-white bg-[#0F6935]">
            Commande <ArrowRight />
          </button>
          <button className="h-fit p-1 border-2 border-white">
            <Play color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
