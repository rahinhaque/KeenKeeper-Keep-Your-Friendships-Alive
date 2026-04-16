"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HashLoader } from "react-spinners";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch("/friends.json");
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      } finally {
        await new Promise(resolve => setTimeout(resolve, 800));
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-amber-400 text-white";
      case "on-track":
        return "bg-[#2c4f42] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusText = (status) => {
    if (status === "almost due") return "Almost Due";
    if (status === "on-track") return "On-Track";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  if (loading) {
    return (
      <div className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Your Friends
          </h2>
          <div className="flex items-center justify-center py-12">
            <HashLoader color="#2c4f42" size={60} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link
              key={friend.id}
              href={`/friends/${friend.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={friend.picture}
                    alt={friend.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {friend.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {friend.days_since_contact}d ago
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 rounded-full text-xs font-semibold text-green-800"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(friend.status)}`}
                >
                  {getStatusText(friend.status)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
