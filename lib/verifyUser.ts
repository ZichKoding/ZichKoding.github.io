import { sql } from '@vercel/postgres';

async function findUserByUsername(username: string) {
    const query = await sql`SELECT * FROM login WHERE username = ${username}`;

    if (!query || query.rowCount === 0) {
        return false;
    } else {
        const user = query.rows[0];
        return user;
    }
}

export async function comparePassword(password: string, submittedPassword: string) {
    const isPasswordValid = password === submittedPassword;
    return isPasswordValid;
}

export async function verifyUser(username: string, password: string) {
    const user = await findUserByUsername(username);
    if (!user) {
        return false;
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
        return false;
    }

    return user;
}