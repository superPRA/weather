import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Link } from "react-router-dom";

type Props = {};

export default function Avatar({}: Props) {
  return (
    <div className="lg:py-4 lg:flex-col sm:flex items-center gap-4 border-l lg:border-0 my-3 pl-2 lg:pl-0 border-l-neutral-600 hidden">
      <div className="avatar placeholder online">
        <div className="w-8 rounded-full bg-black text-xl">
          <HiOutlineBellAlert />
        </div>
      </div>
      <Link to="" className="avatar">
        <div className="w-12 rounded-full">
          <img src={require("../../assets/p2.jpg")} />
        </div>
      </Link>
    </div>
  );
  }
