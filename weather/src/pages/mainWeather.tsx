import { DateTime } from "luxon";
import MainWeatherInfoHeader from "../components/mainWeather/MainWeatherInfoHeader";
import { useAppSelector } from "../redux/hooks";
import WeatherIcons from "../components/icons/weatherIcons";
import { LineChart, ResponsiveContainer, Line } from "recharts";
import { hourly } from "../types/apiTypes";
import { WiDegrees, WiRaindrop, WiSunrise, WiSunset } from "react-icons/wi";
import HourlyDetail from "../components/mainWeather/HourlyDetail";
import DailyDetail from "../components/mainWeather/DailyDetail";
import TodayAndTomorrow from "../components/mainWeather/TodayAndTomorrow";
import SunsetAndSunrise from "../components/mainWeather/SunsetAndSunrise";
import UHW from "../components/mainWeather/UHW";
import Headlines from "../components/mainWeather/Headlines";
type Props = {};

export default function MainWeather({}: Props) {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  return (
    <div className="py-4">
      <div className="BOX ">
        <div className="py-4 ">
          <MainWeatherInfoHeader />
          <main>
            <HourlyDetail />
            <TodayAndTomorrow />
            <DailyDetail />
            <SunsetAndSunrise />
            <UHW />
            <Headlines />
          </main>
        </div>
      </div>
    </div>
  );
}
