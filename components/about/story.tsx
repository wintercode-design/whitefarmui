import React from "react";

export default function Story() {
  return (
    <section className="flex flex-col lg:flex-row lg:h-fit">
      <img
        src="/about1.jpeg"
        alt=""
        className="w-full max-h-[700px] object-cover hidden lg:block"
      />
      <div className="flex flex-col w-full max-w-7xl mx-auto gap-8 p-8 bg-[#0F6935] text-white">
        <header className="flex justify-between items-end">
          <div className="flex flex-col gap-2 justify-start max-w-xl">
            <h4 className="border-b w-[200px]">Qui Nous Sommes</h4>
            <h3 className=" uppercase font-bold">
              un petit resumer de gic ubuntu
            </h3>
          </div>
        </header>
        <p>
          Notre entreprise est spécialisée dans la production et la
          commercialisation de champignons frais de haute qualité. Grâce à un
          savoir-faire maîtrisé et à une culture rigoureusement contrôlée, nous
          proposons des champignons issus d’une récolte quotidienne directement
          sur notre site de production. Chaque jour, nos équipes veillent à
          offrir des produits frais, naturels et riches en saveurs, répondant
          aux exigences des consommateurs particuliers comme des professionnels
          de la restauration. Engagés dans une démarche de qualité, nous
          privilégions des méthodes de culture saines et respectueuses de
          l’environnement, garantissant des champignons nutritifs, savoureux et
          parfaitement adaptés à une alimentation équilibrée. Notre objectif est
          d’apporter sur le marché local un produit frais, sain et accessible,
          tout en soutenant le développement de la filière champignonnicole dans
          notre région.
        </p>
      </div>
      <img
        src="/about2.jpeg"
        alt=""
        className="w-full max-h-[700px] object-cover h-[150px] md:h-full"
      />
    </section>
  );
}
