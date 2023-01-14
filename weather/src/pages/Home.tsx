import React from "react";
import { useAppSelector } from "../redux/hooks";
import SideNavbar from "../components/SideNavbar";
import { Outlet } from "react-router";
import HomeElements from "../components/HomeElements";

type Props = {};

export default function Home({}: Props) {
  const { activeCity, weather } = useAppSelector((state) => state.apiResoponse);
  return (
    <div className="bg-[#191b1f] text-white lg:pl-[8rem] py-4 lg:pr-4">
      <SideNavbar />
      <Outlet />
    </div>
  );
}
