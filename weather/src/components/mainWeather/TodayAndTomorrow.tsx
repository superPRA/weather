import React from "react";

type Props = {};

export default function TodayAndTomorrow({}: Props) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
      <div className="col-span-1 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 rounded-2xl text-center">
        <h1 className="text-2xl mt-4">Today's Weather</h1>
        <p className="my-8">Its cold and cloudy</p>
      </div>
      <div className="col-span-1 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 rounded-2xl text-center">
        <h1 className="text-2xl mt-4">Tomorrow's Weather</h1>
        <p className="my-8">Its almost the same as yesterday</p>
      </div>
    </div>
  );
}
