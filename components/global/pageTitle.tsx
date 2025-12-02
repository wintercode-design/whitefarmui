import { ArrowRight, AtSign, MapPin, Play } from "lucide-react";
import React from "react";

export default function PageTitle() {
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
    </section>
  );
}
