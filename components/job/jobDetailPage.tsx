"use client";
import { useAppContext } from "@/providers/appContext";
import JobQuery from "@/queries/job";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ContentSkeleton } from "../skeleton";
import PageTitle from "../global/pageTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  id: number;
};

export default function JobDetailPage({ id }: Props) {
  const { baseURL } = useAppContext();
  const job = useQuery({
    queryKey: ["getJob"],
    queryFn: () => JobQuery.getOne(id),
  });

  const jobs = useQuery({
    queryKey: ["getJobs"],
    queryFn: () => JobQuery.getAll(),
  });

  if (job.isLoading && jobs.isLoading) {
    return <ContentSkeleton />;
  }

  if (job.isError && jobs.isError) {
    return <ContentSkeleton />;
  }

  if (job.data && jobs.data)
    return (
      <>
        <PageTitle
          img={`${baseURL}${job.data.cover.url}`}
          title={job.data.title}
          subs={job.data.summery.substring(0, 100)}
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
                src={`${baseURL}${job.data.cover.url}`}
                alt={job.data.title ?? "cover"}
                className="h-[500px] object-cover"
              />
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ src, alt }) => (
                    <img
                      src={`http://gicubuntuapi.wintercodedesign.com${src}`} // prepend Strapi base URL if needed
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
                {job.data.description}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      </>
    );
}
