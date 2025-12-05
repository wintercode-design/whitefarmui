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
              <li>
                <Link href={"/contact"}>contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* <img src="/map2.png" alt="map" className="col-span-2" /> */}
        <iframe
          className="col-span-2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.909096283317!2d10.061585742189433!3d5.431680312743555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105fb05d4a33d4e3%3A0x895cbe062331d38c!2sDschang!5e0!3m2!1sen!2scm!4v1764918415331!5m2!1sen!2scm"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

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
            <p>Contactez-nous</p>
            <p>+237696636639</p>
            <p>679683512</p>
            <strong>Cameroon</strong>
          </div>
        </div>
      </section>
      <aside className="flex justify-between max-w-7xl w-full py-12 text-sm">
        <a target="_blank" href="https://dev.wintercodedesign.com">
          © {new Date().getFullYear()} WinterCode Design
        </a>
        <p>Established 2021</p>
      </aside>
    </footer>
  );
}
