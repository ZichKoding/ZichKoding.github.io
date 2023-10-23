'use client';
import { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        });
        // if successful, redirect to the dashboard
        if ((await response).status === 200) {
            window.location.href = '/admin/dashboard';
        }
    };

    return (
        <form onSubmit={handleSubmit} className="justify-center items-center">
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button
                className="btn btn-primary"
                onSubmit={handleSubmit} 
                type="submit"
                >
                    Submit
            </button>
        </form>
    );
}
