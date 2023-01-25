import React from "react";
import WeatherIcons from "../icons/weatherIcons";

type Props = {
  weatherCode: number;
  highestTempature?: number;
  LowestTempature?: number;
  tempature?: number
  day?: number;
  mounth?: string;
  weekDay?: string;
  mode: "day" | "week";
  hour?: string | number
  time?: "morning" | "night" | "midday" | "midnight"
};

export default function ForcastBox({
  weatherCode,
  LowestTempature,
  highestTempature,
  day,
  mounth,
  weekDay,
  mode,
  tempature,
  hour,
  time
}: Props) {
  if (mode === "week") {
    return (
      <div className="flex justify-between px-4 py-2 pl-0 items-center rounded-full shadow-inner">
        <div className="flex items-center">
          <i className="text-6xl ">
            <WeatherIcons code={weatherCode} />
          </i>
          <div className="flex text-3xl items-end justify-between">
            <h1>{highestTempature}</h1>/
            <h6 className="text-lg text-neutral-content">{LowestTempature}</h6>
          </div>
        </div>
        <div className="text-neutral-content lg:hidden xl:block">
          {day} {mounth}
        </div>
        <h1 className="text-neutral-content">{weekDay}</h1>
      </div>
    );
  }
  return (
    <div className="flex justify-between px-4 py-2 pl-0 items-center rounded-full shadow-inner">
        <div className="flex items-center">
          <i className="text-6xl ">
            <WeatherIcons code={weatherCode} />
          </i>
          <div className="text-4xl">
            <h1>{tempature}</h1>
          </div>
        </div>
        <div className="text-lg lg:hidden xl:block">
          {hour}:00
        </div>
        <h1 className="text-neutral-content">{time}</h1>
      </div>
  )
}
