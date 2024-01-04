import { verify } from 'crypto';
import jwt, { Secret } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { verifyUser } from '@/lib/verifyUser';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest): Promise<NextResponse | undefined> {
    const res = NextResponse
    const cookieStore = cookies();

    const params = req.nextUrl.searchParams;
    const username = params.get('username');
    const password = params.get('password');

    if (!username || !password) {
        return res.json({ message: 'Username and password are required' }, { status: 400 });
    }

    const user = await verifyUser(username, password);
    if (!user) {
        return res.json(
            { message: 'Invalid username or password' }, 
            { status: 401 }
        );
    }

    const secret = process.env.JWT_SECRET as Secret;
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });

    const cookie = cookieStore.set({
        name: 'token',
        value: token,
        httpOnly: true,
        path: '/admin',
        sameSite: 'strict',
        secure: true,
        maxAge: 3600
    });

    return res.json({
        status: 200,
        body:{
            token: token
        },
        headers: {
            'Set-Cookie': `token=${token}`
        }
    });
}
