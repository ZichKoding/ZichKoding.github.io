import Header from '@/components/Header';
import { LoremIpsum } from 'lorem-ipsum';

export default function About() {
  const lorem = new LoremIpsum();
  return (
    <>
      <main className="flex flex-grow justify-center items-center sm:ml-36">
        <div className="flex flex-col justify-evenly w-10/12 p-3 items-center 
                      bg-sky-950 bg-opacity-70 text-orange-200 text-opacity-80 
                      rounded-3xl shadow-xl shadow-orange-700">
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
