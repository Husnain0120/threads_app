"use client";
import { sidebarLinks } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

const Leftsidebar = () => {
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar ">
      <div className=" flex w-full flex-1 flex-col gap-6 px-6 ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image src={link.imgURL} alt="icon" width={24} height={24} />

              <p className=" text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="'mt-10 px-6 ">
        <SignedIn>
          <SignOutButton redirectUrl="/sign-in">
            <div className=" gap-4 p-4  flex cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p className=" text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default Leftsidebar;
