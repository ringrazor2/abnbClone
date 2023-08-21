"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import RegisterModal from "./components/modals/RegisterModal";

const font = Nunito({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Airbnb",
//   description: "AirbnbClone",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
