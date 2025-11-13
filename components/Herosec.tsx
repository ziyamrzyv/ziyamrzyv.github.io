"use client";
import { useEffect, useState } from "react";

export default function Herosec() {
  const fullText =
    "Junior Technical Support Specialist | Master’s in Computer Engineering";

  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);

  const TYPING_MS = 80;

  // Yazı yazma efekti
  useEffect(() => {
    if (index < fullText.length) {
      const t = setTimeout(() => setIndex((i) => i + 1), TYPING_MS);
      return () => clearTimeout(t);
    }
  }, [index, fullText]);

  // Cursor 10 sn sonra yanıp sönmeye başlasın
  useEffect(() => {
    const timer = setTimeout(() => setCursorVisible(true), 10_000);
    return () => clearTimeout(timer);
  }, []);

  const typed = fullText.slice(0, index);

  return (
    <section className="border-panel p-6 md:p-8">
      <h2 className="text-sm md:text-base text-[--green1] text-300/80 font-semibold tracking-wider flex items-center gap-2">
        <span className="text-[--green1] text-400">➜</span> WELCOME
      </h2>

      <h1
        className="mt-3 text-3xl md:text-4xl lg:text-5xl leading-none font-bold text-[--green1] text-400 tracking-wider"
        style={{ textShadow: "0 0 20px rgba(16,185,129,.35)" }}
      >
        Hello, I&apos;m Ziya Mirzayev
      </h1>

      <div className="mt-6 border-dashed-panel font-mono text-[13px] md:text-sm text-zinc-300">
        <div className="opacity-90">&gt; ziyamrzyv@home:~$ whoami</div>
        <div className="opacity-90 flex items-center">
          <span>{typed}</span>
          {cursorVisible && <span className="cursor blink ml-1">█</span>}
        </div>
      </div>
    </section>
  );
}
