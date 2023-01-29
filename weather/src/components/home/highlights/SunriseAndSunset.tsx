import React from "react";
import SunChart from "../charts/SunChart";
import SunChart2 from "../charts/SunChart2";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { useAppSelector } from "../../../redux/hooks";
import { DateTime } from "luxon";

type Props = {};

export default function SunriseAndSunset({}: Props) {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const sunriseDate = DateTime.fromISO(weather?.daily.sunrise[0] as string);
  const sunsetDate = DateTime.fromISO(weather?.daily.sunset[0] as string);
  return (
    <div className="dark:bg-black bg-neutral dark:bg-opacity-40 bg-opacity-40 flex-[3] rounded-xl p-4">
      <h1>sunrise and sun</h1>
      <SunChart2 />
      <div className="flex justify-between mx-4 mt-2">
        <div>
          <FiSunrise className="text-3xl" />
          <h6 className="text-yellow-400">sunrise</h6>
          <h4>
            {sunriseDate.hour < 12 ? sunriseDate.hour : sunriseDate.hour - 12}:
            {sunriseDate.minute} {sunriseDate.hour < 12 ? "AM" : "PM"}
          </h4>
        </div>
        <div className="text-end">
          <FiSunset className="text-3xl ml-auto" />
          <h6 className="text-yellow-400">sunset</h6>
          <h4>
            {sunsetDate.hour < 12 ? sunsetDate.hour : sunsetDate.hour - 12}:
            {sunsetDate.minute} {sunsetDate.hour < 12 ? "AM" : "PM"}
          </h4>
        </div>
      </div>
    </div>
  );
}
