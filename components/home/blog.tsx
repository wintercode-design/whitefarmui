"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { HeroSkeleton } from "../skeleton";
import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "@/providers/appContext";
import BlogQuery from "@/queries/blog";
import { Blog as BlogT } from "@/types/types";

export default function Blog() {
  const [selected, setSelected] = useState(0);

  const { baseURL } = useAppContext();
  const blogQuery = new BlogQuery(baseURL);
  const blogs = useQuery({
    queryKey: ["getBlogs"],
    queryFn: async () => blogQuery.getAll(),
  });

  console.log(blogs.data);

  if (blogs.isLoading) {
    return <HeroSkeleton />;
  }

  if (blogs.isError) {
    return <HeroSkeleton />;
  }

  if (blogs.isSuccess) {
  }

  if (blogs.data) {
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
          <div className="gap-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:col-span-2 lg:col-span-3">
              {blogs.data.slice(0, 3).map((blog, i) => {
                return (
                  <div
                    className="flex flex-col hover:bg-[#0F6935]/20 hover:p-2 duration-300"
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
                      <h4
                        className="font-bold uppercase hover:text-[#0F6935] cursor-pointer"
                        onClick={() => setSelected(i)}
                      >
                        {blog.title}
                      </h4>
                      <p className="line-clamp-3">{blog.summary}</p>
                      <Link
                        href={`/blog/${blog.id}`}
                        className="flex gap-8 h-fit w-fit py-2 text-[#0F6935] border-b border-b-[#0F6935]"
                      >
                        Commande <ArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="flex flex-col justify-end md:col-span-2 p-4 text-white"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${baseURL}${
                  blogs.data.at(selected)?.cover.url
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col gap-2 p-2 h-fit bg-[#686262ab]">
                <h4 className="font-bold uppercase">
                  {blogs.data.at(selected)?.title}
                </h4>
                <p className="line-clamp-4">
                  {blogs.data.at(selected)?.summary}
                </p>
                <div className="flex gap-2">
                  <span
                    className="border p-2 h-fit cursor-pointer hover:bg-[#0F6935]/20"
                    onClick={() =>
                      setSelected((selected + 1) % blogs.data.length)
                    }
                  >
                    <ArrowLeft />
                  </span>
                  <span
                    className="border p-2 h-fit cursor-pointer hover:bg-[#0F6935]/20"
                    onClick={() =>
                      setSelected(Math.abs((selected + 1) % blogs.data.length))
                    }
                  >
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
}
