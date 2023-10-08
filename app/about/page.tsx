import Header from '@/components/Header';
import { LoremIpsum } from 'lorem-ipsum';

export default function About() {
  const lorem = new LoremIpsum();
  return (
    <>
      <main className="flex flex-grow justify-center items-center sm:ml-36">
        <div className="flex flex-col justify-evenly w-10/12 p-3 px-10 items-center 
                      text-orange-200 border-b-2 border-r-2 md:border-r-0 md:border-l-2  
                      border-sky-200 rounded-lg md:flex-row md:w-3/4 md:h-4/5 md:justify-center md:items-center">
          <h3 className="w-10/12 text-3xl text-op font-extrabold py-5">
            A Little About Me...
          </h3>
          <p className="w-10/12 py-5 font-bold">
            {lorem.generateWords(100)}
          </p>
        </div>
      </main>
    </>
  )
}
