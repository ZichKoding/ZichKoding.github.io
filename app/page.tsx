import FeaturedProjects from '@/components/FeaturedProjects';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-grow flex-col justify-evenly">
      <div className="flex flex-col gap-12 h-fit items-center sm:ml-40">
        <div className="flex flex-col justify-between w-10/12 h-full mt-7 p-3 items-center 
                        text-orange-200 text-opacity-80 border-b-2 border-r-2 md:border-r-0 md:border-l-2  
                        border-sky-200 rounded-xl lg:flex-row">
          <div className="flex flex-col flex-shrink-0 gap-3 w-32 h-auto 
                          overflow-hidden p-2 items-center sm:w-48 sm:h-auto">
            <Image src="/profile_pic.jpg"
              alt="Picture of the Chris Zichko." width={500} height={500}
              className="rounded-full" />
            <p className="font-bold italic">
              Chris Zichko
            </p>
          </div>
          <p className=" text-lg font-semibold p-5">
            {`Hi, I'm a full stack developer with 3 years of experience in both
            front-end and back-end development. I'm certified in MERN stack development 
            and scientific computing with Python, and I have training in deploying 
            applications with Next.js and Vercel. I also have experience as a Zoho CRM 
            developer and working with CMS. Additionally, I have experience in creating 
            APIs with AWS resources such as Lambda functions, API Gateways, S3 buckets, 
            and SQS. I'm passionate about creating high-quality, scalable applications 
            that solve real-world problems and improve user experiences.`}
          </p>
        </div>
      </div>
      <FeaturedProjects />
    </main>
  )
}
