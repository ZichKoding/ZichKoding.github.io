import Header from '@/components/Header';

export default function About() {
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
            Software engineer with a passion for learning and innovation. 
            Proven ability to develop and deliver high-quality software solutions 
            using a variety of technologies, including Node.js, Next.js, React.js, 
            Python, AWS, and SQL. Expertise in API integration, ETL processes, and 
            Zoho CRM integration. Currently, working on a personal “telekinesis” 
            project by reading brainwaves. 
          </p>
        </div>
      </main>
    </>
  )
}
