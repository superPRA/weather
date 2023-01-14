export type result = {
  admin1: string;
  admin1_id: number;
  admin2: string;
  admin2_id: number;
  admin3: string;
  admin3_id: number;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  timezone: string;
  population: number;
};
export type activeCity = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  timezone: string;
  population: number;
  country_id: number;
  country: string;
  admin1: string;
};
export type currentWeather = {
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
};
export type hourly = {
  apparent_temperature: number[];
  time: string[];
  windspeed_80m: number[];
  dewpoint_2m: number[];
  relativehumidity_2m: number[];
  visibility: number[];
};
export type daily = {
  sunrise: string[];
  sunset: string[];
  time: string[];
  weathercode: number[]
  apparent_temperature_max: number[]
  apparent_temperature_min: number[]

};
export type weather = {
  current_weather: currentWeather;
  elevation: number;
  generationtime_ms: number;
  hourly: hourly;
  daily: daily;
  hourly_units: { time: string; temperature_2m: string };
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
};
export type airPlution = {
  generationtime_ms: number;
  hourly: {
    time: string[];
    uv_index: number;
    uv_index_clear_sky: number[]
  };
  hourly_units: { [index: string]: string };
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
};
export type results = result[];
export type cityApiResponce = {
  generationtime_ms: number;
  results: results | null;
};
