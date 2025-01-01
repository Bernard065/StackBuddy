import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const SocialAuthForm = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className="auth-button">
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="github"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Sign In with GitHub</span>
      </Button>
      <Button className="auth-button">
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
