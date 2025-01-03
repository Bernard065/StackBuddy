import Image from "next/image";
import React from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

interface AuthLayoutProps {
  children: React.ReactNode;
  variant: "signup" | "signin";
}

const AuthLayout = ({ children, variant }: AuthLayoutProps) => {
  const headingText = variant === "signup" ? "Create Your Account" : "Sign In";
  const paragraphText = "To continue to StackBuddy";
  return (
    <main className="flex min-h-screen items-center justify-center bg-light-auth bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-dark-auth">
      <section className="light-border background-light800_dark200 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2">
            <h1 className="h2-bold text-dark100_light900">{headingText}</h1>
            <p className="paragraph-regular text-dark500_light400">
              {paragraphText}
            </p>
          </div>
          <Image
            src="/icons/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className="object-contain"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
