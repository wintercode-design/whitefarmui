// main/components/context/AppContext.tsx
"use client";
import React, { createContext, useContext } from "react";

const AppContext = createContext({ baseURL: "" });

export const AppProvider = ({
  baseURL,
  children,
}: {
  baseURL: string;
  children: React.ReactNode;
}) => {
  baseURL = baseURL ?? "https://gicubuntuapi.wintercodedesign.com";
  return (
    <AppContext.Provider value={{ baseURL }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const url = useContext(AppContext);
  if (!url) throw new Error("useAppContext must be used inside ApiUrlProvider");
  return url;
};
