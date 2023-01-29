import React from "react";
import { BsChevronDown } from "react-icons/bs";
import MainMapNav from "../mainMap/MainMapNav";
import MainMap from "../map/mainMap";

type Props = {};

export default function MainmapSm({}: Props) {
  return (
    <div className="lg:col-span-8 col-span-12 drop-shadow-2xl">
      <MainMapNav />
      <div className="rounded-3xl bg-black mt-4">
        <MainMap />
      </div>
    </div>
  );
}
