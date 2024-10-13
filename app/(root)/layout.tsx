import React from "react";

import "../globals.css";
import { Inter } from "next/font/google";
import Topbar from "@/components/shared/Topbar";

import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import Leftsidebar from "@/components/shared/Leftsidebar";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: " A next.js 14 Meta Threads Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <Topbar />
            <main className=" flex flex-row">
              <Leftsidebar />
              <section
                className="main-container
          "
              >
                <div className="w-full max-w-4xl">{children}</div>
              </section>
              <RightSidebar />
            </main>
            {/* {children} */}
            <Bottombar />
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
