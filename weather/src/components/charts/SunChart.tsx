import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import { MdOutlineWbSunny } from "react-icons/md";
import WeatherIcons from "../icons/weatherIcons";
import uuid from "react-uuid";
import { useAppSelector } from "../../redux/hooks";
import { daily, weather } from "../../types/apiTypes";

type Props = {};

export default function SunChart({}: Props) {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  if (weather) {
    const { sunrise, sunset } = weather.daily;
    const sunriseTime = new Date(sunrise[0]).getTime();
    const sunsetTime = new Date(sunset[0]).getTime();
    const dayLengthTime = sunsetTime - sunriseTime;
    const dayLengthHoure = new Date(dayLengthTime).getHours()
    const dayLengthMinut = new Date(dayLengthTime).getMinutes()
    const dayLengthSecond = new Date(dayLengthTime).getSeconds()


    const data = [
      { name: "sun", value: 13 },
      { name: "moon", value: 11 },
    ];
    return (
      <div className="pt-4 w-full h-28">
        <ResponsiveContainer className=" flex justify-start">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              startAngle={180}
              endAngle={0}
              fill="#fff"
              outerRadius={75}
              innerRadius={50}
              cy="100%"
              stroke="0"
              paddingAngle={10}
              label
            >
              {data.map((item, index) => {
                return (
                  <Cell
                    key={uuid()}
                    fill={item.name === "sun" ? "#ff2" : "#fff"}
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {dayLengthHoure}:{dayLengthMinut}:{dayLengthSecond}
      </div>
    );
  }
  return <div></div>;
}
