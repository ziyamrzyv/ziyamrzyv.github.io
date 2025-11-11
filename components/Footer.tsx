// components/Footer.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [uptimeDays, setUptimeDays] = useState(0);
  const ORIGIN_ISO = "2025-11-10T00:00:00Z";
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const ORIGIN = new Date(ORIGIN_ISO);
    const DAY_MS = 24 * 60 * 60 * 1000;

    const compute = () => {
      const now = new Date();
      setUptimeDays(Math.floor((now.getTime() - ORIGIN.getTime()) / DAY_MS));
    };

    compute();

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setUTCHours(24, 0, 0, 0);
    const msUntilNextDay = tomorrow.getTime() - now.getTime();

    timeoutRef.current = window.setTimeout(() => {
      compute();
      intervalRef.current = window.setInterval(compute, DAY_MS);
    }, msUntilNextDay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [ORIGIN_ISO]);

  return (
    <footer className="text-center text-zinc-400 py-6">
      <p>
        I&apos;m <span className="text-emerald-400 font-semibold">ONLINE_</span> ·
        {" "}Uptime: {uptimeDays} day{uptimeDays !== 1 && "s"}
      </p>
      <p className="mt-2 text-sm">© Ziya Mirzayev {new Date().getFullYear()}</p>
    </footer>
  );
}
