"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // e.g. "2026-09-18T08:00:00"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Set initial value immediately
    setTimeLeft(calculateTimeLeft());

    // Update timer every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Avoid hydration mismatch during SSR
  if (!timeLeft) return null;

  return (
    <div className="flex items-center gap-2 font-mono font-bold text-primary-blue">
      <div className="flex flex-col items-center justify-center bg-secondary-gold/10 size-12 rounded">
        <span className="text-lg">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-secondary-gold uppercase">
          Days
        </span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center justify-center bg-secondary-gold/10 size-12 rounded">
        <span className="text-lg">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-secondary-gold uppercase">
          Hrs
        </span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center justify-center bg-secondary-gold/10 size-12 rounded">
        <span className="text-lg">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-secondary-gold uppercase">
          Min
        </span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center justify-center bg-secondary-gold/10 size-12 rounded">
        <span className="text-lg">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-secondary-gold uppercase">
          Sec
        </span>
      </div>
    </div>
  );
}
