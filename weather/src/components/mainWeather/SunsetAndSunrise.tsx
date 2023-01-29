import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { DateTime } from "luxon";
import { WiSunrise, WiSunset } from "react-icons/wi";

type Props = {};

export default function SunsetAndSunrise({}: Props) {
    const { weather } = useAppSelector(state=>state.apiResoponse)
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 px-12">
      <div className="col-span-1 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 rounded-2xl flex justify-center items-center text-center px-5">
        <h2 className="text-2xl font-bold">Sunrise :</h2>
        <h1 className="text-2xl px-1 mx-4">
          {DateTime.fromISO(weather?.daily.sunrise[0] as string).hour < 10
            ? "0"
            : ""}
          {DateTime.fromISO(weather?.daily.sunrise[0] as string).hour}:
          {DateTime.fromISO(weather?.daily.sunrise[0] as string).minute < 10
            ? "0"
            : ""}
          {DateTime.fromISO(weather?.daily.sunrise[0] as string).minute}
        </h1>
        <WiSunrise className="text-9xl ml-auto" />
      </div>
      <div className="col-span-1 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 rounded-2xl flex justify-center items-center text-center px-5">
        <h2 className="text-2xl font-bold">Sunset :</h2>
        <h1 className="text-2xl px-1 mx-4">
          {DateTime.fromISO(weather?.daily.sunset[0] as string).hour < 10
            ? "0"
            : ""}
          {DateTime.fromISO(weather?.daily.sunset[0] as string).hour}:
          {DateTime.fromISO(weather?.daily.sunset[0] as string).minute < 10
            ? "0"
            : ""}
          {DateTime.fromISO(weather?.daily.sunset[0] as string).minute}
        </h1>
        <WiSunset className="text-9xl ml-auto" />
      </div>
    </div>
  );
}
