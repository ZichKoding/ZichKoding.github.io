import { Inter } from 'next/font/google'

import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
        <div className="flex flex-col">
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
  )
}
