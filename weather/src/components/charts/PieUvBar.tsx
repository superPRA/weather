import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useAppSelector } from "../../redux/hooks";
import { airPlution } from "../../types/apiTypes";


const data = [{ title: "a", x: 20 }];

export default function PieUvBar() {
  const { airPlution } = useAppSelector(state=>state.apiResoponse)
  const maxUv = 12
  const uv = airPlution?.hourly.uv_index_clear_sky[0]
  const uvRate = uv as number / maxUv
  const endAngle = 180 - uvRate * 180 + 1
  return (
    <ResponsiveContainer className=" flex justify-start">
      <PieChart>
        
        <Pie
          data={data}
          dataKey="x"
          startAngle={180}
          endAngle={0}
          fill="#88888888"
          outerRadius={75}
          innerRadius={65}
          stroke="0"
          cy="100%"
        />
        <Pie
          data={data}
          dataKey="x"
          startAngle={180}
          endAngle={0}
          fill="#ffffff"
          outerRadius={70}
          innerRadius={70}
          cy="100%"
        />
        <Pie
          data={data}
          dataKey="x"
          startAngle={180}
          endAngle={endAngle}
          outerRadius={85}
          innerRadius={55}
          stroke="0"
          fill="#ffffff"
          cy="100%"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
