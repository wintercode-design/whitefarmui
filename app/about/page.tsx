"use client";
import History from "@/components/about/history";
import Story from "@/components/about/story";
import Team from "@/components/about/team";
import PageTitle from "@/components/global/pageTitle";
import Blog from "@/components/home/blog";
import { HeroSkeleton } from "@/components/skeleton";
import { useAppContext } from "@/providers/appContext";
import HistoryQuery from "@/queries/history";
import TeamQuery from "@/queries/team";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { baseURL } = useAppContext();
  const teamQuery = new TeamQuery(baseURL);
  const historyQuery = new HistoryQuery(baseURL);
  const teams = useQuery({
    queryKey: ["getTeams"],
    queryFn: () => teamQuery.getAll(),
  });
  const history = useQuery({
    queryKey: ["getHistory"],
    queryFn: () => historyQuery.getAll(),
  });

  console.log(teams.data);

  if (teams.isLoading && history.isLoading) {
    return <HeroSkeleton />;
  }

  if (teams.isError && history.isError) {
    return <HeroSkeleton />;
  }
  if (teams.data && history.data)
    return (
      <div>
        {/* Page title */}
        <PageTitle
          img="/about/about.jpeg"
          title="Gic Ubuntu"
          subs="Champignons frais ou séchés, qualité garantie "
        />
        {/* Story */}
        <Story />
        {/* History time line*/}
        <History history={history.data} />
        {/* Team */}
        <Team members={teams.data} />
        {/* Blogs */}
        <Blog />
      </div>
    );
}
