import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
    const token = req.cookies.get('token'); // Extract token from cookies
    const url = req.nextUrl.clone();

    // Check if the token is present
    if (token) {
        try {
            // Verify the token
            jwt.verify(token, process.env.JWT_SECRET);

            // Redirect authenticated users away from login and register pages
            if (url.pathname === '/login' || url.pathname === '/register') {
                return NextResponse.redirect(new URL('/dashboard', req.url));
            }
        } catch (error) {
            // Handle token verification errors
            console.error('Token verification failed:', error);
        }
    } else {
        // Redirect unauthenticated users to login/register if they try to access protected pages
        if (url.pathname === '/dashboard' || url.pathname.startsWith('/dashboard/')) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/register', '/dashboard/:path*'], // Apply middleware to specific routes
};