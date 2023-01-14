import React from "react";
import { GiStaryu, GiCircleClaws } from "react-icons/gi";
import { RiApps2Line, RiMap2Line } from "react-icons/ri";
import Logo from "./navbar/Logo";
import Nav from "./navbar/Nav";
import Avatar from "./navbar/Avatar";

type Props = {};

export default function SideNavbar({}: Props) {
  return (
    <div
      className='md:rounded-3xl z-20 
    bg-[url("https://img.freepik.com/free-photo/sky-full-stars-silhouettes-trees_181624-12446.jpg?w=1060&t=st=1673201427~exp=1673202027~hmac=f51b4cbc2388f7fe109123420060a93f8ac17922a1f4021967e9f402500499c2")] 
    bg-cover sticky lg:fixed md:top-2 md:mx-4 lg:w-20 lg:h-[calc(100vh-1rem)] md:left-2 top-0 left-0'
    >
      <div
        className="backdrop-blur-md h-full text-white text-center relative flex flex-row
      px-3 lg:px-0 lg:flex-col md:rounded-3xl "
      >
        <div className="flex lg:flex-col flex-grow">
          <Logo />
          <Nav />
        </div>
        <Avatar />
      </div>
    </div>
  );
}
