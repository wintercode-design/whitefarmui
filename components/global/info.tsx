"use client";
import { useAppContext } from "@/providers/appContext";
import InfoQuery from "@/queries/info";
import { useQuery } from "@tanstack/react-query";
import { HeroSkeleton } from "../skeleton";

const Info = () => {
  const { baseURL } = useAppContext();
  const infoQuery = new InfoQuery();
  const infos = useQuery({
    queryKey: ["getInfos"],
    queryFn: () => infoQuery.getAll(),
  });

  console.log(infos.data);

  if (infos.isLoading) {
    return <HeroSkeleton />;
  }

  if (infos.isError) {
    return <HeroSkeleton />;
  }
  if (infos.data)
    return (
      <section className="flex gap-4 p-2 max-w-7xl mx-auto">
        {infos.data.map((info) => {
          return (
            <div
              className="flex gap-2 items-center p-2 bg-[#0F6935] rounded-full text-white"
              key={info.id}
            >
              <img
                src={`${baseURL}${info.cover.url}`}
                alt=""
                className="max-w-24 w-full h-24 rounded-full object-cover"
              />
              <div className="flex flex-col w-full">
                <h3 className="text-bold">{info.title}</h3>
                <p className="">{info.content}</p>
              </div>
            </div>
          );
        })}
      </section>
    );
};

export default Info;
