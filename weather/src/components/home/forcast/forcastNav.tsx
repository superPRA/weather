import React from "react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  timePeriod: "day" | "week";
  setTimePeriod: React.Dispatch<React.SetStateAction<"day" | "week">>;
};

export default function ForcastNav({ timePeriod, setTimePeriod }: Props) {
  return (
    <div className="flex justify-between">
      <h1>{timePeriod === "day" ? "1 day" : "7 days"} forcast</h1>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-sm dark:bg-black bg-base-content rounded-full">
          {timePeriod === "day" ? "1 day" : "7 days"}
          <BsChevronDown className="mx-1" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-base-300 shadow text-black dark:text-white rounded-box w-52"
        >
          <li>
            <button onClick={() => setTimePeriod("week")}>7 days</button>
          </li>
          <li>
            <button onClick={() => setTimePeriod("day")}>24 hour's</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
