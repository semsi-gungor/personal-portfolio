"use client";

import { FC, useEffect, useState } from "react";

const Clock: FC = ({}) => {
  const [clock, setClock] = useState<{
    hours: string;
    minutes: string;
  }>({
    hours:
      new Date().getHours().toString().length < 2
        ? "0" + new Date().getHours().toString()
        : new Date().getHours().toString(),
    minutes:
      new Date().getMinutes().toString().length < 2
        ? "0" + new Date().getMinutes().toString()
        : new Date().getMinutes().toString(),
  });

  const [handAngle, setHandAngle] = useState(0);

  useEffect(() => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    let angle = 30 * (hours % 12);
    angle += minutes / 2;

    setHandAngle(angle);

    let interval = setInterval(() => {
      let date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();

      let angle = 360 / (hours % 12);

      console.log(angle);

      setClock({
        hours:
          date.getHours().toString().length < 2
            ? "0" + date.getHours().toString()
            : date.getHours().toString(),
        minutes:
          date.getMinutes().toString().length < 2
            ? "0" + date.getMinutes().toString()
            : date.getMinutes().toString(),
      });
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex gap-4 md:gap-8">
      <div className="w-16 md:w-24 aspect-square border-4 rounded-full grid place-items-center">
        {/* hand */}
        <div
          style={{ transform: `rotate(${handAngle}deg)` }}
          className="w-1 h-12 relative flex flex-col"
        >
          <div className="flex-1 bg-zinc-50"></div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center tabular-nums text-xs md:text-base">
        <p>
          {clock.hours}:{clock.minutes} local time
        </p>
        <p className="text-zinc-400">Rize, Türkiye</p>
      </div>
    </div>
  );
};

export default Clock;
