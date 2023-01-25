import { useState } from "react";
import ForcastNav from "../forcast/forcastNav";
import ForcastFooter from "../forcast/forcastFooter";
import ForcastBox from "../forcast/forcastBox";
import uuid from "react-uuid";
import { useAppSelector } from "../../redux/hooks";
import { DateTime } from "luxon";

type Props = {};

export default function ForcastSm({}: Props) {
  const [timePeriod, setTimePeriod] = useState<"day" | "week">("week");
  const { weather, mounths, weeks } = useAppSelector(
    (state) => state.apiResoponse
  );
  const weekElements = new Array(7).fill(1).map((item, index) => {
    return (
      <ForcastBox
        key={uuid()}
        LowestTempature={
          weather?.daily.apparent_temperature_min[index] as number
        }
        day={parseInt(weather?.daily.time[index].slice(8, 10) as string)}
        highestTempature={
          weather?.daily.apparent_temperature_max[index] as number
        }
        mounth={
          mounths[parseInt(weather?.daily.time[index].slice(5, 7) as string)]
        }
        weatherCode={weather?.daily.weathercode[index] as number}
        weekDay={weeks[new Date(weather?.daily.time[index] as string).getDay()]}
        mode={"week"}
      />
    );
  });
  const dayElement = new Array(24).fill(1).map((item, index) => {
    const now = DateTime.now().plus({ hour: index }).hour;
    return (
      <ForcastBox
        key={uuid()}
        weatherCode={weather?.current_weather.weathercode as number}
        tempature={weather?.hourly.apparent_temperature[index] as number}
        hour={now}
        time={
          now >= DateTime.fromISO(weather?.daily.sunrise[0] as string).hour &&
          now < 12
            ? "morning"
            : now >= 12 &&
              now < DateTime.fromISO(weather?.daily.sunset[0] as string).hour
            ? "midday"
            : now >=
                DateTime.fromISO(weather?.daily.sunset[0] as string).hour &&
              now < 24
            ? "night"
            : now >= 0 &&
              now < DateTime.fromISO(weather?.daily.sunrise[0] as string).hour
            ? "midnight"
            : "midday"
        }
        mode={"day"}
      />
    );
  });
  return (
    <div className="lg:col-span-4 col-span-12">
      <ForcastNav timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      <div
        className="bg-[url('https://img.freepik.com/free-photo/sky-full-stars-silhouettes-trees_181624-12446.jpg?w=1060&t=st=1673201427~exp=1673202027~hmac=f51b4cbc2388f7fe109123420060a93f8ac17922a1f4021967e9f402500499c2')]
      rounded-3xl bg-center mx-2 lg:mx-0 mt-4 lg:col-span-4"
      >
        <div className="backdrop-blur-md p-4 rounded-3xl relative overflow-y-scroll overflow-x-hidden h-96 scrollNone">
          {timePeriod === "week" && weekElements}
          {timePeriod === "day" && dayElement}
          <ForcastFooter />
        </div>
      </div>
    </div>
  );
}
