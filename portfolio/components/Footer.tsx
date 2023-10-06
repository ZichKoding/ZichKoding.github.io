"use client"

import Link from 'next/link';
import { useState, useEffect, use } from 'react';

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
        <footer className="rounded-t-xl w-full 
                    bg-black text-white text-center 
                    p-4 shadow-md">
            <p>
                &copy; {`2021-${dateTime.year}`}{' '}
                <Link href="/" className="text-white hover:text-blue-300">
                    ZichKoding
                </Link>
            </p>
            <p className="text-blue-200">
                {dateTime.year} - {new Date(dateTime.year, dateTime.month - 1).toLocaleString('default', { month: 'long' })} {dateTime.day}{' '}
                {dateTime.hour}:{dateTime.minute}:{dateTime.second}
            </p>
        </footer>
    );
}