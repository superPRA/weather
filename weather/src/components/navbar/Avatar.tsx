import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BsMoon, BsSun } from "react-icons/bs";
import { changeTheme } from "../../redux/global/global";

type Props = {};

export default function Avatar({}: Props) {
  const { theme } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  return (
    <div className="lg:py-4 lg:flex-col sm:flex items-center gap-4 border-l lg:border-0 my-3 pl-2 lg:pl-0 border-l-neutral-600 hidden">
      <div className="">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={(e) =>
              e.target.checked
                ? dispatch(changeTheme("light"))
                : dispatch(changeTheme("dark"))
            }
          />
          {/*sun */}
          <BsSun className="swap-on " />
          {/*moon */}
          <BsMoon className="swap-off" />
        </label>
      </div>
      <Link to="credit" className="avatar">
        <div className="w-12 rounded-full">
          <img src={require("../../assets/p2.jpg")} />
        </div>
      </Link>
    </div>
  );
}
