"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import { useAppContext } from "@/providers/appContext";
import BlogQuery from "@/queries/blog";
import { useQuery } from "@tanstack/react-query";
import { ContentSkeleton } from "../skeleton";
import Blog from "../home/blog";
import PageTitle from "../global/pageTitle";

type Props = {
  id: number;
};

export default function BlogDetailPage({ id }: Props) {
  const { baseURL } = useAppContext();
  const blogQuery = new BlogQuery();
  const blog = useQuery({
    queryKey: ["getBlog"],
    queryFn: () => blogQuery.getOne(id),
  });

  const blogs = useQuery({
    queryKey: ["getBlogs"],
    queryFn: () => blogQuery.getAll(),
  });

  if (blog.isLoading && blogs.isLoading) {
    return <ContentSkeleton />;
  }

  if (blog.isError && blogs.isError) {
    return <ContentSkeleton />;
  }

  if (blog.data && blogs.data)
    return (
      <>
        <PageTitle
          img={`${baseURL}${blog.data.cover.url}`}
          title={blog.data.title}
          subs={blog.data.summary.substring(0, 100)}
        />
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
            <div className="flex flex-col gap-3 p-8 xl:p-20 bg-white text-black h-fit w-full max-w-7xl">
              <img
                src={`${baseURL}${blog.data.cover.url}`}
                alt={blog.data.Title ?? "cover"}
                className="h-[500px] object-cover"
              />
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ src, alt }) => (
                    <img
                      src={`http://localhost:1338${src}`} // prepend Strapi base URL if needed
                      alt={alt ?? ""}
                      className="rounded-lg shadow-md"
                    />
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-sky-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {blog.data.content}
              </ReactMarkdown>
            </div>
          </div>
          <Blog />
        </section>
      </>
    );
}
