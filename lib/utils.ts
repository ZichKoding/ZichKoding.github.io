import { cookies } from 'next/headers';

export function isLoggedIn() : boolean {
    const cookieStore = cookies();

    console.log(cookieStore.get('token'));
    
    if (cookieStore.get('token') === undefined) {
        console.log(false);
        return false;
    }
    
    return true;
} 