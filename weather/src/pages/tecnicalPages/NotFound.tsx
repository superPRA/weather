import react, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { changeTheme } from "../../redux/global/global";
import { BsMoon, BsSun } from "react-icons/bs";

type Props = {};

export default function NotFound({}: Props) {
  const dispatch = useDispatch()
  const { theme } = useAppSelector(state=>state.global)
  const [sec, setSec] = useState(15);
  useEffect(() => {
    if(sec > 0){
      setTimeout(() => {
        setSec((oldSec) => oldSec - 1);
      }, 1000);
    }
  }, [sec]);
  if (sec === 0) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="h-screen flex justify-center items-center text-7xl">
      <label className="swap swap-rotate absolute top-10 right-10 btn btn-square btn-warning dark:btn-active dark:text-white">
          <input
            type="checkbox"
            onChange={(e) =>
              e.target.checked
                ? dispatch(changeTheme("light"))
                : dispatch(changeTheme("dark"))
            }
            checked={theme === "light"}
          />
          {/*sun */}
          <BsSun className="swap-on " />
          {/*moon */}
          <BsMoon className="swap-off" />
        </label>
      <div className="text-center">
        URL Not Found
        <br />
        <br />
        <p className="text-base">
          you will be directed to{" "}
          <Link to="/home" className="link-primary">
            home
          </Link>{" "}
          page in {sec} second{sec > 1 && "'s"}
        </p>
      </div>
    </div>
  );
}
