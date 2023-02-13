import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div class="grid h-screen w-screen px-4 place-content-center">
  <div class="text-center">
    <h1 class="font-black dark:text-gray-200 text-gray-800 text-9xl">404</h1>

    <p class="text-2xl font-bold tracking-tight dark:text-gray-300 text-gray-900 sm:text-4xl">
      Uh-oh!
    </p>

    <p class="mt-4 text-gray-500">We can&apos;t find that page.</p>

    <Link
      href="/."
      class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Go Back Home
    </Link>
  </div>
</div>
  )
}

export default Error