"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { RiPencilLine } from "react-icons/ri";
import Button from "@/components/Button/Button";
import NoteCard from "@/components/NoteCard/NoteCard";

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

  const onEdit = () => {
    console.log("Edit Button clicked")
  }
  const onDelete = () => {
    console.log("Delete Button clicked")
  }
  const handleSubmit = () => {
    console.log("Note Submitted")
  }



  return (
    <div className="h-screen bg-slate-800">

      <header className="bg-slate-800 shadow-md p-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <h3 className="font-bold text-white custom-font">Notes</h3>
          <RiPencilLine className="text-white" />
        </div>

        <div className="font-bold text-white cursor-pointer">
          <button onClick={handleLogout}>Logout</button>
        </div>

      </header>

      <main className="p-4">

        <div>
          <input type="text" name="noteTitle" placeholder="Title" />
          <input type="text" name="noteContent" placeholder="Text" />
          <Button
            className="bg-slate-400 px-3 py-1 mr-2"
            value="Save"
            onClick={handleSubmit}
          />
        </div>

        <NoteCard
          noteTitle={"noteTitle"}
          noteContent={"noteContent"}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      </main>

    </div>
  );
};

export default Dashboard;