import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import useAxios from "./useAxios";
import { weather } from "../../types/apiTypes";
import { setWeather } from "../../redux/API/APIResponses";

export default function useGetWeather() {
  const { activeCity, weather, options } = useAppSelector(
    (state) => state.apiResoponse
  );
  const dispatch = useAppDispatch();
  const { latitude, longitude } = activeCity;
  const { hourOptions, current_weather, timezone, dailyOptions } =
    options.weather;

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", latitude.toString());
  url.searchParams.set("longitude", longitude.toString());
  url.searchParams.set("hourly", hourOptions.join(","));
  url.searchParams.set("current_weather", current_weather.toString());
  url.searchParams.set("timezone", timezone);
  url.searchParams.set("daily", dailyOptions.join(","));
  const {error,loading,response } = useAxios({ method: "get", url: url.toString() });
  dispatch(setWeather(response as weather)) 
  return loading;
}
