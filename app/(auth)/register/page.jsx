"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
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

      // On successful registration, redirect to login or another page
      router.push("/login");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="mx-auto h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="bg-yellow-100 p-6">
          <div className="mb-4">
            <input
              type="email"
              className="bg-gray-50 bg-opacity-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="bg-gray-50 bg-opacity-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="submit"
              className="bg-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer hover:bg-blue-600"
              value="Create Account"
            />
          </div>
        </form>
        <div>
          <h5 className="text-white py-2">
            Already have an account?{" "}
            <Link href={"/login"} className="text-rose-500">
              Login Here
            </Link>
          </h5>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>Registration successful!</p>}
      </div>
    </div>
  );
}