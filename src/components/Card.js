import Link from 'next/link'
import React from 'react'

const Card = (props) => {
    return (
        <div className="block rounded-xl border dark:border-gray-800 dark:bg-[#171717] bg-slate-200 p-8 hover:shadow-md md:w-[20rem] mt-3 mx-4 md:mx-3 mb-2">

            <i className={`bi bi-${props.item.icon} h-10 w-10 text-blue-500`}></i>

            <h3 className="mt-3 text-xl font-bold text-black dark:text-white hover:text-blue-500 cursor-pointer"><Link href={`/${props.item.word}`}>{props.item.word} Clone <i className="bi bi-box-arrow-up-right"></i></Link></h3>

            <p className="mt-4 text-sm dark:text-gray-300 text-gray-700">
                {props.item.description}
            </p>
            <a
                className="hover:bg-[#333] flex w-fit rounded-md dark:bg-[#222] bg-[#141415] px-6 py-2 mt-4 text-sm font-medium text-white"
                href={`https://github.com/hellofaizan/redo/tree/main/src/pages/${props.item.word}.js`}
                target="_blank"
                rel="noreferrer"
            >
                View on GitHub <i className="bi bi-github ml-3"></i>
            </a>
        </div>
    )
}

export default Card
