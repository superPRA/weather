import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { activeCity, airPlution } from "../../types/apiTypes";
import { weather } from "../../types/apiTypes";

interface initialState {
  activeCity: activeCity;
  weather: weather | null;
  weatherDecoder: { [index: number]: string };
  airPlution: null | airPlution;
  options: {
    weather: {
      hourOptions: string[];
      current_weather: boolean;
      timezone: string;
      dailyOptions: string[];
    };
    plution: {
      hourly: string[];
    };
  };
  mounths: string[];
  weeks: string[]
}

const initialState: initialState = {
  activeCity: {
    id: 112931,
    name: "Tehran",
    latitude: 35.6892523,
    longitude: 51.3896004,
    elevation: 1178.0,
    feature_code: "PPLC",
    country_code: "IR",
    admin1_id: 110791,
    timezone: "Asia/Tehran",
    population: 7153309,
    country_id: 130758,
    country: "Iran",
    admin1: "Tehran",
  },
  weather: null,
  weatherDecoder: {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog ",
    48: "depositing rime fog",
    51: "drizzle right intensity",
    53: "drizzle moderate intensity",
    55: "drizzle dense intensity",
    56: "freezing drizzle light intensity",
    57: "freezing drizzle dense intensity",
    61: "slight rain",
    63: "modarate rain",
    65: "heavy rain",
    66: "light freezing rain",
    67: "heavy freezing rain",
    71: "slight snow fall",
    73: "modarate snow fall",
    75: "heavy snow fall",
    77: "snow grains",
    80: "slight rain shower",
    81: "modarate rain shower",
    82: "heavy rain shower",
    85: "slight snow shower",
    86: "heavy snow shower",
  },
  airPlution: null,
  options: {
    weather: {
      hourOptions: [
        "relativehumidity_2m",
        "dewpoint_2m",
        "apparent_temperature",
        "visibility",
        "windspeed_80m",
      ],
      current_weather: true,
      timezone: "auto",
      dailyOptions: [
        "sunrise",
        "sunset",
        "weathercode",
        "apparent_temperature_max",
        "apparent_temperature_min",
      ],
    },
    plution: {
      hourly: ["uv_index", "uv_index_clear_sky"],
    },
  },
  mounths: [
    "January",
    "February",
    "March",
    " April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  weeks: ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

export const counterSlice = createSlice({
  name: "APIresponse",
  initialState,
  reducers: {
    changeActiveCity: (state, actions: PayloadAction<activeCity>) => {
      state.activeCity = actions.payload;
    },
    setWeather: (state, actions: PayloadAction<weather>) => {
      state.weather = actions.payload;
    },
    setAirPlution: (state, actions: PayloadAction<airPlution>) => {
      state.airPlution = actions.payload;
    },
  },
});

export const { changeActiveCity, setWeather, setAirPlution } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default counterSlice.reducer;
