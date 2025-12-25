"use client";
import { useAppContext } from "@/providers/appContext";
import { History as HistoryT } from "@/types/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

type TeamProps = {
  history: HistoryT[];
};

export default function History({ history }: TeamProps) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 p-8">
        <header className="flex justify-between items-end">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px] p-1">Histoire</h4>
            <h2 className=" uppercase font-bold">Notre Histoire</h2>
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
        <div className="flex flex-col gap-10">
          {history
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
            .map((node, item) => {
              const even = item % 2 == 0;
              return (
                <HistoryNode
                  step={item}
                  swap={even}
                  history={node}
                  key={node.id}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

function HistoryNode(data: { swap: boolean; step: number; history: HistoryT }) {
  const { baseURL } = useAppContext();
  const { history } = data;

  const date = new Date(history.date);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  return (
    <div
      className={`flex ${
        data.swap ? "flex-col" : "flex-col-reverse"
      } lg:flex-row lg:gap-4 items-center`}
    >
      {data.swap ? (
        <>
          <div className="flex flex-col w-full lg:items-end italic">
            <h3>
              {month + 1} - {day} - {year}
            </h3>
            <h5 className="uppercase">
              {new Date(history.date).toLocaleString("fr-FR", {
                month: "long",
              })}
            </h5>
          </div>
          <div>{data.step}</div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col lg:flex-row gap-4">
              <img
                src={
                  history.cover?.url
                    ? `${baseURL}${history.cover.url}`
                    : "/food1.jpeg"
                }
                alt=""
                className="w-full h-[150px] object-cover"
              />

              <div className="flex flex-col">
                <h4 className="font-bold uppercase">{history.title}</h4>
                <p className="flex gap-4 h-fit w-fit p-1 text-[#0F6935]">
                  {history.story}
                </p>
                <p>{history.story}</p>
              </div>
            </div>
            <p>{history.subtitle}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              <div className="flex flex-col lg:items-end">
                <h4 className="font-bold uppercase">{history.title}</h4>
                <p className="flex gap-4 h-fit w-fit p-1 text-[#0F6935]">
                  {history.story}
                </p>
                <p className="lg:text-right">{history.story}</p>
              </div>
              <img
                src={
                  history.cover?.url
                    ? `${baseURL}${history.cover.url}`
                    : "/food1.jpeg"
                }
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
            <p className="lg:text-right">{history.subtitle}</p>
          </div>
          <div>{data.step}</div>
          <div className="flex flex-col w-full italic">
            <h3>
              {month + 1} - {day} - {year}
            </h3>
            <h5 className="uppercase">
              {new Date(history.date).toLocaleString("fr-FR", {
                month: "long",
              })}
            </h5>
          </div>
        </>
      )}
    </div>
  );
}
