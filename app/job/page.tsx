"use client";
import PageTitle from "@/components/global/pageTitle";
import JobPage from "@/components/job/jobPage";
import { HeroSkeleton, Skeleton } from "@/components/skeleton";
import { useAppContext } from "@/providers/appContext";
import JobQuery from "@/queries/job";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page() {
  const { baseURL } = useAppContext();
  const jobQuery = new JobQuery(baseURL);
  const jobs = useQuery({
    queryKey: ["getJobs"],
    queryFn: () => jobQuery.getAll(),
  });

  console.log(jobs.data);

  if (jobs.isLoading) {
    return <HeroSkeleton />;
  }

  if (jobs.isError) {
    return <HeroSkeleton />;
  }
  if (jobs.data)
    return (
      <div>
        {/* Page title */}
        <PageTitle
          img="/job/job.jpeg"
          title="Offre d’emploi"
          subs="Nos offre d'emploit sessonier ici"
        />
        <JobPage />
      </div>
    );
}
