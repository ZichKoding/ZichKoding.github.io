import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="flex flex-col bg-gradient-to-t from-sky-950 to-sky-400 items-center
                                w-full p-6 shadow- shadow-orange-950 z-10
                                rounded-b-sm sm:flex-row sm:justify-between">
                <Link href="/" className="font-bold text-4xl 
                                         text-white py-10 sm:py-0">
                    ZichKoding
                </Link>
                <nav className="flex flex-row gap-7 items-center 
                                justify-between text-xl text-white font-bold">
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/projects">
                        Projects
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    );
}