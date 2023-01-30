import React, { ReactElement } from "react";
import myImg from "../../assets/p2.jpg";
import { Link } from "react-router-dom";
import { DiReact } from "react-icons/di";
import reactRouter from "../../assets/react-router.svg";
import tailwind from "../../assets/tailwindcss-mark.svg";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme } from "../../redux/global/global";
import { BsGithub, BsMoon, BsSun } from "react-icons/bs";
import { SiLeaflet, SiRedux } from "react-icons/si";

type Props = {};

export default function Credit({}: Props) {
  const { theme } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const list: {
    img: ReactElement;
    title: string;
    describtion: string;
    color: string;
  }[] = [
    {
      img: <DiReact className="mx-auto" />,
      title: "React",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn and it was powered by react hooks.",
      color: "text-blue-700",
    },
    {
      img: <img className="scale-90" src={reactRouter} />,
      title: "React-Router",
      describtion:
        "It has a simple API and is being used to make managing routes in your app. since react doesn't have a built-in routing solution using this library i essential.",
      color: "bg-white",
    },
    {
      img: <DiReact className="mx-auto" />,
      title: "React-icons",
      describtion:
        "react icons exist to make importing icons easier! compered to other icon providers react icon is the best",
      color: "",
    },
    {
      img: <GiAmericanFootballHelmet className="mx-auto scale-75" />,
      title: "React async helmet",
      describtion:
        "React Helmet Async is a component which lets you control your document head using their React component. With this plugin, attributes you add in their component, e.g. title, meta attributes",
      color: "text-error",
    },
    {
      img: <SiLeaflet className="mx-auto scale-75" />,
      title: "Leaflet",
      describtion:
        "leaflet is one of the most powerful map libraries yet open-source and free, its used to vitalise data to any user who need's it.",
      color: "text-green-700",
    },
    {
      img: <SiRedux className="mx-auto scale-75" />,
      title: "Redux",
      describtion:
        "Redux is the most powerful state management libraries for react and its being used in massive projects like in instagram, ive used it to manage api response and axios settings.",
      color: "text-primary",
    },
    {
      img: (
        <img
          src="https://www.vectorlogo.zone/logos/axios/axios-icon.svg "
          className="scale-75"
        />
      ),
      title: "Axios",
      describtion:
        "axios is used to fetch api and send html request and ..., but it doesnt force you to do anything (it does it for you). ",
      color: "",
    },
    {
      img: <h1 className="text-lg text-center mt-8 text-blue-600">RECHART</h1>,
      title: "Rechart",
      describtion:
        "you can create any sort of imaginable chart using this libraries with basic knowlege!",
      color: "",
    },
    {
      img: <h1 className="text-4xl text-center mt-7">UUID</h1>,
      title: "UUID",
      describtion:
        "a simple light-weight react libraries to create unique random id's.",
      color: "",
    },
    {
      img: <img src={tailwind} className="scale-75" />,
      title: "tailwind",
      describtion:
        "my most beloved css framwork available, it just make it alot simpler to write css and undrestanding it.",
      color: "",
    },
    {
      img: (
        <div className="text-2xl text-center my-7">
          <span>daisy</span>
          <span className="text-purple-700">UI</span>
        </div>
      ),
      title: "daisy ui",
      describtion:
        "daisy ui is a component base tailwind plugin used for faster dev speed, less code and better readability.",
      color: "",
    },
    {
      img: <DiReact className="mx-auto" />,
      title: "swiper",
      describtion: "a js framwork used to create swipping effect.",
      color: "",
    },
  ];
  return (
    <div className="snap-y bg-zinc-800 text-white relative">
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
        <BsSun className="swap-on " />
        <BsMoon className="swap-off" />
      </label>
      <div className="h-screen bg-primary flex justify-center items-center snap-center">
        <div className="text-center">
          <div className="avatar">
            <div className="w-48 rounded-full1 mask mask-squircle">
              <img src={myImg} />
            </div>
          </div>
          <h1 className="text-4xl mt-8">Pooriya Mosavi</h1>
          <div className="flex gap-20 mt-8">
            <Link to="/home" className="btn-secondary btn">
              visit the site
            </Link>
            <Link to="/contactme" className="btn ">
              contact me
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto py-20 gap-8 snap-start">
        <h1 className="col-span-12 text-center text-5xl mb-8">
          silence features
        </h1>
        {list.map(({ describtion, img, title, color }) => {
          return (
            <div className="md:col-span-4 col-span-12 h-80 bg-primary flex justify-center items-center p-4 pt-8 rounded-xl">
              <div className="flex flex-col items-center justify-between h-full ">
                <div className="avatar">
                  <div
                    className={`w-24 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 text-8xl bg-neutral-focus flex justify-center items-center ${color}`}
                  >
                    {img}
                  </div>
                </div>
                <h1 className="text-center text-4xl">{title}</h1>
                <p className="text-center">{describtion}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-black px-8 py-12 flex justify-start items-center gap-4">
        <BsGithub />
        <a href="https://github.com/superPRA/weather" className="hover:underline">github</a>
      </div>
    </div>
  );
}
