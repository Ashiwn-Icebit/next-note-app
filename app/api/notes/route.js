import jwt from 'jsonwebtoken';
import Note from '@/models/note';
import User from '@/models/user';
import clientPromise from '@/lib/mongodb';
import mongoose from 'mongoose';

// Handle GET requests (fetch notes)
export async function GET(request) {
    const token = request.cookies.get('token');

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Connect to the database
        await clientPromise;
        mongoose.connect(process.env.MONGODB_URI);

        // Find the user
        const user = await User.findOne({ email: decoded.email });
        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        // Fetch notes associated with the user
        const notes = await Note.find({ user: user._id });

        return new Response(JSON.stringify(notes), { status: 200 });
    } catch (error) {
        console.error('Error fetching notes:', error);
        return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
    }
}

// Handle POST requests (create new note)
export async function POST(request) {
    const token = request.cookies.get('token');

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Connect to the database
        await clientPromise;
        mongoose.connect(process.env.MONGODB_URI);

        // Get user data
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const { noteTitle, noteText } = await request.json();

        // Create a new note
        const newNote = new Note({
            noteTitle,
            noteText,
            user: user._id, // Associate the note with the logged-in user
        });

        await newNote.save();

        return new Response(JSON.stringify({ message: 'Note created successfully' }), { status: 201 });
    } catch (error) {
        console.error('Error creating note:', error);
        return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
    }
}

// Handle DELETE requests (delete a note)
export async function DELETE(request) {
    const token = request.cookies.get('token');

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Connect to the database
        await clientPromise;
        mongoose.connect(process.env.MONGODB_URI);

        // Get user data
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const { noteId } = await request.json(); // Get the noteId from the request

        // Find the note to delete
        const note = await Note.findOne({ _id: noteId, user: user._id }); // Ensure the note belongs to the user

        if (!note) {
            return new Response(JSON.stringify({ error: 'Note not found or unauthorized' }), { status: 404 });
        }

        // Delete the note
        await Note.deleteOne({ _id: noteId });

        return new Response(JSON.stringify({ message: 'Note deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting note:', error);
        return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
    }
}

// export const config = {
//     runtime: 'edge',
// };