import React from "react";

type Props = {};

export default function CommingSoon({}: Props) {
  return (
    <div className="md:h-screen h-[calc(100vh-4.5rem)] flex justify-center items-center md:text-7xl text-4xl">
      Comming Soon
      <span className="animate-bounce" style={{animationDelay: "0s"}}>.</span>
      <span className="animate-bounce" style={{animationDelay: "0.1s"}}>.</span>
      <span className="animate-bounce" style={{animationDelay: "0.2s"}}>.</span>
    </div>
  );
}
