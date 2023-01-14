import React, { useRef, useState } from "react";
import MainSearchBarSm from "../main/mainSearchBarSm";
import { IoLocationOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { useAppSelector } from "../../redux/hooks";
import WeatherIcons from "../icons/weatherIcons";

type Props = {};

export default function MainWeatherInfoSm({}: Props) {
  const { mounths } = useAppSelector(state=>state.apiResoponse)
  const { loading } = useAppSelector((state) => state.global);
  const ref = useRef();
  const [searchBar, setSearchBar] = useState(false);
  const { weather, activeCity, weatherDecoder } = useAppSelector(
    (state) => state.apiResoponse
  );
  const date = new Date();
  const dates = {
    day: date.getDate(),
    mounth: date.getMonth(),
    hour: date.getHours(),
    year: date.getFullYear(),
    minuts: date.getMinutes(),
  };
  

  return (
    <div
      className="bg-[url('https://img.freepik.com/free-photo/sky-full-stars-silhouettes-trees_181624-12446.jpg?w=1060&t=st=1673201427~exp=1673202027~hmac=f51b4cbc2388f7fe109123420060a93f8ac17922a1f4021967e9f402500499c2')]
      rounded-3xl bg-center mx-2 lg:mx-0 mt-4 lg:mt-0 lg:col-span-4 col-span-12"
    >
      <div className="backdrop-blur-md p-4 rounded-3xl relative overflow-hidden h-full">
        <MainSearchBarSm />
        <div className="px-10 mt-4">
          <i className="text-9xl mx-2 block">
            <WeatherIcons
              code={weather?.current_weather.weathercode as number}
            />
          </i>

          <h1 className="text-7xl">
            {weather?.current_weather.temperature}
            <sup>
              <sup>o</sup>c
            </sup>
          </h1>
          <div className="flex justify-start gap-4 mt-8 items-center font-thin border-b pt-4 pb-6 border-b-neutral-500">
            <i className="text-3xl">
              <WeatherIcons code={weather?.current_weather.weathercode as number} />
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
              {dates.day} {mounths[dates.mounth]}, {dates.year}{" "}
              <span className="font-semibold">
                {dates.hour > 12 ? dates.hour - 12 : dates.hour}:
                {dates.minuts < 10 ? "0" + dates.minuts : dates.minuts}{" "}
                {dates.hour > 12 ? "PM" : "AM"}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
