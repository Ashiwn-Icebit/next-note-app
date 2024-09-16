export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const client = await clientPromise;
            const db = client.db('test'); // Use your database name

            // Fetching notes
            const notes = await db.collection('notes').find({}).toArray();

            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch notes' });
        }
    }
}
