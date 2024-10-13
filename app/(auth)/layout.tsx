import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: " A next.js 14 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <ClerkLoading>
            /* From Uiverse.io by yohohopizza */
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </ClerkLoading>
          <ClerkLoaded> {children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
