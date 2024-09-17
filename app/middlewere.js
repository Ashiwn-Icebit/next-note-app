// import { NextResponse } from 'next/server';

// export function middleware(request) {
//     // Get the token from cookies (or localStorage in a client-side check)
//     const token = request.cookies.get('token')?.value;

//     const publicRoutes = ['/login', '/register', '/'];

//     const { pathname } = request.nextUrl;

//     // Allow access to public routes
//     if (publicRoutes.includes(pathname)) {
//         return NextResponse.next();
//     }

//     // If the token is not available, redirect to login
//     if (!token) {
//         const loginUrl = new URL('/login', request.url);
//         return NextResponse.redirect(loginUrl);
//     }

//     // If token exists, continue to the requested route
//     return NextResponse.next();
// }

// // Apply middleware to all routes
// export const config = {
//     matcher: ['/((?!_next|favicon.ico).*)'],
// };
