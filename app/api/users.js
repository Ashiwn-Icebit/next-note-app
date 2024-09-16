import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db('note-app');

        const users = await db.collection('users').find({}).toArray();

        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ error: 'Unable to fetch users' });
    }
}