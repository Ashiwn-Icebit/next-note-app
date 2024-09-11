"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setError(null); // Reset any previous errors

  //   try {
  //     const res = await fetch("/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!res.ok) {
  //       const errorData = await res.json();
  //       setError(errorData.error || "Login failed");
  //       return;
  //     }

  //     // If the login is successful, redirect to a dashboard or home page
  //     setSuccess(true);
  //     router.push("/dashboard"); // Redirect to the dashboard or home page
  //   } catch (error) {
  //     setError("Something went wrong. Please try again.");
  //   }
  // };

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
      router.push("/"); // Redirect to the dashboard
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="mx-auto h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Login Your Account
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
              value="Login"
            />
          </div>
        </form>
        <div>
          <h1></h1>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>Registration successful!</p>}
      </div>
    </div>
  );
}

export default LoginPage;