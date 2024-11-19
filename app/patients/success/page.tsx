import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex items-center justify-center mb-5 ">
          <Image src="/assets/icons/logo-full.svg" alt="logo" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center space-y-2">
         <Image src="/assets/gifs/success.gif" alt="logo" width={200} height={200} />
          <h1 className="text-4xl font-bold max-w-[650px] text-center ">Your <span className='text-green-800/100' >appointment request</span> has been successfully submitted! </h1>
          <p className='text-zinc-500 font-medium tracking-wide' >We will be in touch shortly to confirm.</p>
          <Link href="/" className='' >

            <button className="mt-4 bg-green-800/100 hover:bg-green-500/70 transition-all px-4 py-2 rounded-lg flex gap-3 items-center"> <FaArrowLeft /> Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page