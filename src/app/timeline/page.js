"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { useTimeline } from "@/context/TimelineContext";
import { useState } from "react";

export default function Timeline() {
  const { timelineEntries } = useTimeline();
  const [filter, setFilter] = useState("all");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "call":
        return "📞";
      case "text":
        return "💬";
      case "video":
        return "📹";
      default:
        return "💛";
    }
  };

  const filteredEntries = filter === "all" 
    ? timelineEntries 
    : timelineEntries.filter(entry => entry.type === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-[#f8fafc] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Timeline</h1>
          <div className="mb-6">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-3 w-80 cursor-pointer"
            >
              <option value="all">All interactions</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
          </div>
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {filter === "all" ? "No timeline entries yet" : `No ${filter} entries yet`}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Start by checking in with a friend!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-white rounded-lg border border-gray-100 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{getTypeIcon(entry.type)}</div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-800 text-lg">
                          {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                        </span>{" "}
                        with {entry.friendName}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">{formatDate(entry.date)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
