import Image from 'next/image'
import React from 'react'

function Discord() {
    return (
        <>
            <div className='header bg-[#404eed] w-full flex justify-center items-center'>
                <div className='flex items-center w-screen pt-5 justify-around'>
                <div className='flex space-x-1 items-center'>
                    {/* Logo */}
                    <i className="bi bi-discord text-white text-md"></i>
                    <h1 className='text-white text-[12px] font-bold font-sans'>Discord</h1>
                </div>
                {/* Middle Navbars */}
                <div className='flex space-x-2 items-center'>
                    <h1 className='text-white text-[8px] hover:underline cursor-pointer font-sans'>Home</h1>
                    <h1 className='text-white text-[8px] hover:underline cursor-pointer font-sans'>Download</h1>
                    <h1 className='text-white text-[8px] hover:underline cursor-pointer font-sans'>Nitro</h1>
                    <h1 className='text-white text-[8px] hover:underline cursor-pointer font-sans'>Safety</h1>
                    <h1 className='text-white text-[8px] hover:underline cursor-pointer font-sans'>Support</h1>
                    <h1 className='text-white text-[8px] hover:underline cursor-pointer font-sans'>Blog</h1>
                    <h1 className='text-white text-[8px] hover:underline cursor-pointer font-sans'>Career</h1>
                </div>
                {/* Login Button */}
                <div className='flex space-x-2 items-center'>
                    <button className='bg-[#ffffff] text-black text-[7px] hover:shadow-md cursor-pointer font-sans rounded-xl px-1.5 py-1'>Open Discord</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Discord
