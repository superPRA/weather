import React, { useState } from "react";
import { BsGear, BsX } from "react-icons/bs";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { useAppDispatch } from "../redux/hooks";
import useGetCity from "../hooks/axios/useGetCity";
import uuid from "react-uuid";
import { changeActiveCity } from "../redux/API/APIResponses";
import { changeTheme } from "../redux/global/global";

type Props = {};

export default function Setting({}: Props) {
  const dispatch = useAppDispatch();
  const [citySearch, setCitySearch] = useState("");
  const { error, loading, response } = useGetCity(citySearch);
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center p-12 border-dashed border-b">
        <div className="dropdown dropdown-right">
          <label tabIndex={0} className="btn btn-primary m-1">
            Language
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
          >
            <div className="card-body">
              <h3 className="card-title text-center">comming soon...</h3>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-left">
          <label tabIndex={0} className="btn btn-primary m-1">
            theme
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black dark:text-white"
          >
            <li>
              <button
                className="flex justify-between"
                onClick={() => {
                  localStorage.setItem("theme", "light");
                  dispatch(changeTheme("light"));
                }}
              >
                <h1>Light</h1>
                <WiDaySunny className="text-yellow-500 text-2xl" />
              </button>
            </li>
            <li>
              <button
                className="flex justify-between"
                onClick={() => {
                  localStorage.setItem("theme", "dark");
                  dispatch(changeTheme("dark"));
                }}
              >
                <h1>Dark</h1>
                <WiNightClear className="text-2xl" />
              </button>
            </li>
            <li>
              <button
                className="flex justify-between"
                onClick={() => localStorage.setItem("theme", "system")}
              >
                <h1>System</h1>
                <BsGear className=" text-xl" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-dashed border-b p-12 flex justify-start items-center gap-8">
        <h1>your location :</h1>
        <div className="relative flex-1 flex justify-center ">
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
                const { country, name, country_code } = item;
                return (
                  <div key={uuid()}>
                    <button
                      className="flex justify-between dark:justify-between w-full px-8 py-2 items-center btn btn-outline dark:btn dark:rounded-none rounded-none text-ellipsis"
                      onClick={() => dispatch(changeActiveCity(item))}
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
  );
}
