"use client";

import { useEffect, useState } from "react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateWeeklyCountdown(): CountdownTime {
  const now = Date.now();
  const offset = 5.5 * 60 * 60 * 1000; // IST offset
  const ist = new Date(now + offset);
  const day = ist.getUTCDay();
  const daysUntilSunday = day === 0 ? 0 : 7 - day;
  const endUtc =
    Date.UTC(
      ist.getUTCFullYear(),
      ist.getUTCMonth(),
      ist.getUTCDate() + daysUntilSunday,
      23,
      59,
      59,
      999,
    ) - offset;
  const remaining = Math.max(0, endUtc - now);
  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState<CountdownTime>(calculateWeeklyCountdown);

  useEffect(() => {
    const id = window.setInterval(
      () => setTime(calculateWeeklyCountdown()),
      1000,
    );
    return () => window.clearInterval(id);
  }, []);

  const values = [
    [time.days, "Days"],
    [time.hours, "Hours"],
    [time.minutes, "Minutes"],
    [time.seconds, "Seconds"],
  ] as const;

  return (
    <div
      className="countdown"
      aria-label={`${time.days} days, ${time.hours} hours, ${time.minutes} minutes and ${time.seconds} seconds remaining`}
    >
      {values.map(([value, label], index) => (
        <div className="time-part" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
          {index < values.length - 1 && <i>:</i>}
        </div>
      ))}
    </div>
  );
}
