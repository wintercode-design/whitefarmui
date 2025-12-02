import Blog from "@/components/home/blog";
import Client from "@/components/home/client";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Partner from "@/components/home/partners";
import Product from "@/components/home/product";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* Products */}
      <Product />
      {/* clients */}
      <Client />
      {/* partners */}
      <Partner />
      {/* contact */}
      <Contact />
      {/* blogs */}
      <Blog />
    </main>
  );
}
