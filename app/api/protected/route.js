import jwt from 'jsonwebtoken';

export async function GET(request) {
    const token = request.cookies.get('token'); // Or extract token from headers

    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Proceed with logic for authenticated users
        return new Response(JSON.stringify({ message: 'Protected content', user: decoded }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
    }
}