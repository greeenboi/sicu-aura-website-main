import React from 'react'
import Image from 'next/image'
import Heroimg from '../public/Globe.svg'
import Galaxy from '../public/Galaxy.svg'
import World from '../public/World.svg'
const Hero = () => {
  return (
    <main className='flex flex-col w-screen h-screen justify-evenly groupbg mt-12 overflow-hidden'>
        <section className='flex flex-row w-screen mx-24 mb-12'>
        <div className='w-96 gap-6 flex flex-col'>
            <p className=' font-normal text-4xl w-96'>
                We're Here To Give Protection To You And Your Family
            </p>
            <p className=' font-medium text-md w-auto'>
            Lorem ipsum dolor sit amet consectetur. Tempor donec vestibulum pellen tesque sollicitudin nunc odio sed. 
            </p>
        </div>
        </section>        
    </main>
  )
}

export default Hero