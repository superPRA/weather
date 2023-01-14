import React from "react";
import WindStatus from "../highlights/WindStatus";
import Humidity from "../highlights/Humidity";
import UvindexSm from "../highlights/UvindexSm";
import Visibility from "../highlights/Visibility";
import FeelsLike from "../highlights/FeelsLike";
import SunriseAndSunset from "../highlights/SunriseAndSunset";

type Props = {};

export default function HighlightsSm({}: Props) {
  return (
    <div
      className="bg-[url('https://img.freepik.com/free-photo/sky-full-stars-silhouettes-trees_181624-12446.jpg?w=1060&t=st=1673201427~exp=1673202027~hmac=f51b4cbc2388f7fe109123420060a93f8ac17922a1f4021967e9f402500499c2')] 
    bg-white rounded-3xl mx-2 lg:mx-0  lg:col-span-8 col-span-12 lg:mt-0 mt-6"
    >
      <div className="backdrop-blur-md h-full rounded-3xl px-4 pt-6">
        <h1 className="text-neutral-300">Today's Highlight</h1>
        <div className=" pt-4 pb-10 flex gap-4 h-full md:flex-row flex-col">
          <div className=" flex flex-col flex-1 ">
            <WindStatus />
            <Humidity />
          </div>
          <div className=" flex flex-col flex-1">
            <UvindexSm />
            <Visibility />
          </div>
          <div className=" flex flex-col flex-1">
            <SunriseAndSunset />
            <FeelsLike />
          </div>
        </div>
      </div>
    </div>
  );
}
