import React from "react";
import MainWeatherInfo from "../components/miniPages/MainWeatherInfoSm";
import HighlightsSm from "../components/miniPages/highlightsSm";
import ForcastSm from "../components/miniPages/ForcastSm";
import Mainmap from "../components/miniPages/MainmapSm";

type Props = {};

export default function HomeElements({}: Props) {
  return (
    <div className="grid grid-cols-12 gap-6 ">
      <MainWeatherInfo />
      <HighlightsSm />
      <ForcastSm />
      <Mainmap />
    </div>
  );
}
