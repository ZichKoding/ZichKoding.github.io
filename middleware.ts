import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: '/api/admin-login/:function*',
}

export async function middleware(req: NextRequest, next: () => void) {
    const res = NextResponse;

    const params = req.nextUrl.searchParams;
    const username = params.get('username');
    const password = params.get('password');

    // Verify that the username and password are present in the request body
    if (!username || !password) {
        return res.json({ message: 'Username and password are required' }, { status: 400 });
    }
    // If the username and password are valid, continue to the next middleware or route handler
    return;
}
