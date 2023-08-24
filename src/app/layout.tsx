"use client";

import ProfileSection from "@/components/ProfileSection";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { RecoilRoot } from "recoil";
import MaterialSection from "@/components/MaterialSection";
import InventorySynchronizer from "@/components/InventorySynchronizer";
import craftingPic from "./img/Crafting.png";
import gatheringPic from "./img/Gathering.png";
import vaultingPic from "./img/Vaulting.png";
import homePic from "./img/Home.png";
import titlePic from "./img/Idle Hunters 3.png";
import marketPic from "./img/Market.png";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// import { hydrateRoot } from 'react-dom/client';
// hydrateRoot(document, <html />);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageHeight = 50;

  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <InventorySynchronizer />
          <div>
            <h1><Image src={titlePic} alt="" height={100}/></h1>

            <Link className="nav" href="/">
              <Image src={homePic} alt="Home" height={imageHeight} />
            </Link>
            <Link className="nav" href="/world/crafting">
              <Image src={craftingPic} alt="Crafting" height={imageHeight} />
            </Link>
            <Link className="nav" href="/world/gathering">
              <Image src={gatheringPic} alt="Gathering" height={imageHeight} />
            </Link>
            <Link className="nav" href="/world/vaulting">
              <Image src={vaultingPic} alt="Vaulting" height={imageHeight} />
            </Link>
            <Link className="nav" href="/world/market">
              <Image src={marketPic} alt="Market" height={imageHeight} />
            </Link>
            <br />
            <br />
            <MaterialSection />
          </div>

          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
