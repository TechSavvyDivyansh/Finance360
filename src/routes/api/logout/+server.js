import { json } from '@sveltejs/kit';

export async function GET({cookies})
{
    try {
        cookies.set('access_token', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            expires: new Date(0) // Set expiration to past
        });

        return json({ message: 'Logged out successfully' });
        
    } catch (error) {
        console.log(error)
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}