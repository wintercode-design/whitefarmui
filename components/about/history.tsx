import { History as HistoryT } from "@/types/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

type TeamProps = {
  history: HistoryT[];
};

export default function History(Props: TeamProps) {
  const { history } = Props;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 p-8">
        <header className="flex justify-between items-end">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[150px] p-1">Histoir</h4>
            <h2 className=" uppercase font-bold">Notre Histoir</h2>
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
          {[1, 2, 3, 4].map((prod) => {
            const even = prod % 2 == 0;
            return <HistoryNode step={prod} swap={even} />;
          })}
        </div>
      </div>
    </section>
  );
}

function HistoryNode(data: { swap: boolean; step: number }) {
  return (
    <div className="flex gap-4 items-center">
      {data.swap ? (
        <>
          <div className="flex flex-col w-full items-end italic">
            <h3>01 - 05 - 2024</h3>
            <h5>JANUARY</h5>
          </div>
          <div>{data.step}</div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4">
              <img
                src="/food1.jpeg"
                alt=""
                className="w-full h-[150px] object-cover"
              />

              <div className="flex flex-col">
                <h4 className="font-bold uppercase">Demanou Jeam Roger</h4>
                <p className="flex gap-4 h-fit w-fit p-1 text-[#0F6935]">
                  RESPONSABLE MAIMA
                </p>
                <p>
                  Les champignons frais sont issus de la récolte immédiate au us
                  de la au sus de la Site issus de la récolte immédiate au Site
                </p>
              </div>
            </div>
            <p>
              Les champignons frais sont issus de la récolte immédiate au
              SiteLes champignons frais sont issus de la au sus de la récolte i
              SiteLes champignons frais sont récolte immédiate au Smpignon issus
              de la récolte immédiate au iteLes cha SiteLes champignons frais
              sont issus de la récolte immédiate au Site
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4">
              <div className="flex flex-col items-end">
                <h4 className="font-bold uppercase">Demanou Jeam Roger</h4>
                <p className="flex gap-4 h-fit w-fit p-1 text-[#0F6935]">
                  RESPONSABLE MAIMA
                </p>
                <p className="text-right">
                  Les champignons frais sont issus de la récolte immédiate au us
                  de la au sus de la Site issus de la récolte immédiate au Site
                </p>
              </div>
              <img
                src="/food1.jpeg"
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
            <p className="text-right">
              Les champignons frais sont issus de la récolte immédiate au
              SiteLes champignons frais sont issus de la au sus de la récolte i
              SiteLes champignons frais sont récolte immédiate au Smpignon issus
              de la récolte immédiate au iteLes cha SiteLes champignons frais
              sont issus de la récolte immédiate au Site
            </p>
          </div>
          <div>{data.step}</div>
          <div className="flex flex-col w-full italic">
            <h3>01 - 05 - 2024</h3>
            <h5>JANUARY</h5>
          </div>
        </>
      )}
    </div>
  );
}
