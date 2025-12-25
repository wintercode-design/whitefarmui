"use client";
import BlogPage from "@/components/blog/blogPage";
import PageTitle from "@/components/global/pageTitle";
import { HeroSkeleton, Skeleton } from "@/components/skeleton";
import { useAppContext } from "@/providers/appContext";
import BlogQuery from "@/queries/blog";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page() {
  const { baseURL } = useAppContext();
  const blogs = useQuery({
    queryKey: ["getBlogs"],
    queryFn: () => BlogQuery.getAll(),
  });

  console.log(blogs.data);

  if (blogs.isLoading) {
    return <HeroSkeleton />;
  }

  if (blogs.isError) {
    return <HeroSkeleton />;
  }
  if (blogs.data)
    return (
      <div>
        {/* Page title */}
        <PageTitle
          img="/blog/blog.jpeg"
          title="Blog"
          subs="Stay up to date with our activities"
        />
        <BlogPage blogs={blogs.data} />
      </div>
    );
}
