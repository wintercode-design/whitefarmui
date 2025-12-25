"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useAppContext } from "@/providers/appContext";
import BlogQuery from "@/queries/blog";
import { useQuery } from "@tanstack/react-query";
import { ContentSkeleton } from "../skeleton";
import Blog from "../home/blog";
import PageTitle from "../global/pageTitle";
import BlockRendererClient from "../global/BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

type Props = {
  id: number;
};

export default function BlogDetailPage({ id }: Props) {
  const { baseURL } = useAppContext();
  const blog = useQuery({
    queryKey: ["getBlog"],
    queryFn: () => BlogQuery.getOne(id),
  });

  const blogs = useQuery({
    queryKey: ["getBlogs"],
    queryFn: () => BlogQuery.getAll(),
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
                <h4 className="border-b">
                  {new Date(blog.data.created_at).toLocaleDateString("fr-FR")}
                </h4>
                <h2 className=" uppercase font-bold">{blog.data.title}</h2>
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
              <BlockRendererClient
                content={blog.data.content as unknown as BlocksContent}
              />
            </div>
          </div>
          <Blog />
        </section>
      </>
    );
}
