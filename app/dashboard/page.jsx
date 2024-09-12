"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect if no token
    }
  }, [router]);

  const handleLogout = () => {
    // Clear JWT token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    // Optionally clear token from cookies if used
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
          Notes App
        </div>
        <nav className="flex-grow p-4">
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All Notes
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create New Note
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A6.974 6.974 0 0112 15.5a6.978 6.978 0 016.879 2.304M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Profile
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H3"
                  />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="relative">
              <button className="focus:outline-none">
                <img
                  className="w-10 h-10 rounded-full border border-gray-300"
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </header>

        {/* Notes Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">My Notes</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              + New Note
            </button>
          </div>

          {/* Notes List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Note */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Note 1</h3>
              <p className="mt-2 text-sm text-gray-600">
                This is a short description of Note 1.
              </p>
              <button className="mt-4 text-sm text-blue-500">View More</button>
            </div>

            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Note 2</h3>
              <p className="mt-2 text-sm text-gray-600">
                This is a short description of Note 2.
              </p>
              <button className="mt-4 text-sm text-blue-500">View More</button>
            </div>

            <div className="bg-white p-4 shadow rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Note 3</h3>
              <p className="mt-2 text-sm text-gray-600">
                This is a short description of Note 3.
              </p>
              <button className="mt-4 text-sm text-blue-500">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
