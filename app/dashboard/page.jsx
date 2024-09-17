"use client";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import Button from "@/components/Button/Button";
import NoteCard from "@/components/NoteCard/NoteCard";
import withAuth from "@/components/AuthGuard/WithAuth";


const Dashboard = () => {
  const router = useRouter();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect if no token
    } else {
      fetchNotes(); // Fetch notes after checking token
    }
  }, [router]);

  // Fetch notes of the logged-in user
  const fetchNotes = async () => {
    const userEmail = localStorage.getItem("userEmail");

    try {
      const response = await fetch(`/api/notes?userEmail=${userEmail}`);
      if (response.ok) {
        const data = await response.json();
        setNotes(data); // Set notes to the state
      } else {
        console.error("Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Create new note
  // const handleSubmit = async () => {
  //   const payload = {
  //     noteTitle: noteTitle,
  //     noteText: noteContent,
  //     userEmail: localStorage.getItem("userEmail"),
  //   };

  //   try {
  //     const response = await fetch("/api/notes", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();

  //       // Clear the input fields after successful submission
  //       setNoteTitle("");
  //       setNoteContent("");

  //       // Fetch notes again to update the list
  //       fetchNotes();
  //     } else {
  //       const errorData = await response.json();
  //       console.error("Error submitting note:", errorData.error);
  //     }
  //   } catch (error) {
  //     console.error("Failed to submit note:", error);
  //   }
  // };

  // Function to handle submitting a new or edited note
  const handleSubmit = async () => {
    const payload = {
      noteTitle: noteTitle,
      noteText: noteContent,
      userEmail: localStorage.getItem("userEmail"),
    };

    try {
      // If editing, send a PUT request to update the note
      if (editingNoteId) {
        const response = await fetch(`/api/notes?id=${editingNoteId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setEditingNoteId(null); // Reset the editing state
        } else {
          const errorData = await response.json();
          console.error("Error updating note:", errorData.error);
        }
      } else {
        // If not editing, create a new note
        const response = await fetch("/api/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
        } else {
          const errorData = await response.json();
          console.error("Error creating note:", errorData.error);
        }
      }

      // Clear input fields after save or update
      setNoteTitle("");
      setNoteContent("");
      fetchNotes(); // Fetch notes again to update the list
    } catch (error) {
      console.error("Failed to submit note:", error);
    }
  };

  // Logout Fuction
  const handleLogout = () => {
    // Clear JWT token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    // Optionally clear token from cookies if used
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

    // Redirect to login page
    router.push("/login");
  };

  // Function to handle editing a note
  const handleEdit = (note) => {
    setNoteTitle(note.noteTitle); // Pre-fill the title field
    setNoteContent(note.noteText); // Pre-fill the content field
    setEditingNoteId(note._id); // Set the note ID for editing
  };

  // Delete note function
  const handleDelete = async (noteId) => {
    try {
      const response = await fetch(`/api/notes?id=${noteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchNotes(); // Refresh the notes list after deletion
      } else {
        const errorData = await response.json();
        console.error("Error deleting note:", errorData.error);
      }
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };



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

          <input
            type="text"
            name="noteTitle"
            placeholder="Enter Your Note Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />

          <input
            type="text"
            name="noteContent"
            placeholder="Enter Your Note Content"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />

          <Button
            className="bg-slate-400 px-3 py-1 mr-2"
            value="Save"
            onClick={handleSubmit}
          />

        </div>

        {notes.map(note => (
          <NoteCard
            key={note._id}
            noteTitle={note.noteTitle}
            noteContent={note.noteText}
            onEdit={() => handleEdit(note)}
            onDelete={() => handleDelete(note._id)}
          />
        ))}

      </main>

    </div>
  );
};

// export default Dashboard;
export default withAuth(Dashboard);