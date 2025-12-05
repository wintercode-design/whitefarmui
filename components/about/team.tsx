"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { History, Team as TeamT } from "@/types/types";
import React from "react";
import { useAppContext } from "@/providers/appContext";

type Props = {
  members: TeamT[];
};

export default function Team({ members }: Props) {
  const { baseURL } = useAppContext();
  return (
    <section className="flex flex-col gap-8 bg-[#0F6935]">
      <div className="flex flex-col max-w-7xl w-full mx-auto my-4 gap-12 p-8">
        <header className="flex justify-between items-end text-white">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px] p-1">Notre équipe</h4>
            <h2 className=" uppercase font-bold">
              Rencontrez nos spécialistes
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => {
            return (
              <div
                className="flex flex-col justify-end bg-[linear-gradient(rgba(82,82,82,0.1),rgba(82,82,82,0.1)),url('/food1.jpeg')] p-4 text-white h-[300px]"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${baseURL}${member.profile.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                key={member.id}
              >
                <div className="flex flex-col gap-2 p-2 h-fit bg-[#686262ab]">
                  <h4 className="font-bold uppercase">{member.name}</h4>
                  <p>{member.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
