import React from "react";

export default function Story() {
  return (
    <section className="flex flex-col lg:flex-row lg:h-[500px]">
      <img
        src="/about1.jpeg"
        alt=""
        className="w-full object-cover hidden lg:block"
      />
      <div className="flex flex-col max-w-7xl mx-auto gap-8 p-8 bg-[#0F6935] text-white">
        <header className="flex justify-between items-end">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[200px]">Qui Nous Sommes</h4>
            <h3 className=" uppercase font-bold">
              un petit resumer de gic ubuntu
            </h3>
          </div>
        </header>
        <p>
          Les champignons frais sont issus de la récolte immédiate au SiteLes
          champignons frais sont issus de la récolte immédiate au SiteLes
          champignons frais sont issus de la récolte immédiate au SiteLes
          champignons frais sont issus de la récolte immédiate au SiteLes
          champignons frais sont issus de la récolte immédiate au Site
        </p>
      </div>
      <img
        src="/about2.jpeg"
        alt=""
        className="w-full object-cover h-[150px] md:h-full"
      />
    </section>
  );
}
