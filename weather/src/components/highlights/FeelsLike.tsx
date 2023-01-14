import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { BsThermometerLow } from "react-icons/bs";

type Props = {};

export default function FeelsLike({}: Props) {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  return (
    <div className="bg-black bg-opacity-40 rounded-xl mt-4 flex-1 px-4 lg:px-2 py-2 text-neutral-300">
      <h1 className="font-thin px-1">Feels Like</h1>
      <div className="flex items-end px-0 lg:px-0 mt-4">
        <h1 className="text-6xl lg:text-unit mt-3 flex-1">
          {weather?.hourly.apparent_temperature[0]}
          
        </h1>

        <div className="text-2xl flex-1">
          <h1 className="font-thin text-sm">
            humidity is making it hotter today
          </h1>
        </div>
      </div>
    </div>
  );
}
