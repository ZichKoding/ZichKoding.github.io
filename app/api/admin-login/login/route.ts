import { verify } from 'crypto';
import jwt, { Secret } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { verifyUser } from '@/lib/verifyUser';

export async function POST(req: NextRequest): Promise<NextResponse | undefined> {
    const res = NextResponse

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

    return res.json({ token }, { status: 200 });
}
