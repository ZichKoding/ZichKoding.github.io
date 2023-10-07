import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="sticky sm:absolute top-0 flex sm:flex-col gap-2 sm:gap-5
                                p-3 sm:p-6 z-10 text-sky-200 text-opacity-90
                                ml-auto">
                <Link href="/" className="bg-orange-800 bg-opacity-90 shadow-lg shadow-sky-950 
                                        hover:bg-sky-800 hover:bg-opacity-90 hover:text-orange-200
                                        hover:shadow-orange-950
                                        p-3 sm:p-5 h-fit text-2xl align-center font-bold rounded-lg">
                    ZichKoding
                </Link>
                <nav className="flex flex-col gap-7 items-center 
                                justify-between text-lg font-semibold
                                bg-orange-800 bg-opacity-90 shadow-lg shadow-sky-950 
                                p-3 mr-3 rounded-lg">
                    <Link href="/about" className="hover:bg-sky-800 hover:bg-opacity-90 hover:text-orange-200
                                        hover:shadow-orange-950 w-full text-center rounded-lg">
                        About
                    </Link>
                    <Link href="/projects" className="hover:bg-sky-800 hover:bg-opacity-90 hover:text-orange-200
                                        hover:shadow-orange-950 w-full text-center rounded-lg">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:bg-sky-800 hover:bg-opacity-90 hover:text-orange-200
                                        hover:shadow-orange-950 w-full text-center rounded-lg">
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    );
}