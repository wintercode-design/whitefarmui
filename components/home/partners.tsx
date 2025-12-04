"use client";
import ClientQuery from "@/queries/clients";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { HeroSkeleton } from "../skeleton";
import { useAppContext } from "@/providers/appContext";

export default function Client() {
  const { baseURL } = useAppContext();
  const clientQuery = new ClientQuery();
  const clients = useQuery({
    queryKey: ["getClients"],
    queryFn: () => clientQuery.getAll(),
  });

  console.log(clients.data);

  if (clients.isLoading) {
    return <HeroSkeleton />;
  }

  if (clients.isError) {
    return <HeroSkeleton />;
  }
  if (clients.data)
    return (
      <section className="flex flex-col gap-8 bg-[#0F6935]">
        <div className="flex flex-col max-w-7xl w-full mx-auto my-4 gap-12 p-8 ">
          <header className="flex justify-between items-end text-white">
            <div className="flex flex-col gap-2 justify-start max-w-xl">
              <h4 className="border-b w-[150px]">Nos collaborateur</h4>
              <h2 className=" uppercase font-bold">NOS PARTENAIR</h2>
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
          <div className="grid grid-cols-8 gap-8">
            {clients.data.map((client) => {
              console.log(client);
              return (
                <img
                  src={`${baseURL}${client.logo.url}`}
                  alt={client.name}
                  className="rounded-full flex justify-center items-center bg-gray-400 w-24 h-24"
                  key={client.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
}
