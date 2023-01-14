import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { BiDroplet } from "react-icons/bi";

type Props = {};

export default function Humidity({}: Props) {
  const { loading } = useAppSelector((state) => state.global);
  const { weather } = useAppSelector((state) => state.apiResoponse);
  
  return (
    <div className="bg-black bg-opacity-40 rounded-xl mt-4 flex-1 px-4 lg:px-2 py-2 text-neutral-300">
      <h1 className="font-thin px-1">Humidity</h1>
      <div className="flex px-0 lg:px-0 mt-4">
        <h1 className="text-6xl lg:text-unit mt-3 flex-1">
          {weather?.hourly.relativehumidity_2m[0]}
          <span className="text-base">%</span>
        </h1>

        <div className="text-2xl flex-1">
          <BiDroplet />
          <h1 className="font-thin text-sm">
            the dew point is 27<sup className="text-[10px]">o</sup> right now
          </h1>
        </div>
      </div>
    </div>
  );
}
