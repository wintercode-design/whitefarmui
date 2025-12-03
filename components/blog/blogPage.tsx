"use client";
import { useAppContext } from "@/providers/appContext";
import { Blog } from "@/types/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  blogs: Blog[];
};

export default function BlogPage({ blogs }: Props) {
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
          {blogs.map((blog) => {
            return (
              <div
                className="flex flex-col hover:bg-[#0F6935]/20 hover:p-4 duration-500 gap-4"
                key={blog.id}
              >
                <img
                  src={
                    blog.cover.url
                      ? `${baseURL}${blog.cover.url}`
                      : "/food1.jpeg"
                  }
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold uppercase">{blog.title}</h4>
                  <p className="line-clamp-4">{blog.summary}</p>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="flex gap-8 h-fit w-fit py-2 text-[#0F6935] border-b border-b-[#0F6935]"
                  >
                    Voir Plus <ArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
