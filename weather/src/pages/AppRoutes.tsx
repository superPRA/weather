import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import HomeElements from "./HomeElements";
import Test from "../components/tempararyComponents/test";
import CommingSoon from "./tecnicalPages/CommingSoon";
import NotFound from "./tecnicalPages/NotFound";
import Credit from "./tecnicalPages/Credit";
import Contactme from "./tecnicalPages/contactme";
import MainWeather from "./mainWeather";
import Setting from "./Setting";
import Maps from "./maps";

type Props = {};

export default function AppRoutes({}: Props) {
  return (
    <>
      <Routes>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<HomeElements />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/mainWeather" element={<MainWeather />} />
          <Route path="/calender" element={<CommingSoon />} />
          <Route path="/location" element={<CommingSoon />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route path="/credit" element={<Credit />} />
        <Route path="contactme" element={<Contactme />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}
