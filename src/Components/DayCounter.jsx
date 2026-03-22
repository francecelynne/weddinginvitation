import { useState, useEffect, useRef } from "react";


function pad(n) {
  return String(Math.abs(n)).padStart(2, "0");
}

function getDiff(target) {
  const now = new Date();
  const t = new Date(target + "T00:00:00");
  const diffMs = t - now;
  const totalDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const past = diffMs < 0;
  const abs = Math.abs(diffMs);
  const hours = Math.floor((abs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((abs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((abs % (1000 * 60)) / 1000);
  return { totalDays, past, hours, minutes, seconds, diffMs };
}

function FlipDigit({ value, label }) {
  const [displayVal, setDisplayVal] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const prevRef = useRef(value);

  useEffect(() => {
    if (prevRef.current !== value) {
      setFlipping(true);
      const t = setTimeout(() => {
        setDisplayVal(value);
        setFlipping(false);
        prevRef.current = value;
      }, 200);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
      <div
        style={{
          position: "relative",
          width: "72px",
          height: "88px",
          // background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          // border: "1px solid rgba(255,255,255,0.07)",
          overflow: "hidden",
        }}
      >
       <span
          style={{
            fontSize: "52px",
            color: "black",
            letterSpacing: "2px",
            lineHeight: 1,
            transform: flipping ? "rotateX(90deg)" : "rotateX(0deg)",
            transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
            display: "block",
            // textShadow: "0 0 20px rgba(99,179,237,0.3)",
          }}
        >
          {displayVal}
        </span>
      </div>
        
      <span style={{
        fontSize: "10px",
        letterSpacing: "3px",
        color: "rgba(0,0,0,0.35)",
        textTransform: "uppercase",
        fontWeight: 500,
      }}>
        {label}
      </span>
    </div>
  );
}

export default function DayCounter() {
  const today = new Date().toISOString().split("T")[0];
  const [targetDate, setTargetDate] = useState("2026-04-22");
  const [diff, setDiff] = useState(getDiff("2026-04-25"));

  useEffect(() => {
    const tick = setInterval(() => setDiff(getDiff(targetDate)), 1000);
    return () => clearInterval(tick);
  }, [targetDate]);


  const absDays = Math.abs(diff.totalDays);
  const dayStr = String(absDays);

  return (
    <>
    <div className=" bg-white flex flex-col gap-5 my-20">
      <span className="uppercase">Time left ‘til we say “I Do”</span>
      <div className="flex gap-2 items-center justify-center flex-wrap sm:flex-nowrap ">
         
          <FlipDigit value={pad(dayStr)} label="Days" />
          <div className="divider">:</div>
          <FlipDigit value={pad(diff.hours)} label="Hours" />
          <div className="divider">:</div>
          <FlipDigit value={pad(diff.minutes)} label="Minutes" />
          <div className="divider">:</div>
          <FlipDigit value={pad(diff.seconds)} label="Seconds" />
        </div>
    </div>
    </>
  );
}