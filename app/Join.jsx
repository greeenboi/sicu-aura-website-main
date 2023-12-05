'use client'
import React, { useState, useEffect } from 'react'

import Frame1  from './Frame1'
import Frame2  from './Frame2'
import Frame3  from './Frame3'
import Frame4  from './Frame4'

const components = [<Frame1/>, <Frame2 />, <Frame3 />, <Frame4 />]


const Join = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % components.length)
      }, 10000)
  
      return () => {
        clearInterval(interval)
      }
    }, [])
  

  return (
    <main className='w-screen h-screen flex-col justify-center items-center'>
        {components[index]}
    </main>
  )
}

export default Join