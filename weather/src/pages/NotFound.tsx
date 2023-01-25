import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center text-7xl">
      <div className="text-center">
        URL Not Found
        <br />
        <Link to="/home" className="text-base link-primary">
          going back home
        </Link>
      </div>
    </div>
  );
}
