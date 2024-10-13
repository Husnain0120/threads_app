"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center mt-[100px] justify-center h-full">
      <SignIn signUpForceRedirectUrl="/onboarding" />
    </div>
  );
}
