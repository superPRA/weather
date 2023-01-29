import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useAppSelector } from "../../../redux/hooks";

type Props = {};

export default function BarWindChart({}: Props) {
  const lngh = 24;
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const WindChart = new Array(lngh).fill(1).map((item, index) => {
    return {
      y: weather?.hourly.windspeed_80m[index],
    };
  });
  return (
    <ResponsiveContainer height={60}>
      <BarChart data={WindChart}>
        <Bar dataKey="y" fill="white" barSize={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}
