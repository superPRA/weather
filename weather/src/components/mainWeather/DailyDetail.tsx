import { DateTime } from "luxon";
import React from "react";
import {
  WiDaySunny,
  WiMoonAltFirstQuarter,
  WiMoonAltFull,
  WiMoonFull,
  WiMoonNew,
  WiMoonWaningCrescent3,
  WiRaindrop,
} from "react-icons/wi";
import { useAppSelector } from "../../redux/hooks";
import WeatherIcons from "../icons/weatherIcons";
import uuid from "react-uuid";

type Props = {};

export default function DailyDetail({}: Props) {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const array = new Array(7).fill(1);
  const getHumidity: any = (index: number) => {
    const array = new Array(24).fill(1);
    const humidityArray = array.map((item, i) => {
      return weather?.hourly.relativehumidity_2m[i + index * 24];
    });
    const humiditySum = humidityArray.reduce((prevVal, curentVal) => {
      return (prevVal as number) + (curentVal as number);
    }, 0);
    const averageHumidity = (humiditySum as number) / 24;
    return Math.floor(averageHumidity);
  };
  const date = DateTime.now();
  return (
    <div className="bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 rounded-2xl my-8 ">
      <div className="flex mx-2 px-8">
        <table className="w-full">
          <tbody>
            <tr className="h-12">
              <td>yesterday</td>
              <td></td>
              <td></td>
              <td></td>
              <td>3</td>
              <td>5</td>
            </tr>
            {array.map((item, index) => {
              return (
                <tr className="h-12" key={uuid()}>
                  <td>{date.plus({ day: index }).weekdayLong}</td>
                  <td>
                    <WiRaindrop />
                  </td>
                  <td>{getHumidity(index)}%</td>
                  <td className="text-3xl">
                    <WeatherIcons
                      code={weather?.daily.weathercode[index] as number}
                    />
                  </td>
                  <td>{weather?.daily.apparent_temperature_min[index]}</td>
                  <td>{weather?.daily.apparent_temperature_max[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
