import React from "react";
import SunChart from "../charts/SunChart";

type Props = {};

export default function SunriseAndSunset({}: Props) {
  return <div className="bg-black bg-opacity-40 flex-[3] rounded-xl">
    <h1>sunrise and sun</h1>
    <SunChart />
  </div>;
}
