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
            <div className='flex-1 flex flex-col justify-evenly min-h-fit'>
                <p>2</p>
                <p></p>
                <Button className='bg-teal-300'>
                    Helllo
                </Button>
            </div>
    </section>
  )
}
