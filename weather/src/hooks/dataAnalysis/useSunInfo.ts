import { DateTime, Duration } from "luxon";
import { useAppSelector } from "../../redux/hooks";
import { useState, useEffect } from "react";
import { daily, weather } from "../../types/apiTypes";

export default function useSunInfo() {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const sunrise = weather?.daily.sunrise ?? "";
  const sunset = weather?.daily.sunset ?? "";
  const sunriseTime = DateTime.fromISO(sunrise[0]);
  const sunsetTime = DateTime.fromISO(sunset[0]);
  const dayLength = DateTime.fromMillis(
    sunsetTime.toMillis() - sunriseTime.toMillis()
  );
  const nightLength = DateTime.fromMillis(
    24 * 60 * 60 * 1000 - dayLength.toMillis()
  );
  const now = DateTime.now().day === sunriseTime.day?DateTime.now():DateTime.now().plus({day:1});
  // const now = DateTime.fromObject({ hour: 12, minute: 39 });
  const isDay = now.hour > 6 && now.hour < 16 ? true : false;
  const dayRate =
    (now.toMillis() - sunriseTime.toMillis()) / (dayLength.toMillis());
  const nightRate =
    now.hour > sunsetTime.hour
      ? (now.toMillis() - sunsetTime.toMillis()) / nightLength.toMillis()
      : (nightLength.toMillis() - (sunriseTime.toMillis() - now.toMillis())) /
        nightLength.toMillis();
  const R = 79;
  const begin = {bottom:"-12px", left:"-12px"}
  const end = {bottom:"-12px", left:"146px"}
  const center = {bottom:"67px", left:"67px"}
  const left = isDay? (dayRate * R*2) : (nightRate * R * 2)
  const bottom = Math.sqrt( R**2 - (left - R)**2)
  return {
    isDay,
    bottom: `${bottom - 12}px`,
    left: `${left - 12}px`,bottom1: bottom,
    dayRate,
    dayLength,
    sunriseTime,
    sunsetTime,
    now,
    nightRate,
    nightLength
  };
}
