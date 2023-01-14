import React, { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { GiCircleClaws } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { RiApps2Line, RiMap2Line } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import uuid from "react-uuid";

type Props = {};
const icons = [
  {
    icon: <RiApps2Line />,
    to: "/home",
  },
  {
    icon: <RiMap2Line />,
    to: "map",
  },
  {
    icon: <IoLocationOutline />,
    to: "location",
  },
  {
    icon: <GiCircleClaws />,
    to: "asda",
  },
  {
    icon: <RxCalendar />,
    to: "asdasa",
  },
  {
    icon: <AiOutlineSetting />,
    to: "aff",
  },
];

export default function Nav({}: Props) {
  return (
    <>
      <div
        className={` lg:rounded-2xl transition-all 
        overflow-hidden  bg-cover flex-grow`}
      >
        <div className="lg:block flex justify-around backdrop-blur-md sm:backdrop-blur-0 h-full py-2 ">
          {icons.map((item) => {
            return (
              <NavLink
                key={uuid()}
                className={({ isActive }) => {
                  return isActive
                    ? "flex justify-center items-center text-3xl lg:text-2xl h-10 my-2 lg:text-neutral-300 transition-all duration-300 lg:border-l-[6px] lg:bg-gradient-to-r lg:from-[rgb(255,255,255,0.4)]"
                    : "flex justify-center items-center text-xl h-10 my-2 text-neutral-400 transition-all duration-300";
                }}
                to={item.to}
              >
                {item.icon}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
