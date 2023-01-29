import React from "react";

type Props = {};

export default function CommingSoon({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center text-7xl">
      Comming Soon
      <span className="animate-bounce" style={{animationDelay: "0s"}}>.</span>
      <span className="animate-bounce" style={{animationDelay: "0.1s"}}>.</span>
      <span className="animate-bounce" style={{animationDelay: "0.2s"}}>.</span>
    </div>
  );
}
