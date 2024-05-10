import Image from 'next/image'
import Nav from './nav'
import Container from './Container'
import Services from './Services'
import Projects from './Projects'
import Tools from './Tools'


export default function Home() {
  return (
    <div>
      <div className='w-10/12 mx-auto pt-4'>
        <Nav />
      </div>
      <Container />
      <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]'></div>
      <Services />
      <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
     <Projects />
     <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
     <Tools />

     <div className="w-10/12 mx-auto my-10">
      <div className='flex items-start text-2xl text-neutral-800'>
        <p className='text-5xl mr-2 mt-[2px]'>&#169;</p>
        Mubeen's Code <small className='mt-[2px] ml-2'>2024</small>
      </div>
     </div>
    </div>
  )
}
