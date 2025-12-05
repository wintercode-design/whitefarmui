import PageTitle from "@/components/global/pageTitle";
import Contact from "@/components/home/contact";
import React from "react";

export default function Page() {
  return (
    <main>
      <PageTitle
        img="/contact/contact.jpeg"
        title="Contact"
        subs="Contactez-nous pour plus d'information et commande"
      />
      <Contact />
    </main>
  );
}
