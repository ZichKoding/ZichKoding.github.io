import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="sticky sm:absolute top-0 flex sm:flex-col gap-2 sm:gap-5
                                p-3 sm:p-6 z-10 ml-auto">
                <Link href="/" className="text-opacity-80 border-b-2 border-r-2 md:border-r-0 md:border-l-2  
                                        border-sky-200 text-white hover:text-orange-200 p-3 sm:p-5 h-fit 
                                        text-2xl align-center font-bold rounded-lg bg-slate-950 
                                        shadow-md shadow-slate-950 ">
                    ZichKoding
                </Link>
                <nav className="flex flex-col gap-7 items-center 
                                justify-between text-lg font-semibold
                                text-opacity-80 border-b-2 border-r-2 md:border-r-0 md:border-l-2  
                                border-sky-200 shadow-md shadow-slate-950 
                                bg-slate-950 p-3 mr-3 rounded-lg">
                    <Link href="/about" className="text-white hover:text-orange-200
                                        hover:shadow-orange-950 w-full text-center rounded-lg">
                        About
                    </Link>
                    <Link href="/projects" className="text-white hover:text-orange-200
                                        hover:shadow-orange-950 w-full text-center rounded-lg">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-white hover:text-orange-200
                                        hover:shadow-orange-950 w-full text-center rounded-lg">
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    );
}