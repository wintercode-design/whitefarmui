import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/queryProvider";
import { AppProvider } from "@/providers/appContext";
import NavBar from "@/components/global/nav";
import FooterBar from "@/components/global/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gic Ubuntu",
  description: "Champignons frais ou séchés, qualité garantie ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <AppProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <NavBar />
            {children}
            <FooterBar />
          </body>
        </AppProvider>
      </QueryProvider>
    </html>
  );
}
