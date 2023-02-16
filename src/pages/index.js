import React from 'react'
import { Inter } from '@next/font/google'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.npoint.io/4a8d62649d30ab3f091e', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  if (isLoading) return <div className='w-screen h-screen flex justify-center items-center'>
    <Image src={"/faizan.png"} width={60} height={60} alt="HelloFaizan Splach Screen Logo"></Image>
  </div>

  if (!data) return <div className='w-screen h-screen flex justify-center items-center'>
    <Image src={"/faizan.png"} width={60} height={60} alt="HelloFaizan Splach Screen Logo"></Image>
  </div>
  return (
    <>
      <div className="flex flex-col items-center min-h-screen w-full">
        <div className="flex flex-col items-start md:container justify-center md:w-4/6">
          <h1 className="text-3xl font-bold mt-5 ml-3">Hello👋 I&apos;m Faizan</h1>
          <p className="mt-3 ml-3 text-1xl">
            In this series I am gonna <span className="text-blue-600">redesign </span> every <span className="text-blue-600">Website</span> using Tailwinds and NextJS
          </p>
        </div>


        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-row pb-5 mt-5">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}

        </div>
      </div>


      {/* Icons Card */}
      <div className='fixed bottom-0 left-0 py-2 md:block hidden ml-10 mb-5'>
        <div className='flex flex-col ml-10 mb-10 space-y-5'>
          <a href='https://dicord.gg/invite/rraBbMQraQ' target="_blank" rel="noreferrer"><i className="bi bi-discord hover:text-blue-500"></i></a>
          <a href='https://youtube.com/hellofaizan' target="_blank" rel="noreferrer"><i className="bi bi-youtube hover:text-red-600"></i></a>
          <a href='https://github.com/hellofaizan' target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
          <a href='https://www.instagram.com/curiousfaizan/' target="_blank" rel="noreferrer"><i className="bi bi-instagram hover:text-[#ff2bf1]"></i></a>
          <a href='https://twitter.com/HelloFaizandev' target="_blank" rel="noreferrer"><i className="bi bi-twitter hover:text-blue-500"></i></a>
        </div>
      </div>

    </>
  )
}

export default Home