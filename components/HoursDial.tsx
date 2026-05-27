"use client";

// components/HoursDial.tsx — hours table with a live "open today" status.
// Renders a stable default on the server, then resolves local time after mount
// to avoid hydration mismatch.
import { useEffect, useState } from "react";
import { hours, hoursMap } from "@/lib/data";

export function HoursDial() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);

  const todayInfo = now ? hoursMap[now.getDay()] : null;
  const hr = now ? now.getHours() + now.getMinutes() / 60 : 0;
  const isOpen =
    !!todayInfo &&
    !todayInfo.closed &&
    todayInfo.open !== undefined &&
    todayInfo.close !== undefined &&
    hr >= todayInfo.open &&
    hr < todayInfo.close;

  return (
    <div className="hd">
      <div className="hd__status">
        <span className={"hd__dot " + (isOpen ? "is-open" : "is-closed")} />
        <span className="hd__status-l">
          {todayInfo ? (isOpen ? "Open today" : "Closed today") : "Studio hours"}
          {todayInfo && (
            <span className="small" style={{ marginLeft: 6, color: "var(--tss-fg-muted)" }}>
              · {todayInfo.label}, {todayInfo.h}
            </span>
          )}
        </span>
      </div>
      <dl className="hd__rows">
        {hours.map((row) => {
          const isToday = todayInfo?.label === row.day;
          return (
            <div key={row.day} className={(row.closed ? "cl " : "") + (isToday ? "is-today" : "")}>
              <dt>{row.day}</dt>
              <dd>{row.hours}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
