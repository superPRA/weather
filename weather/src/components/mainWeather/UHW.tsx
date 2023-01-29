import React from "react";
import { WiDaySunny, WiHumidity, WiStrongWind } from "react-icons/wi";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

export default function UHW({}: Props) {
  const { weather, airPlution } = useAppSelector((state) => state.apiResoponse);
  return (
    <div className="px-12 my-8">
      <div className="grid md:grid-cols-3 grid-cols-1 rounded-2xl w-full bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-40 py-4 px-4 md:px-0 text-center text-white">
        <div className="col-span-1 md:border-r border-white border-b md:border-b-0 py-2">
          <WiDaySunny className="mx-auto text-9xl " />
          <h6 className="text-4xl">UI index</h6>
          <h6 className="text-2xl text-zinc-300 mt-2">
            {(airPlution?.hourly.uv_index[0] as number) < 4
              ? "Low"
              : (airPlution?.hourly.uv_index[0] as number) < 8
              ? "Normal"
              : "High"}
          </h6>
        </div>
        <div className="col-span-1 py-2">
          <WiHumidity className="mx-auto text-9xl " />
          <h6 className="text-4xl">Humidity</h6>
          <h6 className="text-2xl text-zinc-300 mt-2">{weather?.hourly.relativehumidity_2m[0]}%</h6>
        </div>
        <div className="col-span-1 md:border-l border-t md:border-t-0 border-white py-2">
          <WiStrongWind className="mx-auto text-9xl " />
          <h6 className="text-4xl">Wind</h6>
          <h6 className="text-2xl text-zinc-300 mt-2">{weather?.current_weather.windspeed}km/h</h6>
        </div>
      </div>
    </div>
  );
}
