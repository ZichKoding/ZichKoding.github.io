import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    const get_John = async () => {
      const res = await fetch('/api/hello');
      const data = await res.json();
      let name: string = data.name;
      setHello(name);
    }
    get_John();
  }, []);
 
  return (
        <>
            <header data-theme="" className="" aria-label="Header of ZichKoding">
                <h1 className="" aria-label="Welcome to ZichKoding!">
                    Welcome to {hello}!
                </h1>

                <div>
                    <ul>
                        <li>Bio</li>
                        <li>Projects</li>
                        <li>Resume</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

