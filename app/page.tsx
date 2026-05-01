import React from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/hero'

const page = () => {
  return (
    <main className="min-h-screen bg-zinc-900 relative">
      <Navbar />
      <Hero />
    </main>
  )
}

export default page