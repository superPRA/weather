import React from "react";
import { BsChevronDown } from "react-icons/bs";

type Props = {};

export default function MainMapNav({}: Props) {
  return (
    <div className="flex justify-between items-start">
      <h1>Weather Condition Map</h1>
      <div className="dropdown dropdown-end z-[401]">
        <label tabIndex={0} className="btn btn-sm bg-black rounded-full">
          24 hr
          <BsChevronDown className="mx-1" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button>7 days</button>
          </li>
          <li>
            <button>24 hour's</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
