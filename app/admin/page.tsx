import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const UnderMaintenance = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex items-center justify-center mb-5 ">
          <Image src="/assets/icons/logo-full.svg" alt="logo" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image src="/assets/gifs/happy.png" alt="maintenance" width={200} height={200} />
          <h1 className="text-4xl font-bold max-w-[650px] text-center">We are currently <span className='text-blue-500'>under maintenance</span></h1>
          <p className='text-zinc-500 font-medium tracking-wide'>Our site is undergoing scheduled maintenance. We should be back shortly. Thank you for your patience!</p>
          <Link href='/' className='mt-3'>
            <button className="bg-sky-600 hover:bg-sky-500 transition-all text-white font-bold py-2 px-4 rounded">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UnderMaintenance;


