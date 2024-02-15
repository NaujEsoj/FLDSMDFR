import React from 'react'
import GitHub from './assets/github.png'

function About() {
  return (
    <div className='flex w-full justify-center items-center h-full flex-col p-8'>
      <h1 className='text-6xl m-8'>This app was brought by:  <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#202020]'>ME!!!</span></h1>
      <p className='m-20'>Please, checkout my GitHub profile: </p>
      <p className='m-8 text text-xl font-bold underline decoration-indigo-500 hover:decoration-pink-500 '><a className='flex items-center' href="https://github.com/NaujEsoj" target='blank_'>NaujEsoj<img className='w-8 m-2' src={GitHub} alt="GitHub Logo" /></a></p>
    </div>
  )
}

export default About
