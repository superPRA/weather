import React from "react";
import { useAppSelector } from "../redux/hooks";
import SideNavbar from "../components/SideNavbar";
import { Outlet } from "react-router";
import HomeElements from "./HomeElements";
import { weather } from "../types/apiTypes";
import { Helmet } from "react-helmet-async";

type Props = {};

export default function Home({}: Props) {
  const { activeCity, weather } = useAppSelector((state) => state.apiResoponse);
  const { loading } = useAppSelector((state) => state.global);
  if (loading) {
    return (
      <>
          <Helmet>
            <title>
              Loading...
            </title>
          </Helmet>
        <div className="w-full h-screen bg-[#191b1f] flex justify-center items-center">
          <div className="flex justify-center gap-4">
            <div
              className="bg-red-600 h-10 w-10 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="bg-red-600 h-10 w-10 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="bg-red-600 h-10 w-10 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="dark:bg-[#191b1f] transition-all bg-neutral text-white lg:pl-[8rem] lg:pr-4">
      <SideNavbar />
      <Outlet />
    </div>
  );
}
