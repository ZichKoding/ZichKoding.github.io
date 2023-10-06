import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="flex flex-col bg-black border-b items-center w-full p-6 sm:flex-row sm:justify-between">
                <Link href="/" className="font-bold text-4xl text-white py-10 sm:py-0">
                    ZichKoding
                </Link>
                <nav className="flex flex-row gap-7 items-center justify-between text-xl text-white font-bold">
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