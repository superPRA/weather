import React, { ReactElement } from "react";
import myImg from "../assets/p2.jpg";
import { Link } from "react-router-dom";
import { DiReact } from "react-icons/di";
import reactRouter from "../assets/react-router.svg";
import { GiAmericanFootballHelmet } from "react-icons/gi"

type Props = {};

export default function Credit({}: Props) {
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
      img: <DiReact className="mx-auto" />,
      title: "Leaflet",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn,",
      color: "",
    },
    {
      img: <DiReact className="mx-auto" />,
      title: "Redux",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn,",
      color: "",
    },
    {
      img: <DiReact className="mx-auto" />,
      title: "Axios",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn,",
      color: "",
    },{
      img: <DiReact className="mx-auto" />,
      title: "Rechart",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn,",
      color: "",
    },{
      img: <DiReact className="mx-auto" />,
      title: "UUID",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn,",
      color: "",
    },{
      img: <DiReact className="mx-auto" />,
      title: "tailwind",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn,",
      color: "",
    },{
      img: <DiReact className="mx-auto" />,
      title: "daisy ui",
      describtion:
        "i've used the last version of React, the app is written in functional base and was created using yarn,",
      color: "",
    },
  ];
  return (
    <div className="">
      <div className="h-screen bg-primary flex justify-center items-center">
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
      <div className="grid grid-cols-12 max-w-7xl mx-auto py-20 gap-8">
        <h1 className="col-span-12 text-center text-5xl mb-8">silence features</h1>
        {list.map(({ describtion, img, title, color }) => {
          return (
            <div className="col-span-4 h-80 bg-info-content flex justify-center items-center rounded-xl p-4">
              <div className="flex flex-col items-center justify-around">
                <div className="avatar">
                  <div
                    className={`w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 text-8xl bg-neutral-focus flex justify-center items-center ${color}`}
                  >
                    {img}
                  </div>
                </div>
                <h1 className="text-center text-4xl mt-4">{title}</h1>
                <p className="mt-8 text-center">{describtion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
