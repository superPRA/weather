import React from "react";
import PieUvBar from "../charts/PieUvBar";
import { useAppSelector } from "../../../redux/hooks";

type Props = {};

export default function UvindexSm({}: Props) {
  const uv = useAppSelector(
    (state) => state.apiResoponse.airPlution?.hourly.uv_index_clear_sky[0]
  );
  return (
    <div className="dark:bg-black bg-neutral dark:bg-opacity-40 bg-opacity-40 rounded-xl flex-[3] py-2 px-4  text-neutral-300 ">
      <h1 className="font-thin">UI index</h1>
      <div className="w-full h-28 flex justify-start pt-4">
        <PieUvBar />
      </div>
      <h1 className="text-center text-5xl mt-5">
        {uv}
        <span className="text-base font-thin">uv</span>
      </h1>
    </div>
  );
}
