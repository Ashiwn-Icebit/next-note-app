import bcrypt from 'bcrypt';
import User from '@/models/user';
import clientPromise from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function POST(request) {
    const { email, password } = await request.json();

    await clientPromise;
    mongoose.connect(process.env.MONGODB_URI);

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user in the database
    try {
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error registering user' }), { status: 400 });
    }
}