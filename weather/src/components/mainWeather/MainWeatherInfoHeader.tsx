import React, { useRef, useState } from "react";
import MainSearchBarSm from "../home/main/mainSearchBarSm";
import { IoLocationOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { useAppSelector } from "../../redux/hooks";
import WeatherIcons from "../icons/weatherIcons";
import { DateTime } from "luxon";
import { WiDegrees } from "react-icons/wi";

type Props = {};

export default function MainWeatherInfoHeader({}: Props) {
  const { weather, activeCity,weatherDecoder,mounths } = useAppSelector((state) => state.apiResoponse);
  const date = DateTime.now();

  return (
    <header>
      <div className="grid md:grid-cols-2 pb-10 pt-6 grid-cols-1">
        <div className="col-span-1 md:border-r text-9xl px-20">
          <WeatherIcons code={weather?.current_weather.weathercode as number} />
          <div className="flex px-4 gap-8">
            <h1 className="relative text-8xl">
              {weather?.current_weather.temperature}
              <div className="absolute -top-4 -right-16 ">
                <WiDegrees className="text-8xl" />
              </div>
            </h1>
            <div className="flex text-2xl items-end gap-2 ">
              <h6 className="relative">
                {weather?.daily.apparent_temperature_max[0]}
                <div className="absolute -top-0 -right-4 ">
                  <WiDegrees />
                </div>
              </h6>
              /
              <h6 className="relative">
                {weather?.daily.apparent_temperature_min[0]}
                <div className="absolute -top-0 -right-4 ">
                  <WiDegrees />
                </div>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-span-1 px-20 md:px-10 self-end">
          <div className="flex justify-start gap-4 mt-8 items-center font-thin border-b pt-4 pb-6 border-b-neutral-500">
            <i className="text-3xl">
              <WeatherIcons
                code={weather?.current_weather.weathercode as number}
              />
            </i>
            <h1 className="text-lg">
              {weatherDecoder[weather?.current_weather.weathercode as number]}
            </h1>
          </div>
          <div className="flex items-center mt-6 font-thin gap-4">
            <IoLocationOutline />
            <h1>
              {activeCity.name}, {activeCity.country}
            </h1>
          </div>
          <div className="flex items-center mt-2 font-thin gap-4">
            <RxCalendar />
            <h1>
              {date.day} {mounths[date.month]}, {date.year}{" "}
              <span className="font-semibold">
                {date.hour > 12 ? date.hour - 12 : date.hour}:
                {date.minute < 10 ? "0" + date.minute : date.minute}{" "}
                {date.hour > 12 ? "PM" : "AM"}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
