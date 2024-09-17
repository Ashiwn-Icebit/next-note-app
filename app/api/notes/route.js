import clientPromise from '@/lib/mongodb';
import Note from '@/models/note';
import User from '@/models/user';
import mongoose from 'mongoose';

export async function POST(request) {
    try {
        // Connect to the database
        await clientPromise;
        mongoose.connect(process.env.MONGODB_URI);

        // Parse the request body
        const body = await request.json();
        const { noteTitle, noteText, userEmail } = body;

        // Validate input
        if (!noteTitle || !noteText || !userEmail) {
            return new Response(JSON.stringify({ error: "All fields are required" }), {
                status: 400,
            });
        }

        // Find the user by email
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return new Response(JSON.stringify({ error: "User not found" }), {
                status: 404,
            });
        }

        // Create a new note and associate it with the found user
        const newNote = new Note({
            noteTitle,
            noteText,
            user: user._id,
        });

        // Save the note to the database
        await newNote.save();

        return new Response(JSON.stringify({ message: "Note saved successfully" }), {
            status: 201,
        });
    } catch (error) {
        console.error("Error saving note:", error);
        return new Response(JSON.stringify({ error: "Failed to save note" }), {
            status: 500,
        });
    }
}

export async function GET(request) {
    try {
        // Connect to the database
        await clientPromise;
        mongoose.connect(process.env.MONGODB_URI);

        const { searchParams } = new URL(request.url);
        const userEmail = searchParams.get('userEmail');

        if (!userEmail) {
            return new Response(JSON.stringify({ error: 'Logged in is required' }), {
                status: 400,
            });
        }

        // Find the user by email
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), {
                status: 404,
            });
        }

        // Fetch all notes associated with the user
        const notes = await Note.find({ user: user._id }).sort({ createdAt: -1 }); // Sort by latest notes first

        return new Response(JSON.stringify(notes), {
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching notes:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch notes' }), {
            status: 500,
        });
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const noteId = searchParams.get('id'); // Get the note ID from query params

    // Check if the ID is provided
    if (!noteId) {
        return new Response(JSON.stringify({ error: 'Note ID is required' }), { status: 400 });
    }

    try {
        // Database connection
        await clientPromise;
        mongoose.connect(process.env.MONGODB_URI);

        // Delete the note by ID
        await Note.findByIdAndDelete(noteId);

        return new Response(JSON.stringify({ message: 'Note deleted successfully' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to delete note' }), { status: 500 });
    }
}

export async function PUT(request) {
    const { searchParams } = new URL(request.url);
    const noteId = searchParams.get('id'); // Get the note ID from query params

    const body = await request.json();

    // Check if the ID is provided
    if (!noteId) {
        return new Response(JSON.stringify({ error: 'Note ID is required' }), { status: 400 });
    }

    try {
        // Database connection
        await clientPromise;
        mongoose.connect(process.env.MONGODB_URI);

        // Update the note by ID
        const updatedNote = await Note.findByIdAndUpdate(noteId, {
            noteTitle: body.noteTitle,
            noteText: body.noteText,
        }, { new: true }); // {new: true} to return the updated note

        if (!updatedNote) {
            return new Response(JSON.stringify({ error: 'Note not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(updatedNote), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to update note' }), { status: 500 });
    }
}





// code with protected route changes which will verify token first before use of these apis

// import clientPromise from '@/lib/mongodb';
// import Note from '@/models/note';
// import User from '@/models/user';
// import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';

// // Helper function to verify token
// const verifyToken = (request) => {
//   const authorizationHeader = request.headers.get('authorization');
//   if (!authorizationHeader) {
//     return { isValid: false, error: 'Token missing' };
//   }

//   const token = authorizationHeader.split(' ')[1]; // Extract token from 'Bearer <token>'
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     return { isValid: true, decoded };
//   } catch (error) {
//     return { isValid: false, error: 'Invalid token' };
//   }
// };

// export async function POST(request) {
//   // Verify token
//   const { isValid, error, decoded } = verifyToken(request);
//   if (!isValid) {
//     return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//   }

//   try {
//     // Connect to the database
//     await clientPromise;
//     mongoose.connect(process.env.MONGODB_URI);

//     // Parse the request body
//     const body = await request.json();
//     const { noteTitle, noteText, userEmail } = body;

//     // Validate input
//     if (!noteTitle || !noteText || !userEmail) {
//       return new Response(JSON.stringify({ error: "All fields are required" }), {
//         status: 400,
//       });
//     }

//     // Find the user by email
//     const user = await User.findOne({ email: userEmail });
//     if (!user) {
//       return new Response(JSON.stringify({ error: "User not found" }), {
//         status: 404,
//       });
//     }

//     // Create a new note and associate it with the found user
//     const newNote = new Note({
//       noteTitle,
//       noteText,
//       user: user._id,
//     });

//     // Save the note to the database
//     await newNote.save();

//     return new Response(JSON.stringify({ message: "Note saved successfully" }), {
//       status: 201,
//     });
//   } catch (error) {
//     console.error("Error saving note:", error);
//     return new Response(JSON.stringify({ error: "Failed to save note" }), {
//       status: 500,
//     });
//   }
// }

// export async function GET(request) {
//   // Verify token
//   const { isValid, error, decoded } = verifyToken(request);
//   if (!isValid) {
//     return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//   }

//   try {
//     // Connect to the database
//     await clientPromise;
//     mongoose.connect(process.env.MONGODB_URI);

//     const { searchParams } = new URL(request.url);
//     const userEmail = searchParams.get('userEmail');

//     if (!userEmail) {
//       return new Response(JSON.stringify({ error: 'Logged in is required' }), {
//         status: 400,
//       });
//     }

//     // Find the user by email
//     const user = await User.findOne({ email: userEmail });
//     if (!user) {
//       return new Response(JSON.stringify({ error: 'User not found' }), {
//         status: 404,
//       });
//     }

//     // Fetch all notes associated with the user
//     const notes = await Note.find({ user: user._id }).sort({ createdAt: -1 }); // Sort by latest notes first

//     return new Response(JSON.stringify(notes), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error('Error fetching notes:', error);
//     return new Response(JSON.stringify({ error: 'Failed to fetch notes' }), {
//       status: 500,
//     });
//   }
// }

// export async function DELETE(request) {
//   // Verify token
//   const { isValid, error, decoded } = verifyToken(request);
//   if (!isValid) {
//     return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//   }

//   const { searchParams } = new URL(request.url);
//   const noteId = searchParams.get('id'); // Get the note ID from query params

//   // Check if the ID is provided
//   if (!noteId) {
//     return new Response(JSON.stringify({ error: 'Note ID is required' }), { status: 400 });
//   }

//   try {
//     // Database connection
//     await clientPromise;
//     mongoose.connect(process.env.MONGODB_URI);

//     // Ensure the note belongs to the logged-in user
//     const note = await Note.findOneAndDelete({ _id: noteId, user: decoded.userId });

//     if (!note) {
//       return new Response(JSON.stringify({ error: 'Note not found or unauthorized' }), { status: 404 });
//     }

//     return new Response(JSON.stringify({ message: 'Note deleted successfully' }), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Failed to delete note' }), { status: 500 });
//   }
// }

// export async function PUT(request) {
//   // Verify token
//   const { isValid, error, decoded } = verifyToken(request);
//   if (!isValid) {
//     return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//   }

//   const { searchParams } = new URL(request.url);
//   const noteId = searchParams.get('id'); // Get the note ID from query params

//   const body = await request.json();

//   // Check if the ID is provided
//   if (!noteId) {
//     return new Response(JSON.stringify({ error: 'Note ID is required' }), { status: 400 });
//   }

//   try {
//     // Database connection
//     await clientPromise;
//     mongoose.connect(process.env.MONGODB_URI);

//     // Ensure the note belongs to the logged-in user before updating
//     const updatedNote = await Note.findOneAndUpdate(
//       { _id: noteId, user: decoded.userId },
//       {
//         noteTitle: body.noteTitle,
//         noteText: body.noteText,
//       },
//       { new: true }
//     );

//     if (!updatedNote) {
//       return new Response(JSON.stringify({ error: 'Note not found or unauthorized' }), { status: 404 });
//     }

//     return new Response(JSON.stringify(updatedNote), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Failed to update note' }), { status: 500 });
//   }
// }