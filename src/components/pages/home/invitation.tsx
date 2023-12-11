"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { DayPicker } from "react-day-picker";
import { Great_Vibes } from "next/font/google";
import { vi } from "date-fns/locale";
import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";

const font = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function Countdown() {
  const countDownDate = new Date("01/14/2024").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div
      className={cn(
        "flex items-center border-t pt-3 justify-evenly text-center lg:py-8",
        "[&>label]:text-sm [&>label]:text-primary lg:[&>label]:font-medium",
        "[&>label>span]:block [&>label>span]:text-3xl [&>label>span]:mb-1 lg:[&>label>span]:text-5xl lg:[&>label>span]:font-meidum"
      )}
    >
      <label>
        <span className={font.className}>{timeLeft.days}</span>
        Ngày
      </label>
      <label>
        <span className={font.className}>{timeLeft.hours}</span>
        Giờ
      </label>
      <label>
        <span className={font.className}>{timeLeft.minutes}</span>
        Phút
      </label>
      <label>
        <span className={font.className}>{timeLeft.seconds}</span>
        Giây
      </label>
    </div>
  );
}

export default function Invitation() {
  const date = new Date("2024-01-14,10:00:00");
  const defaultMonth = new Date(2024, 0);
  return (
    <section className="bg-invitation">
      <div className="grid grid-cols-1 lg:grid-cols-2 container py-24 gap-10 overflow-hidden">
        <div className="p-6 lg:p-10 max-w-[500px] mx-auto lg:mr-0 bg-white relative">
          <div className="border-2 border-primary lg:border-4 text-center p-6 h-full lg:py-12">
            <h2
              className={cn(
                "italic text-2xl sm:text-[28px] mb-4 lg:text-5xl lg:mb-6",
                font.className
              )}
            >
              Save The Date
            </h2>
            <p className="text-sm text-gray-500 mb-3 lg:text-base lg:mb-6">
              For the wedding of
            </p>
            <h3 className="text-lg font-bold mb-4 lg:text-2xl">
              Xuân Trường & Tú Anh
            </h3>
            <p className="text-xs leading-5 mb-4 lg:text-base lg:mb-8 lg:leading-8">
              Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
              có thêm một niềm hạnh phúc!
            </p>
            <Link href={"#donate"} className="btn btn-primary rounded">
              Mừng cưới
              <span className="mdi mdi-cash-multiple ml-1"></span>
            </Link>
          </div>
          <div className="left-vec w-[150px] h-[281px] absolute -left-20 -top-20"></div>
        </div>
        <div className="p-6 w-full lg:p-10 max-w-[500px] mx-auto lg:ml-0 bg-white relative">
          <div className="border-2 lg:border-4 border-primary text-center">
            {/* <DayPicker
              mode="single"
              locale={vi}
              defaultMonth={defaultMonth}
              fromYear={2024}
              selected={date}
              footer={<Countdown />}
              disableNavigation
            /> */}
            <Calendar
              mode="single"
              selected={date}
              className="rounded-md border"
              footer={<Countdown />}
              locale={vi}
              defaultMonth={defaultMonth}
              fromYear={2024}
              disableNavigation
            />
          </div>
          <div className="right-vec absolute w-[300px] h-[381px] -right-20 -bottom-[50px]"></div>
        </div>
      </div>
    </section>
  );
}
