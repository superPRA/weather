import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { DateTime } from "luxon";
import WeatherIcons from "../icons/weatherIcons";
import { WiDegrees, WiRaindrop } from "react-icons/wi";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle"
import uuid from "react-uuid";

type Props = {};

export default function HourlyDetail({}: Props) {
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const date = DateTime.now();
  const array = new Array(weather?.hourly.apparent_temperature.length).fill(1);
  const data = array.map((item, index) => {
    return {
      a: weather?.hourly.apparent_temperature[index],
    };
  });
  return (
    <div className="flex overflow-x-hidden px-4 my-8 dark:bg-black dark:bg-opacity-40 bg-white rounded-3xl bg-opacity-40">
      
      <Swiper
        spaceBetween={2}
        slidesPerView={16}
      >
        {array.map((item, index) => {
                return (
                  <SwiperSlide className="text-center mx-12 text-4xl flex flex-col items-center py-4 select-none" key={uuid()}>
                    <h6 className="text-lg">
                      {
                        DateTime.fromISO(
                          weather?.hourly.time[
                            index + DateTime.now().hour
                          ] as string
                        ).hour
                      }
                      :00
                    </h6>
                    <WeatherIcons
                      code={
                        weather?.daily.weathercode[
                          Math.floor(index / 24)
                        ] as number
                      }
                    />
                    <h6 className="text-base relative">
                      {
                        weather?.hourly.apparent_temperature[
                          index + DateTime.now().hour
                        ]
                      }
                      <div className="absolute top-0 -right-4 ">
                        <WiDegrees className="text-2xl" />
                      </div>
                    </h6>
                    <div className="text-lg mt-2">
                      <WiRaindrop className="mx-auto" />
                      <h6 className="text-sm">{weather?.hourly.relativehumidity_2m[index]}%</h6>
                    </div>
                      
                  </SwiperSlide>
                );
              })}
        
      </Swiper>
    </div>
  );
}
