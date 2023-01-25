import React, { useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { PieChart, ResponsiveContainer, Pie } from "recharts";
import { useAppSelector } from "../../redux/hooks";
import { weather } from "../../types/apiTypes";
import { DateTime } from "luxon";
import useSunInfo from "../../hooks/dataAnalysis/useSunInfo";
import { BsFillMoonStarsFill } from "react-icons/bs"



export default function SunChart2() {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const { bottom, left, isDay,bottom1 } = useSunInfo()

  
  return (
    <div className="w-full h-28 flex justify-start pt-6">
      <div className="h-20 w-40 border-dashed border rounded-tl-full rounded-tr-full border-b-0 mx-auto relative">
        <div className="absolute text-2xl text-yellow-300" style={{bottom, left}}>
          {isDay?<MdWbSunny />:<BsFillMoonStarsFill />}
        </div>
        <div className="absolute bg-yellow-300 h-1 w-3 -bottom-[2px] -left-[6px] rounded-sm"></div>
        <div className="absolute bg-yellow-300 h-1 w-3 -bottom-[2px] -right-[6px] rounded-sm"></div>
      </div>
    </div>
  );
}
