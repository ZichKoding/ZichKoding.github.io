"use client"

import Link from 'next/link';
import { useState, useEffect, use } from 'react';

// const IMG_URL = "https://th-thumbnailer.cdn-si-edu.com/fYvl2DtHz91U-teHxzU1zz53mGU=/1000x750/filters:no_upscale():focal(1633x731:1634x732)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b4/a6/b4a67cc0-c66e-4634-8c59-c5a6c1372aeb/farfarout-illustration-scaled.jpg";
const IMG_URL = "https://www.smithsonianmag.com/smart-news/meet-farfarout-most-distant-object-solar-system-180977033/"

interface DateTime {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}

export default function Footer() {
    const [dateTime, setDateTime] = useState<DateTime>({
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    });
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setDateTime({
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="relative flex flex-col sm:flex-row gap-3 bottom-0 ml-auto rounded-t-3xl w-full 
                            text-orange-200 text-center border-t-2 border-sky-200
                            p-3 mt-5 justify-evenly">
            <p>
                &copy; {`2021-${dateTime.year}`}{' '}
                <Link href="/" className="text-white hover:text-blue-300">
                    ZichKoding
                </Link>
            </p>
            <p className="font-extrabold italic text-orange-500">
                {dateTime.year} - {new Date(dateTime.year, dateTime.month - 1).toLocaleString('default', { month: 'long' })} {dateTime.day}{' '}
                {dateTime.hour}:{dateTime.minute}:{dateTime.second}
            </p>
        </footer>
    );
}