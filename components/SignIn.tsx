import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-lightColor hover:cursor-pointer hover:text-darkColor hoverEffect">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
