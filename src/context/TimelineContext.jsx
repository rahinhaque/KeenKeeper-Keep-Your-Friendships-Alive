"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timelineEntries, setTimelineEntries] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("keenkeeper-timeline");
    if (stored) {
      setTimelineEntries(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("keenkeeper-timeline", JSON.stringify(timelineEntries));
  }, [timelineEntries]);

  const addTimelineEntry = (friendName, type) => {
    const now = new Date();
    const newEntry = {
      id: Date.now(),
      friendName,
      type,
      date: now.toISOString(),
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friendName}`,
    };

    setTimelineEntries((prev) => [newEntry, ...prev]);
    setToast({
      message: `${newEntry.title} added to timeline!`,
      type: "success",
    });

    setTimeout(() => setToast(null), 4000);
  };

  return (
    <TimelineContext.Provider
      value={{
        timelineEntries,
        addTimelineEntry,
        toast,
        setToast,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a TimelineProvider");
  }
  return context;
}
