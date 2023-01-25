import axios from "axios";
import { useEffect, useState } from "react";
import cities from "cities.json";
import { useAppSelector } from "../../redux/hooks";

type props = {};

export default function useGetWeatherConditionMap() {
  const {activeCity} = useAppSelector(state=>state.apiResoponse)
  const [response, setResponse] = useState<
    { latitude: number; longitude: number; weatherCode: number }[]
  >([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("current_weather", "true")
  useEffect(() => {
    (
      cities as { country: string; name: string; lat: string; lng: string }[]
    ).map((item) => {
      if(item.country === activeCity.country_code.toUpperCase()){
        url.searchParams.set("latitude", item.lat)
        url.searchParams.set("longitude", item.lng)
        axios.get(url.href).then(res=> setResponse(oldLst=>[...oldLst, {latitude: res.data.latitude, longitude:res.data.longitude, weatherCode: res.data.current_weather.weathercode}]))
      }
    });
  }, []);

  return {
    response,
    loading,
    error,
  };
}
