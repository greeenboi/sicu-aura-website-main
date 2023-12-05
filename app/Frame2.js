import React from 'react'
import Image from 'next/image'
import Phone from '../public/Phone2.svg'
import Linkedin from '../public/Linkedin.svg'
import { FaLinkedin } from "react-icons/fa";
import { Button } from '@chakra-ui/react'

export default function Frame1 () {
  return (
    <section className='flex md:flex-row flex-wrap my-12 '>
            <div className='flex-1 flex flex-col justify-around gap-6 min-h-fit mx-6'>
                <p className=' font-Inknut text-4xl font-light'>Follow Us on</p>
                <Image src={Linkedin} style={{width:'512px', height:'128'}} className=' ml-6 w-full h-full' alt='Phone' />
                <p className=' font-Inknut text-lg font-normal'>Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester on a first come first serve basis.</p>
                <Button leftIcon={<FaLinkedin className='text-blue-600' />} className='bg-white border rounded-3xl text-black font-Inknut font-semibold text-xl w-64 p-4'>
                    Follow us 
                </Button>
            </div>
            <div className=' flex-1'>
                <Image src={Phone} className='w-full h-full' alt='Phone' />
            </div>
    </section>
  )
}
