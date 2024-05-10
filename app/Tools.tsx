import React from 'react'

type Props = {}

function Tools({}: Props) {
  return (
    <div className='w-10/12 mx-auto mb-32'>
         <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Tools</h1>
        <p className='pt-6 text-neutral-800'>
            The products, apps and services I use on a daily basis for work and life.
        </p>

        <div className='mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10'>
            <a href="https://planetscale.com/" className='border-[1px] border-blue-600 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="/planetscale.jpg" alt="planetscale" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold text-blue-600'>Planetscale</h1>
                    <p className='text-neutral-800'>
                        My daily website&lsquo;s database platform
                    </p>
                </div>
            </a>

            <a href="https://www.figma.com/" className='border-[1px] border-blue-600 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="/figma.png" alt="figma" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold text-blue-600'>Figma</h1>
                    <p className='text-neutral-800'>
                        My design tool of choice
                    </p>
                </div>
            </a>

            <a href="https://code.visualstudio.com/" className='border-[1px] border-blue-600 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="/vs-code.jpg" alt="vs code" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold text-blue-600'>VS Code</h1>
                    <p className='text-neutral-800'>
                        Use for Most of My developed Apps
                    </p>
                </div>
            </a>

            <a href="https://vercel.com/" className='border-[1px] border-blue-600 block rounded-2xl my-6'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="/vercel-2.png" alt="vercel" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold text-blue-600'>Vercel</h1>
                    <p className='text-neutral-800'>
                        For Deployement Purpose
                    </p>
                </div>
            </a>

            <a href="https://dribbble.com/" className='border-[1px] border-blue-600 block rounded-2xl my-6 '>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src="/dribbble.jpg" alt="dribbble" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold text-blue-600'>Dribbble</h1>
                    <p className='text-neutral-800'>
                        Daily inspiration for My projects
                    </p>
                </div>
            </a>

            
        </div>
    </div>
  )
}

export default Tools