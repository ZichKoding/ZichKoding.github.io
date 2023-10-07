import Header from '@/components/Header';
import { LoremIpsum } from 'lorem-ipsum';

export default function About() {
  const lorem = new LoremIpsum();
  return (
    <>
      <main className="flex flex-grow justify-center items-center ">
        <div className="flex flex-col justify-evenly w-10/12 p-3 items-center 
                      text-zinc-900 rounded-3xl shadow-xl shadow-orange-950">
          <h3 className="w-10/12 text-3xl font-extrabold py-5">
            A Little About Me...
          </h3>
          <p className="w-10/12 py-5 font-bold text-slate-900">
            {lorem.generateWords(100)}
          </p>
        </div>
      </main>
    </>
  )
}
