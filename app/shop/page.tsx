"use client";
import PageTitle from "@/components/global/pageTitle";
import ShopPage from "@/components/shop/shopPage";
import { HeroSkeleton, Skeleton } from "@/components/skeleton";
import { useAppContext } from "@/providers/appContext";
import ProductQuery from "@/queries/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page() {
  const { baseURL } = useAppContext();
  const productQuery = new ProductQuery();
  const products = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => productQuery.getAll(),
  });

  console.log(products.data);

  if (products.isLoading) {
    return <HeroSkeleton />;
  }

  if (products.isError) {
    return <HeroSkeleton />;
  }
  if (products.data)
    return (
      <div>
        {/* Page title */}
        <PageTitle
          img="/boutique/boutique.jpeg"
          title="Boutique"
          subs="passer vos commande"
        />
        <ShopPage products={products.data} />
      </div>
    );
}
