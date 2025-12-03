import { AtSign, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FooterBar() {
  return (
    <footer className="w-full flex flex-col items-center bg-[#0a0a0a] text-white">
      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-12 px-4 py-12 mx-auto w-full">
        <div className="flex flex-col gap-2">
          <h4>Liens Utils</h4>
          <nav>
            <ul className="flex flex-col">
              <li>
                <Link href={"/"}>Acceuil</Link>
              </li>
              <li>
                <Link href={"/about"}>A Propo</Link>
              </li>
              <li>
                <Link href={"/blog"}>Notre Blog</Link>
              </li>
              <li>
                <Link href={"/shop"}>Boutique</Link>
              </li>
              <li>
                <Link href={"/job"}>Job</Link>
              </li>
            </ul>
          </nav>
        </div>

        <img src="/map2.png" alt="map" className="col-span-2" />

        <div className="flex flex-col gap-2">
          <MapPin />
          <div className="flex flex-col">
            <p>Menoua</p>
            <p>Dschang</p>
            <strong>Cameroon</strong>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <AtSign />
          <div className="flex flex-col">
            <p>Contacter Nous</p>
            <p>+237696636639</p>
            <p>679683512</p>
            <strong>Cameroon</strong>
          </div>
        </div>
      </section>
      <aside className="flex justify-between max-w-7xl w-full py-12">
        <a href="">Copy write @ wintercodedesign 2025</a>
        <p>Since 2021</p>
      </aside>
    </footer>
  );
}
