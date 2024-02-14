'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // add username to a query parameter
        const query_params = `?username=${email}&password=${password}`;
        // post to the login endpoint
        const response = fetch(`/api/admin-login/login${query_params}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).catch(error => error);

        const status = (await response).status;
        
        // if successful, redirect to the dashboard
        if (status === 200) {
            router.push('/admin/dashboard');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="h-screen flex flex-col items-center justify-center">
            <label className="text-white">
                Email:
                <input className="text-black" type="email" value={email} autoComplete='username' onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label className="text-white">
                Password:
                <input className="text-black" type="password" value={password} autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button
                className="btn text-white bg-black hover:bg-gray-700 p-3 rounded-md"
                onSubmit={handleSubmit} 
                type="submit"
                >
                    Submit
            </button>
        </form>
    );
}
