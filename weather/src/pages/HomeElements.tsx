import React from "react";
import MainWeatherInfo from "../components/home/miniPages/MainWeatherInfoSm";
import HighlightsSm from "../components/home/miniPages/highlightsSm";
import ForcastSm from "../components/home/miniPages/ForcastSm";
import Mainmap from "../components/home/miniPages/MainmapSm";

type Props = {};

export default function HomeElements({}: Props) {
  return (
    <div className="grid grid-cols-12 gap-6 py-4">
      <MainWeatherInfo />
      <HighlightsSm />
      <ForcastSm />
      <Mainmap />
    </div>
  );
}
