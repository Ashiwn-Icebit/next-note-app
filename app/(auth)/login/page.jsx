"use client";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Login failed");
        return;
      }

      const data = await res.json();
      localStorage.setItem("token", data.token); // Store JWT token
      localStorage.setItem("userEmail", email);

      setSuccess(true);
      router.push("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden z-10 bg-gray-800 p-4 sm:p-8 before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
    >
      <div className="flex items-start mt-[150px] justify-center h-full relative">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Login</h2>

          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="name">
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
              <label className="block text-sm font-medium text-gray-300" htmlFor="email">
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
                value="Login"
              >
                Login
              </button> */}

              <Button
                className="w-full mt-3 bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                value="Login"
                type="submit"
              // onClick={() => console.log('Login!')}
              />

            </div>
          </form>

          <div className="mt-4">
            <h5 className="text-white py-2">
              Don&apos;t have an account?{" "}
              <Link href={"/register"} className="text-white pl-1 font-bold">
                Create one
              </Link>
            </h5>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>Login successfully!</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
