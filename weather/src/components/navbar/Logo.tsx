import React from "react";
import { GiStaryu } from "react-icons/gi";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="lg:border-b lg:py-5 my-3 lg:my-0 text-center xl:border-b-neutral-600 lg:block flex items-center 
    gap-x-4 border-r pr-3 lg:pr-0 border-b-neutral-600 border-r-neutral-600 lg:border-r-0 lg:w-full">
      <GiStaryu className="lg:text-3xl text-5xl mx-auto text-indigo-600" />
      <h1 className="mt-0 lg:mt-2 font-thin">Weather</h1>
    </div>
  );
  }
