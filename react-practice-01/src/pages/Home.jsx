import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ChatBox from '../components/ChatBox'

const Home = () => {
  return (
      <div className='min-h-screen w-screen bg-black text-white'>
          <Navbar />
          <HeroSection />
          <ChatBox />
    </div>
  )
}

export default Home