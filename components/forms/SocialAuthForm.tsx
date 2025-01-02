"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.error(error);

      // Show error message
      toast({
        title: "Sign In Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while signing in.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className="auth-button" onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="github"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Sign In with GitHub</span>
      </Button>
      <Button className="auth-button" onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="google"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Sign In with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
