import { Inter } from 'next/font/google';
import Header from '../components/header';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

type ScrollY = {
  scrollY: number;
  newScrollNum: number;
};

export default function Home() {
  const [prevScrollY, setPrevScrollY] = useState<ScrollY>({
    scrollY: 0,
    newScrollNum: 0,
  });
  const [isNum, setIsNum] = useState<ScrollY>({ newScrollNum: 0, scrollY: 0 });
  const [stars, setStars] = useState<HTMLDivElement[]>([]);

  const generateStars = () => {
    const container = document.getElementById('space-background');
    if (container) {
      const starCount = 25; // Adjust the number of stars as desired (reduced to a quarter)
      const newStars: HTMLDivElement[] = [];
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        container.appendChild(star);
        newStars.push(star);
      }
      setStars(newStars);
    }
  };

  useEffect(() => {
    generateStars();

    const moveStars = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.scrollY) {
        setStars((prevStars) => {
          const updatedStars = prevStars.map((star) => {
            const top = parseInt(star.style.top || '0');
            star.style.top = `${top + 5}px`; // Increased the speed of downward movement
            if (top > window.innerHeight) {
              star.remove();
              return null;
            }
            return star;
          });
          return updatedStars.filter((star) => star !== null) as HTMLDivElement[];
        });

        const container = document.getElementById('space-background');
        if (container) {
          const newStars: HTMLDivElement[] = [];
          let starCount = Math.floor(Math.random() * 3) + 1; // Reduced the number of stars generated
          for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${-star.offsetHeight}px`;
            container.appendChild(star);
            newStars.push(star);
          }
          setStars((prevStars) => [...prevStars, ...newStars]);
        }
      } else if (currentScrollY < prevScrollY.scrollY) {
        setStars((prevStars) => {
          const updatedStars = prevStars.map((star) => {
            const top = parseInt(star.style.top || '0');
            star.style.top = `${top - 5}px`; // Increased the speed of upward movement
            if (top < -star.offsetHeight) {
              star.remove();
              return null;
            }
            return star;
          });
          return updatedStars.filter((star) => star !== null) as HTMLDivElement[];
        });

        const container = document.getElementById('space-background');
        if (container) {
          const newStars: HTMLDivElement[] = [];
          let starCount = Math.floor(Math.random() * 3) + 1; // Reduced the number of stars generated
          for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${window.innerHeight + star.offsetHeight}px`;
            container.appendChild(star);
            newStars.push(star);
          }
          setStars((prevStars) => [...prevStars, ...newStars]);
        }
      }

      setPrevScrollY((prevScrollY) => ({
        ...prevScrollY,
        scrollY: currentScrollY,
      }));
    };

    window.addEventListener('scroll', moveStars);

    return () => {
      window.removeEventListener('scroll', moveStars);
    };
  }, []);

  return (
    <>
      <Header />
      <main
        data-theme="black"
        className={`flex min-h-screen flex-col justify-between p-24 ${inter.className}`}
      >
        <p className="text-xl text-center">
          Feel free to look at my bio, projects, and resume! If you want to contact me, you can do so through the contact page. If you want a quick overview of my skills, just scroll down!
        </p>
        <div id="space-background" className="flex flex-col">
          <div className="flex flex-row text-xl text-center m-9">
            Item 1
          </div>
          <div className="flex flex-row-reverse text-xl text-center m-9">
            <p className='px-1'>Item 2</p>
            <p className='px-1'>Item Blah</p>
          </div>
          <div className="flex flex-row text-xl text-center m-9">
            Item 3
          </div>
        </div>
      </main>
    </>
  );
}
