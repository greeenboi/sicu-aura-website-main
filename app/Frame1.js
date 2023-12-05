import React from 'react'
import Image from 'next/image'
import Phone from '../public/Phone1.svg'
import { Button } from '@chakra-ui/react'

export default function Frame1 () {
  return (
    <section className='flex md:flex-row flex-wrap my-12 '>
            <div className=' flex-1'>
                <Image src={Phone} className='w-full h-full' alt='Phone' />
            </div>
            <div className='flex-1 flex flex-col justify-evenly min-h-fit mx-12 w-1/2 p-12 items-center'>
                <p className=' font-Inknut font-semibold text-4xl '>
                  It's The Time For Testing. Join Us as a Beta Tester NOW
                </p>
                <p className=' font-normal font-Inknut text-lg '>Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester on a first come first serve basis. Testing will be done in 8 phases. Each phase's duration will be 7 days and there will be 200 Testers.</p>
                <Button className='bg-white border rounded-3xl text-black font-Inknut font-semibold text-xl w-64 p-2'>
                    Join as Beta Tester
                </Button>
            </div>
    </section>
  )
}
