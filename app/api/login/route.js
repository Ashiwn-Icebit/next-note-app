import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '@/models/user';
import clientPromise from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function POST(request) {
    const { email, password } = await request.json();

    try {
        await clientPromise; // Ensures connection to MongoDB
        mongoose.connect(process.env.MONGODB_URI);

        // Find the user in the database
        const user = await User.findOne({ email });
        if (!user) {
            return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
        }

        // Compare provided password with hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Successful login
        return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
    } catch (error) {
        console.error("Error during login:", error);
        return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), { status: 500 });
    }
}

