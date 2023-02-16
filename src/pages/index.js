import React from 'react'
import { Inter } from '@next/font/google'
import Card from '../components/Card'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const res = await fetch("https://api.npoint.io/4a8d62649d30ab3f091e")
  const data = await res.json()

  return {
    props: {
       data,
       fallback: 'blocking'
      },
  }
}

const Home = ({data}) => {
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