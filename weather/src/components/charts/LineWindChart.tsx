import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

export default function LineWindChart({}: Props) {
  const lngh = 12;
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const WindChart = new Array(lngh).fill(1).map((item, index) => {
    return {
      y: weather?.hourly.windspeed_80m[index],
    };
  });
  return (
    <ResponsiveContainer height={60} >
      <LineChart data={WindChart}>
        <Line
          type="monotone"
          dataKey="y"
          stroke="#ffffff"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
