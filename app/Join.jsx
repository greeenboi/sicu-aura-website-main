'use client'
import React, { useState, useEffect } from 'react'
import { Box, HStack } from "@chakra-ui/react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Frame1  from './Frame1'
import Frame2  from './Frame2'
import Frame3  from './Frame3'
import Frame4  from './Frame4'

const components = [<Frame1/>, <Frame2 />, <Frame3 />, <Frame4 />]

const DotIndicator = ({ index }) => {
  return (
    <HStack spacing="24px">
      {Array.from({ length: 4 }).map((_, i) => (
        <Box
          key={i}
          w="10px"
          h="10px"
          borderRadius="full"
          bgColor={i === index ? "blue.500" : "gray.300"}
          width={i === index ? "30px" : "10px"}
          transition="width 0.6s ease-in-out"
        />
      ))}
    </HStack>
  )
}

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
        <div className='flex flex-row w-screen h-auto justify-center items-center'>
          <DotIndicator index={index} />
        </div>
    </main>
  )
}

export default Join