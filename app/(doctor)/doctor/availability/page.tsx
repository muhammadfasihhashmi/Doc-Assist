"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, Clock, CalendarDays } from "lucide-react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const initialSchedule: Record<string, { start: string; end: string }[]> = {
  Monday: [{ start: "09:00", end: "13:00" }],
  Tuesday: [{ start: "11:00", end: "15:00" }],
  Wednesday: [{ start: "09:00", end: "13:00" }],
  Thursday: [{ start: "14:00", end: "18:00" }],
  Friday: [{ start: "09:00", end: "12:00" }],
  Saturday: [],
  Sunday: [],
};

export default function DoctorAvailability() {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [activeDays, setActiveDays] = useState<Record<string, boolean>>({
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
    Sunday: false,
  });

  const toggleDay = (day: string) => {
    setActiveDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const addSlot = (day: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: [...prev[day], { start: "09:00", end: "10:00" }],
    }));
  };

  const removeSlot = (day: string, index: number) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  const updateSlot = (
    day: string,
    index: number,
    field: "start" | "end",
    value: string,
  ) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: prev[day].map((slot, i) =>
        i === index ? { ...slot, [field]: value } : slot,
      ),
    }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-full mx-auto">
      {/* Header (same style as dashboard headers) */}
      <div>
        <h1 className="text-xl font-bold text-violet-950 tracking-tight">
          Availability
        </h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Manage your weekly consultation schedule
        </p>
      </div>

      {/* Info (kept clean, no tinted background block styling) */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-4 pb-4 px-5 flex items-start gap-2">
          <Clock size={14} className="text-violet-700 mt-0.5" />
          <p className="text-xs text-slate-500 leading-relaxed">
            Patients can only book appointments within your available time
            slots.
          </p>
        </CardContent>
      </Card>

      {/* Schedule (NOW MATCHES DASHBOARD CARD STYLE) */}
      <div className="grid grid-cols-1 gap-3">
        {days.map((day) => (
          <Card key={day} className="border-violet-200 shadow-none">
            <CardContent className="pt-4 pb-4 px-5">
              {/* Row header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* toggle */}
                  <button
                    onClick={() => toggleDay(day)}
                    className={`w-9 h-5 rounded-full relative transition-colors ${
                      activeDays[day] ? "bg-violet-800" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                        activeDays[day] ? "translate-x-4" : ""
                      }`}
                    />
                  </button>

                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={12} className="text-violet-400" />
                    <span
                      className={`text-sm font-semibold ${
                        activeDays[day] ? "text-violet-950" : "text-slate-400"
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                </div>

                {activeDays[day] && (
                  <button
                    onClick={() => addSlot(day)}
                    className="text-xs text-violet-800 hover:text-violet-950 font-semibold"
                  >
                    + Add slot
                  </button>
                )}
              </div>

              {/* slots */}
              {activeDays[day] ? (
                schedule[day].length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {schedule[day].map((slot, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input
                          type="time"
                          value={slot.start}
                          onChange={(e) =>
                            updateSlot(day, i, "start", e.target.value)
                          }
                          className="h-8 border border-violet-200 rounded-lg px-2 text-xs"
                        />

                        <span className="text-xs text-slate-400">to</span>

                        <input
                          type="time"
                          value={slot.end}
                          onChange={(e) =>
                            updateSlot(day, i, "end", e.target.value)
                          }
                          className="h-8 border border-violet-200 rounded-lg px-2 text-xs"
                        />

                        <button
                          onClick={() => removeSlot(day, i)}
                          className="p-1.5 text-slate-400 hover:text-red-500"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">
                    No slots added — click “Add slot”
                  </p>
                )
              ) : (
                <p className="text-xs text-slate-400">Day disabled</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* footer button aligned like your dashboard actions */}
      <div className="flex justify-end">
        <Button className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold shadow-none">
          Save schedule
        </Button>
      </div>
    </div>
  );
}
