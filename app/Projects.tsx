import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Projects</h1>
        <p className='pt-6 text-neutral-800'>
            Over the years, I have gained experience in designing and developing the variety of websites, ranging from simple one-page landing pages to complex multi-page applications. Here are some projects that I would like to present to all of you , showcasing my work and acheivements in the field of web design and development
        </p>
        <div className='mt-20 md:w-9/12 mx-auto'>
            <img className='rounded-xl opacity-90 hover:opacity-100' src="/projects.webp" alt="projects" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Landing page</h1>
                <p className='text-neutral-800'>A landing page for designers made with basic html, css  with great color combination.</p>
                <div className='mt-6 inline-block'>
                    <a href="" className='flex text-white items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>
                        Explore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </a>
                </div>
            </div>
        </div>


        <div className='mt-20 md:w-9/12 mx-auto'>
            <img className='rounded-xl opacity-90 hover:opacity-100' src="/react-2.png" alt="react-news" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>React:News website</h1>
                <p className='text-neutral-800'>A news website using React framework, which countinously provides the latest updates and discussions from around the world.</p><br />
                <p className='text-neutral-800'>This dynamic platform utilizes real-time data fetching from the Yahoo News API, ensuring that users are constantly informed with up-to-date news content.</p>
                <div className='mt-6 inline-block'>
                    <a href="" className='flex text-white items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>
                        Explore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </a>
                </div>
            </div>
        </div>


        <div className='mt-20 md:w-9/12 mx-auto'>
            <img className='rounded-xl opacity-90 hover:opacity-100' src="/hotel.png" alt="hotel booking appn" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>Hotel Booking App</h1>
                <p className='text-neutral-800'>The hotel booking app is built with Next.js and utilizes Tailwinds CSS for styling. It integrate MongoDB for database management and prisma Cloudinary for efficeint image storage.</p><br />
                <p className='text-neutral-800'>This combination of technologies enable seamless and user-friendly hotel booking experiences, delivering a robust and visually appealing application.</p>
                <div className='mt-6 inline-block'>
                    <a href="" className='flex text-white items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>
                        Explore
                        <BsArrowUpRight size={14} className='ml-2'/>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects