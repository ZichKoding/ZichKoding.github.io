import { Inter } from 'next/font/google';
import Header from '../components/header';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col justify-between p-24 ${inter.className}`}
      >
        <p className="text-xl text-center">
          Feel free to look at my bio, projects, and resume! If you want to contact me, you can do so through the contact page. If you want a quick overview of my skills, just scroll down!
        </p>
      </main>
    </>
  );
}
