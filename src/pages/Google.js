import React from 'react'
import Image from 'next/image'
import { useRef, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';

const Discord = () => {
  const router = useRouter()
  const [query, setQuery] = useState('Hello Faizan')
  const sendMessage = (e) => {
    e.preventDefault();
    if (query.startsWith("https://")) return router.push(query)
    if (query) return router.push(`https://search.balls.workers.dev/?q=${query}`)
  }
  return (
    <>
      <div className="main flex flex-col">

        {/* NavBar */}
        <div className="links flex space-x-3 justify-end items-center p-4 font-sans z-100">
          <div className='space-x-3 mr-5 flex text-[#e2e2e2]'>
            <p className='cursor-pointer hover:underline text-sm'>Gmail</p>
            <p className='cursor-pointer hover:underline text-sm'>Images</p>
          </div>
          <div className='flex items-center space-x-4'>
            <i className="bi bi-bricks cursor-pointer p-1 text-[#e2e2e2]"></i>
            <Image className='rounded-full cursor-pointer' title='HelloFaizan Account Details' src={`https://lh3.googleusercontent.com/ogw/AAEL6sh50J7N0U3bP30OiNISKGE6WGtsVLIVP3uVf3tY=s32-c-mo`} alt="Logo" height={30} width={30}></Image>
          </div>
        </div>

        {/* Main Logo Center Part */}
        <div className='mt-20 flex container justify-center items-center flex-col'>
          <Image className='mx-auto my-auto mt-3 w-auto h-auto' priority src={`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png`} alt="Logo" height={100} width={280}></Image>

          {/* Text Input Box like Google */}
          <div className='flex flex-col items-center mt-6 rounded-full border-[#707070] border'>
            {/* Text Box */}
            <div className='flex items-center space-x-2 pl-5 pr-5 py-2'>
              <i className="bi bi-search text-[#707070]"></i>
              <input className='bg-[#202124] outline-none rounded-md p-1 w-[65vh] text-sm' type="search" onChange={e => { e.target.value }} placeholder='Search Google or type a URL' onKeyDown={event => {
                if (event.key === 'Enter' && (event.target).value.startsWith("https://")) return router.push((event.target).value)
                if (event.key === 'Enter') return router.push(`https://search.balls.workers.dev/?q=${(event.target).value}`)

              }} />
              <div className='space-x-2'>
                <i className="bi bi-camera cursor-pointer" title='Search by Image'></i>
                <i className="bi bi-mic cursor-pointer" title='Search by Voice '></i>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className='flex space-x-3 mt-7'>
            <button className='bg-[#303134] text-white hover:outline hover:outline-1 hover:outline-[#717171] justify-center items-center rounded-md p-2 px-5 text-sm' type='submit' onClick={sendMessage}>Google Search</button>
            <button className='bg-[#303134] text-white hover:outline hover:outline-1 hover:outline-[#717171] rounded-md p-2 px-5 text-sm justify-center items-center'>I&apos;m Feeling Lucky</button>
          </div>
          {/* Languages */}
          <div className='flex space-x-3 mt-6'>
            <p className='text-sm'>Google offered in:</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>हिन्दी</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>বাংলা</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>తెలుగు</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>मराठी</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>தமிழ்</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>ગુજરાતી</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>ಕನ್ನಡ</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>മലയാളം</p>
            <p className='text-blue-400 text-sm cursor-pointer hover:underline'>ਪੰਜਾਬੀ</p>
          </div>

        </div>

        {/* Footer */}
        <div className="absolute bottom-0 bg-[#171717] w-screen py-3">
          <div className="flex flex-col">
            <div className="flex justify-between">
            <p className='ml-5 text-[#a1a1a1]'>India</p>
            <p className='text-[#a1a1a1] mr-5'>Designed by <Link href={`https://www.hellofaizan.me`} target="_blank" ><span className='text-[#ff3131] cursor-pointer'>HelloFaizan</span></Link> </p>
            </div>
            {/* Horizontal Bar */}
            <div className="flex space-x-3 text-[#a1a1a1] border border-[#636363] mt-3"></div>
            {/* Bottom Text */}
            <div className='flex justify-between'>
            <div className='flex space-x-5 text-[#a1a1a1] mt-3 ml-5'>
              <p className='text-sm'>About</p>
              <p className='text-sm'>Advertising</p>
              <p className='text-sm'>Business</p>
              <p className='text-sm'>How Search Works</p>
            </div>
            <div className='flex space-x-6 text-[#a1a1a1] mr-5'>
              <p className='text-sm mt-3'>Privacy</p>
              <p className='text-sm mt-3'>Terms</p>
              <p className='text-sm mt-3'>Settings</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Discord