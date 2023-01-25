import React from "react";
import useSunInfo from "../../hooks/dataAnalysis/useSunInfo";

type Props = {};

export default function Test({}: Props) {
  const {
    dayLength,
    now,
    dayRate,
    sunriseTime,
    sunsetTime,
    isDay,
    left,
    nightRate,
    nightLength,
  } = useSunInfo();
  return (
    <div className="h-screen p-10">
      <div>
        now = {now.hour}:{now.minute}
        <br />
        sunrise = {sunriseTime.toISO()}
        <br />
        sunsetTime = {sunsetTime.hour}:{sunsetTime.minute}
      </div>
      <div>dayRate = (now - sunrise) / (dayLength)</div>
      <div className="">
        {dayRate} = ({now.toISO()} - {sunriseTime.toISO()}) / (
        {dayLength.toMillis()})
      </div>
      <div>
        {"now < 24"}
        <br />
        nightRate = (now - sunset) / (24h - dayLength)
      </div>
      <div>{nightRate} = ()/()</div>
      <div>
        nightLength = {nightLength.toISO()}
        <br />
        dayLength = {dayLength.toISO()}
      </div>
    </div>
  );
}
