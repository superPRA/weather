import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import HomeElements from "./HomeElements";
import Test from "../components/tempararyComponents/test";
import CommingSoon from "./Map";
import NotFound from "./NotFound";
import Credit from "./Credit";
import Contactme from "./contactme";

type Props = {};

export default function AppRoutes({}: Props) {
  return (
    <>
      <Routes>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<HomeElements />} />
          <Route path="/map" element={<CommingSoon />} />
          <Route path="/weatherinfo" element={<CommingSoon />} />
          <Route path="/calender" element={<CommingSoon />} />
          <Route path="/location" element={<CommingSoon />} />
          <Route path="/setting" element={<CommingSoon />} />
        </Route>
        <Route path="/credit" element={<Credit />} />
        <Route path="contactme" element={<Contactme />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}
