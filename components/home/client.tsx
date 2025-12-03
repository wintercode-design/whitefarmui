"use client";
import { useAppContext } from "@/providers/appContext";
import ClientQuery from "@/queries/clients";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { HeroSkeleton } from "../skeleton";

export default function Client() {
  const [selected, setSelected] = useState(0);
  const { baseURL } = useAppContext();
  const clientQuery = new ClientQuery(baseURL);
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
      <section className="flex flex-col gap-8">
        <div className="flex flex-col max-w-7xl mx-auto gap-8 p-8">
          <header className="flex justify-between items-end">
            <div className="flex flex-col gap-2 justify-start max-w-xl">
              <h4 className="border-b w-[150px]">Nos Client</h4>
              <h2 className=" uppercase font-bold">NOS CLIENT SATISFAIT</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={
                    clients.data.at(selected)?.cover[0].url
                      ? `${baseURL}${clients.data.at(selected)?.cover[0].url}`
                      : "/food1.jpeg"
                  }
                  alt=""
                  className="w-full h-[200px] object-cover"
                />

                <div className="flex flex-col">
                  <h4 className="font-bold uppercase">
                    {clients.data.at(selected)?.name}
                  </h4>
                  <p className="flex gap-4 h-fit w-fit p-1 text-[#0F6935]">
                    {clients.data.at(selected)?.position}
                  </p>
                </div>
              </div>
              <p>{clients.data.at(selected)?.comment}</p>
            </div>
            <div className="flex flex-col gap-4">
              {clients.data.map((client) => {
                return (
                  <div className="flex gap-2" key={client.id}>
                    <img
                      src={
                        client.cover[0].url
                          ? `${baseURL}${client.cover[0].url}`
                          : "/food1.jpeg"
                      }
                      alt=""
                      className="w-full max-w-[150px]  h-[120px] object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold uppercase">{client.name}</h4>
                      <p className="flex gap-8 h-fit w-fit text-[#0F6935]">
                        {client.position}
                      </p>
                      <p className="line-clamp-2">{client.comment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
}
