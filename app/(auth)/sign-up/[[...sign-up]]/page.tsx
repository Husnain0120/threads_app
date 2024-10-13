import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" flex mt-[100px]  items-center justify-center h-full">
      <SignUp signInForceRedirectUrl="/onboarding" />;
    </div>
  );
}
