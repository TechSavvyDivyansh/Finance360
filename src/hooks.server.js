// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function handle({ event, resolve }) {
    const token = event.cookies.get('access_token'); // Get JWT from cookie

    if (event.url.pathname.startsWith('/dashboard')) { // Protect dashboard routes
        if (!token) {
            throw redirect(302, '/login'); // Redirect if no token
        }

        try {
            const currentUser = jwt.verify(token, JWT_SECRET);
            event.locals.currentUser = currentUser; // Store user data in locals
        } catch (err) {
            event.cookies.delete('access_token'); // Delete invalid token
            throw redirect(302, '/login');
        }
    }

    return resolve(event);
}
