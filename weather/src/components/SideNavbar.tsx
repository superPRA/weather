import React, { useState } from "react";
import Logo from "./navbar/Logo";
import Nav from "./navbar/Nav";
import Avatar from "./navbar/Avatar";
import { BiMenu } from "react-icons/bi";
import { RiApps2Line, RiMap2Line } from "react-icons/ri";
import { GiCircleClaws } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeTheme } from "../redux/global/global";
import { BsMoon, BsSun } from "react-icons/bs";

type Props = {};
const icons = [
  {
    icon: <RiApps2Line />,
    to: "/home",
    name: "home",
  },

  {
    icon: <GiCircleClaws />,
    to: "/mainWeather",
    name: "main weather",
  },
  {
    icon: <RiMap2Line />,
    to: "/map",
    name: "map",
  },
  {
    icon: <IoLocationOutline />,
    to: "/location",
    name: "location",
  },
  {
    icon: <RxCalendar />,
    to: "/calender",
    name: "calender",
  },
  {
    icon: <AiOutlineSetting />,
    to: "/setting",
    name: "setting",
  },
];

export default function SideNavbar({}: Props) {
  const [drawer, setDrawer] = useState(false);
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.global);

  return (
    <div className="lg:top-0 lg:my-4 transition-all md:rounded-3xl bg-neutral z-[400] lg:bg-box-light lg:dark:bg-box-dark bg-cover sticky bg-center lg:fixed md:top-2 md:mx-4 lg:w-20 lg:h-[calc(100vh-3rem)] md:left-2 top-0 left-0">
      <div className="backdrop-blur-md h-full text-white text-center relative  flex flex-row px-3 lg:px-0 lg:flex-col md:rounded-3xl ">
        <div className="flex lg:flex-col flex-grow">
          <Logo />
          <Nav />
          <button
            className=" btn btn-outline focus:text-white text-white border-none hover:bg-transparent text-5xl my-3 sm:hidden ml-auto"
            onClick={() => setDrawer(!drawer)}
          >
            <BiMenu />
          </button>
        </div>
        <Avatar />
      </div>
      <div
        className={`${
          !drawer ? "h-0" : "h-[450px]"
        } overflow-clip transition-all bg-neutral w-full left-0 flex flex-col px-8 z-[400] drop-shadow-lg`}
      >
        <div className="border-b border-dashed">
          {icons.map((item) => {
            return (
              <NavLink
                key={uuid()}
                className={({ isActive }) => {
                  return isActive
                    ? "text-3xl text-primary h-10 my-2 transition-all duration-300 flex justify-between items center "
                    : "text-xl h-10 my-2 text-neutral-400 transition-all duration-300 flex justify-between items-center";
                }}
                to={item.to}
              >
                <i>{item.icon}</i>
                <h1>{item.name}</h1>
              </NavLink>
            );
          })}
        </div>

        <div className="flex justify-between items-center text-xl my-2 h-10">
          <label className="swap swap-rotate text-2xl">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked
                  ? dispatch(changeTheme("light"))
                  : dispatch(changeTheme("dark"))
              }
              checked={theme === "light"}
            />
            <BsSun className="swap-on " />
            <BsMoon className="swap-off" />
          </label>
          <h1>theme</h1>
        </div>
        <div className="flex justify-center items-center text-xl my-2 h-10">
          <Link to="credit" className="avatar">
            <div className="w-20 rounded-full hover:scale-105 transition-all">
              <img src={require("../assets/p2.jpg")} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
