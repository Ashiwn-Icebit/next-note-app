"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SlideInNotifications from "@/components/SlideInNotifications/SlideInNotifications";
import Button from "@/components/Button/Button";


export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const res = await fetch("./api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Registration failed");
        return;
      }

      // Trigger notification and set success
      setNotifications([{ id: Date.now(), text: "Registration successful!" }]);
      setSuccess(true);

      // Wait for 1 second, then redirect to login page
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden z-10 bg-gray-800 p-8">
      <SlideInNotifications notifications={notifications} setNotifications={setNotifications} /> {/* Add Notification component */}

      <div className="flex items-start mt-[150px] justify-center h-screen relative">
        {/* <div className="w-1/4"> */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold text-white mb-6">Create Your Account</h2>

          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="password">
                Password
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end">
              {/* <button
                className="w-full mt-3 bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Sign Up
              </button> */}

              <Button
                className="w-full mt-3 bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                value="Sign Up"
                type="submit"
              // onClick={() => console.log('Sign up!')}
              />

            </div>
          </form>

          <div className="mt-1">
            <h5 className="text-white py-2">
              Already have an account?{" "}
              <Link href="/login" className="text-white pl-1 font-bold">
                Login Here
              </Link>
            </h5>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
