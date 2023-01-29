import React, { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { BiCurrentLocation } from "react-icons/bi";
import useGetCity from "../hooks/axios/useGetCity";
import uuid from "react-uuid";
import { changeActiveCity } from "../redux/API/APIResponses";

type Props = {
  center: number[];
  setCenter: any;
  e: number[];
  setE: any;
  setCitySearch: any;
  locate: boolean | "loading" | "error";
  setLocate: any;
};

function UseMap({
  center,
  setCenter,
  e,
  setE,
  setCitySearch,
  locate,
  setLocate,
}: Props) {
  useEffect(() => {
    if (e.length !== 0) {
      map.flyTo(e as any);
      setCenter(e);
      setE([]);
      setCitySearch("");
    }
  }, [e]);
  useEffect(() => {
    if (locate === "loading") {
      map.locate();
    }
  }, [locate]);

  const map = useMapEvents({
    locationerror: () => {
      console.log("location find error");
      setLocate("error")
    },
    locationfound: (e) => {
      map.flyTo(e.latlng);
      setLocate("stop")
    },
  });
  return null;
}

export default function Maps() {
  const { activeCity } = useAppSelector((state) => state.apiResoponse);
  const [center, setCenter] = useState([
    activeCity.latitude,
    activeCity.longitude,
  ]);
  const [locate, setLocate] = useState<boolean | "loading" | "error">(false);
  const [e, setE] = useState<number[]>([]);
  const [citySearch, setCitySearch] = useState("");
  const { error, loading, response } = useGetCity(citySearch);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen py-4">
      <div className="w-full h-full rounded-3xl relative">
        <MapContainer
          center={center as any}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full rounded-3xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center as any}></Marker>
          <UseMap
            center={center}
            setCenter={setCenter}
            e={e}
            setE={setE}
            setCitySearch={setCitySearch}
            locate={locate}
            setLocate={setLocate}
          />
        </MapContainer>
        <button
          className={`btn ${
            locate === "error" && "btn-error"
          } z-[400] absolute bottom-10 right-10 ${
            locate === "loading" && "loading"
          }`}
          onClick={() => setLocate("loading")}
        >
          {locate !== "loading" && <BiCurrentLocation />}
        </button>
        <div className="absolute top-10 right-10 z-[400]">
          <div className="relative flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Type your city"
              className="input input-bordered  input-primary w-full max-w-xs text-black dark:text-white"
              onChange={(e) => setCitySearch(e.target.value)}
              value={citySearch}
            />
            {response && response.results && (
              <div className="absolute top-14 text-black bg-white w-80 rounded-lg max-h-80 overflow-y-auto scrollNone border border-primary ">
                {response.results.map((item) => {
                  const { country, name, country_code, latitude, longitude } =
                    item;
                  return (
                    <div key={uuid()}>
                      <button
                        className="flex justify-between dark:justify-between w-full px-8 py-2 items-center btn btn-outline dark:btn dark:rounded-none rounded-none text-ellipsis"
                        onClick={() => setE([latitude, longitude])}
                      >
                        {name},{country}
                        <img
                          src={`https://flagsapi.com/${country_code}/flat/64.png`}
                          className="h-8"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
