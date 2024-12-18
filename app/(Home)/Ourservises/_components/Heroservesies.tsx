import Link from 'next/link'
import React from 'react'

export default function Heroservices() {
  return (
    <div className="w-full relative h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(/assets/imgs/f8198a29ee232f0f3986656aeef8d379.png)`}} >
         
        <div className="absolute flex flex-col top-0 left-0 w-full h-full bg-white bg-opacity-65 z-10 justify-center items-center text-center px-4">
      
        <h1 className="text-center text-2xl font-semibold p-6 text-2xl  mb-5 text-xxl  font-oxanium font-thin">
        Our <span className='text-[#1F7099] '>Services</span>
      </h1>

          <p className="text-lg text-black mb-6">
            Explore the wide range of solutions we offer to take your business to the next level.
          </p>
          <Link href={"/Contactus"}>
          <button className='bg-gradient-to-r from-[#1f7099]  to-[#a2c6d8] px-20 py-3 text-white rounded-full'>
            Contact us
          </button>
          </Link>
       
        </div>
    </div>
  )
}
