import { AtSign } from "lucide-react";

type Props = {
  top?: string;
  title: string;
  subs: string;
  img?: string;
};

export default function PageTitle(data: Props) {
  return (
    <section
      className={`flex flex-col min-h-[40vh] bg-no-repeat bg-cover relative`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-2 border-r border-white justify-end p-8 text-white w-full md:w-[185px]">
          <AtSign />
          <div className="flex flex-col">
            <p>Contacter Nous</p>
            <p>+237696636639</p>
            <p>679683512</p>
            <strong>Cameroon</strong>
          </div>
        </div>
        <div className="text-[#ffffff] flex flex-col gap-4 flex-1 max-w-lg p-8 mt-[150px]">
          <h4>{data.top}</h4>
          <h1 className=" uppercase font-bold">{data.title}</h1>
          <h3>{data.subs}</h3>
        </div>
      </div>
    </section>
  );
}
