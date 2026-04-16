"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { useTimeline } from "@/context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function Stats() {
  const { timelineEntries } = useTimeline();

  const countInteractions = () => {
    const counts = { call: 0, text: 0, video: 0 };
    timelineEntries.forEach((entry) => {
      if (counts[entry.type] !== undefined) {
        counts[entry.type]++;
      }
    });

    return [
      { name: "Text", value: counts.text, color: "#7c3aed" },
      { name: "Call", value: counts.call, color: "#1f2937" },
      { name: "Video", value: counts.video, color: "#16a34a" },
    ];
  };

  const data = countInteractions();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-[#f8fafc] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Friendship Analytics
          </h1>
          <div className="bg-white rounded-lg border border-gray-100 p-8 shadow-sm">
            <p className="text-lg font-semibold text-[#2c4f42] mb-8">
              By Interaction Type
            </p>
            <div className="h-80 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
