import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex flex-grow justfiy-center">
        <div className="flex flex-col justify-between p-3 items-center sm:flex-row">
          <Image src="/profile_pic.jpg"
            alt="Picture of the Chris Zichko." width={500} height={500}
            className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 
                      rounded-full overflow-hidden p-2" />
          
          <p className="text-sm p-5">
            Hi, I'm a full stack developer with 3 years of experience in both{' '}
            front-end and back-end development. I'm certified in MERN stack development{' '} 
            and scientific computing with Python, and I have training in deploying{' '} 
            applications with Next.js and Vercel. I also have experience as a Zoho CRM{' '} 
            developer and working with CMS. Additionally, I have experience in creating{' '} 
            APIs with AWS resources such as Lambda functions, API Gateways, S3 buckets,{' '} 
            and SQS. I'm passionate about creating high-quality, scalable applications{' '} 
            that solve real-world problems and improve user experiences.
          </p>
        </div>
      </main>
    </>
  )
}
