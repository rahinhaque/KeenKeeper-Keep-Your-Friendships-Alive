"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TimelineProvider } from "@/context/TimelineContext";
import Toast from "@/components/shared/Toast";
import { useTimeline } from "@/context/TimelineContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function LayoutContent({ children }) {
  const { toast } = useTimeline();

  return (
    <>
      {children}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TimelineProvider>
          <LayoutContent>{children}</LayoutContent>
        </TimelineProvider>
      </body>
    </html>
  );
}
