import React from "react";
import WeatherIcons from "../icons/weatherIcons";

type Props = {
  weatherCode: number;
  highestTempature: number;
  LowestTempature: number;
  day: number;
  mounth: string;
  weekDay: string;
};

export default function ForcastBox({
  weatherCode,
  LowestTempature,
  highestTempature,
  day,
  mounth,
  weekDay,
}: Props) {
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
      <div className="text-neutral-content lg:hidden xl:block">{day} {mounth}</div>
      <h1 className="text-neutral-content">{weekDay}</h1>
    </div>
  );
}
