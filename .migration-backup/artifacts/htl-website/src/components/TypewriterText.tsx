import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterText({
  text,
  className,
  speed = 38,
  delay = 300,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [started, setStarted] = useState(false);

  // Reset when text changes (e.g. slide changes)
  useEffect(() => {
    setDisplayed("");
    setCharIdx(0);
    setStarted(false);
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [text, delay]);

  useEffect(() => {
    if (!started) return;
    if (charIdx >= text.length) return;
    const t = setTimeout(() => {
      setDisplayed((prev) => prev + text[charIdx]);
      setCharIdx((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, text, speed, started]);

  const isDone = charIdx >= text.length;

  return (
    <span className={className}>
      {displayed}
      {!isDone && (
        <span
          className="inline-block w-[3px] h-[0.85em] bg-current ml-1 align-middle"
          style={{ animation: "twBlink 0.7s step-end infinite" }}
        />
      )}
    </span>
  );
}
