import React from 'react'
import Intro from './Intro'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div className='h-[800px] overflow-hidden bg-gradient-to-r from-[#2b5876] to-[#4e4376]'>
        <Navbar/>
        <Intro/></div>
  )
}

export default Home