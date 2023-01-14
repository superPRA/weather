import axios from "axios";
import { useEffect, useState } from "react";

type props = {
  latitude: number;
  longitude: number;
  max_min: number;
  step: number;
};

export default function useGetWeatherConditionMap({
  latitude,
  longitude,
  max_min,
  step,
}: props) {
  const [response, setResponse] = useState<{latitude: number,longitude: number, weatherCode: number }[]>([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  useEffect(() => {
    for (let i = -max_min; i < max_min; i += step) {
      for (let j = -max_min * 2; j < max_min * 2; j += step * 2) {
        const lang = latitude + i
        const long = longitude + j
        url.searchParams.set("latitude", lang.toString());
        url.searchParams.set("longitude", long.toString());
        url.searchParams.set("current_weather", "true");
        axios
          .get(url.href)
          .then((res) => setResponse(oldLst=>[...oldLst, {latitude:lang,longitude:long, weatherCode:res.data.current_weather.weathercode }]));
      }
    }
    
  }, [latitude,longitude,max_min,step]);

  return {
    response,
    loading,
    error,
  };
}
