import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { MdOutlineWbSunny } from "react-icons/md"

type Props = {};
const data = [{ title: "a", x: 20 }];

export default function SunChart({}: Props) {
  return (
    <div className="pt-4">
      <div className="w-40 h-40 border border-dashed border-b-transparent border-r-transparent mx-auto rounded-full rotate-45 relative" >
        <MdOutlineWbSunny className="absolute top-1/2 left-1/2" />
      </div>
    </div>
  );
}
