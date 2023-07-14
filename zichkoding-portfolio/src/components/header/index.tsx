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
            <header data-theme="dark" className="navbar bg-base-100" aria-label="Header of ZichKoding">
                <h1 className="flex-1" aria-label="Welcome to ZichKoding!">
                    <a className="btn btn-ghost normal-case text-xl" href='/'>
                        {hello}
                    </a>
                </h1>

                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1 md:container'>
                        <li>
                            <a className='btn btn-ghost normal-case' href='/bio'>
                                Bio
                            </a>
                        </li>
                        <li>
                            <a className='btn btn-ghost normal-case' href='/projects'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className='btn btn-ghost normal-case' href='/resume'>
                                Resume
                            </a>
                        </li>
                        <li>
                            <a className='btn btn-ghost normal-case' href='/contact'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

