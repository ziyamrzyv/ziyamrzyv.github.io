'use client'
import { useEffect, useState } from "react";

export default function Footer() {
    const [uptimeDays, setUptimeDays] = useState(0);
    const ORIGIN_ISO = '2025-11-10T00:00:00Z';

    useEffect(() => {
        const ORIGIN = new Date(ORIGIN_ISO);
        const DAY_MS = 1000 * 60 * 60 * 24;

        const calculateUptime = () => {
            const now = new Date();
            const diff = Math.floor((now.getTime() - ORIGIN.getTime()) / DAY_MS);
            setUptimeDays(diff)
        }

        calculateUptime();

        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setUTCHours(24, 0, 0, 0);
        const msUntilTomorrow = tomorrow.getTime() - now.getTime();

        const timeout= setTimeout(() => {
            calculateUptime();
            setInterval(calculateUptime, DAY_MS);
        }, msUntilTomorrow);

        return () => clearTimeout(timeout);
    }, [ORIGIN_ISO]);

  return (
    <footer className="text-center text-gray-400 py-6 mb-4">
      <p>
        I&apos;m <span className="text-green-400 font-semibold">ONLINE_</span> ·
        Uptime: {uptimeDays} day{uptimeDays !== 1 && "s"}
      </p>
      <p className="mt-2 text-sm">© Ziya Mirzayev {new Date().getFullYear()}</p>
    </footer>
  );
}
