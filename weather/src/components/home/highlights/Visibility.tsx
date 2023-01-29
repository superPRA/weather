import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { AiOutlineEye } from "react-icons/ai";

type Props = {};

export default function Visibility({}: Props) {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const a = (weather?.hourly.visibility[0] as number) / 1000;
  return (
    <div className="dark:bg-black bg-neutral dark:bg-opacity-40 bg-opacity-40 rounded-xl mt-4 flex-1  px-4 lg:px-2 py-2 text-neutral-300">
      <h1 className="font-thin px-1">Visibility</h1>
      <div className="flex  px-0 lg:px-0 mt-4">
        <h1 className="text-6xl lg:text-unit mt-3 flex-1">
          {((weather?.hourly.visibility[0] as number) / 1000).toFixed()}
          <span className="text-base">km</span>
        </h1>

        <div className="text-2xl flex-1">
          <AiOutlineEye />
          <h1 className="font-thin text-sm">Hase is effecting visibility</h1>
        </div>
      </div>
    </div>
  );
}
