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
      className="BOX bg-white  mx-2 lg:mx-0  lg:col-span-8 col-span-12 lg:mt-0 mt-6 drop-shadow-2xl"
      style={{ backgroundSize: "100%" }}
    >
      <div className=" px-4 pt-6">
        <h1 className="text-neutral-300">Today's Highlight</h1>
        <div className=" pt-4 pb-10 flex gap-4 h-full md:flex-row flex-col">
          <div className=" flex flex-col basis-1/3 flex-1 ">
            <WindStatus />
            <Humidity />
          </div>
          <div className=" flex flex-col basis-1/3 flex-1">
            <UvindexSm />
            <Visibility />
          </div>
          <div className="flex flex-col basis-1/3 flex-1">
            <SunriseAndSunset />
            <FeelsLike />
          </div>
        </div>
      </div>
    </div>
  );
}
