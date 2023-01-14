import React from "react";
import WeatherIcons from "../icons/weatherIcons";
import { LineChart, ResponsiveContainer, Line } from "recharts";

import { useAppSelector } from "../../redux/hooks";



export default function ForcastFooter() {
  const { weather, weatherDecoder } = useAppSelector(
    (state) => state.apiResoponse
  );

  const TempChart = [0,3, 6,9, 12,15, 18,21, 24].map((item, index) => {
    return {
      y: weather?.hourly.apparent_temperature[item + 24],
    };
  });
  return (
    <div className="sticky bottom-1 left-0 w-full">
      <div className=" GRAIDIENT  rounded-3xl flex items-center justify-between pr-4">
        <div className="flex items-center">
          <i className="text-8xl ">
            <WeatherIcons code={weather?.daily.weathercode[1] as number} />
          </i>
          <div className="text-sm font-thin">
            <h3>Tomorrow</h3>
            <h3 className="text-4xl font-semibold">
              {weather?.hourly.apparent_temperature[24]}
              <sup>o</sup>
            </h3>
            <h3 className="text-ellipsis whitespace-nowrap">{weatherDecoder[weather?.daily.weathercode[1] as number]}</h3>
          </div>
        </div>
        <div className="w-1/3">
          <ResponsiveContainer height={100} width="100%">
            <LineChart data={TempChart}>
              <Line
                type="monotone"
                dataKey="y"
                stroke="#ffffff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
