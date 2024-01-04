import { isLoggedIn } from '@/lib/utils';
import { redirect } from 'next/navigation';

export default function AdminDashboardPage() {
    const loggedIn = isLoggedIn();
    
    if (!loggedIn) {
        console.log('Not logged in....');
        
        redirect('/admin');
    } 

    return (
        <div className="flex justify-center items-center h-screen">
            <h1>Admin Dashboard</h1>
            <p>This is the admin dashboard.</p>
        </div>
    );
}
