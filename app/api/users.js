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


// import clientPromise from '@/lib/mongodb';

// export default async function handler(req, res) {
//     try {
//         // Connect to the MongoDB client
//         const client = await clientPromise;

//         // Use the 'all-users' database explicitly
//         const db = client.db('all-users');

//         // Make sure you're working with the 'all-users' database
//         console.log('Connected to database:', db.databaseName);

//         if (req.method === 'POST') {
//             const { name, email } = req.body;

//             // Insert the user data into the 'users' collection
//             await db.collection('users').insertOne({ name, email });

//             res.status(201).json({ message: 'User created successfully' });
//         } else if (req.method === 'GET') {
//             // Fetch all users from the 'users' collection in the 'all-users' database
//             const users = await db.collection('users').find({}).toArray();
//             res.status(200).json(users);
//         } else {
//             res.setHeader('Allow', ['GET', 'POST']);
//             res.status(405).end(`Method ${req.method} Not Allowed`);
//         }
//     } catch (e) {
//         console.error(e);
//         res.status(500).json({ error: 'Unable to perform the operation' });
//     }
// }
