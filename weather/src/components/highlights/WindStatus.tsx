import React from "react";
import LineWindChart from "../charts/LineWindChart";
import BarWindChart from "../charts/BarWindChart";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

export default function WindStatus({}: Props) {
  

  const date = new Date();
  const { weather } = useAppSelector((state) => state.apiResoponse);
  
  return (
    <div className="bg-black bg-opacity-40 rounded-xl flex-[3] py-2 px-4 text-neutral-300">
      <h1 className="font-thin">Wind Status</h1>
      <LineWindChart />
      <BarWindChart />
      <div className="flex justify-between items-baseline mt-4">
        <h1 className="text-5xl">
          {weather?.hourly.windspeed_80m[0]}
          <span className="text-neutral-300 text-base">km/h</span>
        </h1>
        <h1>
          {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:
          {date.getMinutes()} {date.getHours() > 12 ? "AM" : "PM"}
        </h1>
      </div>
    </div>
  );
}
