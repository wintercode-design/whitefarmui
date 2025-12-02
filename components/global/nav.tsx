import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-center p-8 absolute top-0 w-full text-white">
      <div className="flex justify-between max-w-7xl mx-auto w-full">
        <img
          src="/"
          alt="logo"
          className="bg-gray-400 rounded-full w-10 h-w-10"
        />
        <ul className="flex gap-4">
          <li>
            <Link href={"/"}>Acceuil</Link>
          </li>
          <li>
            <Link href={"/about"}>A Propo</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/shop"}>Boutique</Link>
          </li>
          <li>
            <Link href={"/job"}>Job</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
