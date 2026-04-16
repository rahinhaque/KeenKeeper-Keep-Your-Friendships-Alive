"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";

export default function FriendDetail() {
  const params = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriend = async () => {
      try {
        const response = await fetch("/friends.json");
        const friends = await response.json();
        const foundFriend = friends.find((f) => f.id === parseInt(params.id));
        setFriend(foundFriend);
      } catch (error) {
        console.error("Error fetching friend:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchFriend();
    }
  }, [params.id]);

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-yellow-100 text-yellow-700";
      case "on-track":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2c4f42]"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Friend not found
            </h1>
            <Link href="/">
              <button className="btn bg-[#2c4f42] text-white hover:bg-[#234035] border-none">
                Go Back Home
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-[#f8fafc] py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={friend.picture}
                      alt={friend.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {friend.name}
                  </h2>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${getStatusColor(friend.status)} mb-3`}
                  >
                    {getStatusText(friend.status)}
                  </span>
                  <div className="mb-3">
                    {friend.tags && friend.tags.length > 0 && (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        {friend.tags[0].toUpperCase()}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-4 italic">
                    "{friend.bio}"
                  </p>
                  <p className="text-gray-400 text-xs">Prefered: email</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <button className="w-full py-3 px-4 bg-white border border-gray-100 rounded shadow-sm text-sm font-medium text-[#1e3a8a] hover:bg-gray-50 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Snooze 2 Weeks
                </button>
                <button className="w-full py-3 px-4 bg-white border border-gray-100 rounded shadow-sm text-sm font-medium text-gray-800 hover:bg-gray-50 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Archive
                </button>
                <button className="w-full py-3 px-4 bg-white border border-gray-100 rounded shadow-sm text-sm font-medium text-red-500 hover:bg-red-50 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <div className="grid grid-cols-3 gap-5">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-3xl font-bold text-[#2c4f42] mb-2">
                    {friend.days_since_contact}
                  </p>
                  <p className="text-base text-gray-500">Days Since Contact</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-3xl font-bold text-[#2c4f42] mb-2">
                    {friend.goal}
                  </p>
                  <p className="text-base text-gray-500">Goal (Days)</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-2xl font-bold text-[#2c4f42] mb-2">
                    {formatDate(friend.next_due_date)}
                  </p>
                  <p className="text-base text-gray-500">Next Due</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-800 text-lg">
                    Relationship Goal
                  </p>
                  <button className="text-sm text-gray-600 border border-gray-200 px-3 py-1.5 rounded hover:bg-gray-50 bg-gray-50">
                    Edit
                  </button>
                </div>
                <p className="text-gray-600 text-lg">
                  Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="font-semibold text-gray-800 text-lg mb-5">
                  Quick Check-In
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <button className="flex flex-col items-center justify-center py-6 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-2 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span className="text-lg font-medium text-gray-700">
                      Call
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center py-6 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-2 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="text-lg font-medium text-gray-700">
                      Text
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center py-6 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-2 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg font-medium text-gray-700">
                      Video
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
