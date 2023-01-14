import React from "react";
import MainWeatherInfo from "./miniPages/MainWeatherInfoSm";
import HighlightsSm from "./miniPages/highlightsSm";
import ForcastSm from "./miniPages/ForcastSm";
import Mainmap from "./miniPages/MainmapSm";

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
