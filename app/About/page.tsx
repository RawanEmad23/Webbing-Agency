import React from 'react'
import vedio from "../../public/assets/imgs/image (60).png"
import part from "../../public/assets/imgs/image (61).png"
import Ourstory from './_components/Ourstory'
import Ourvalues from './_components/Ourvalues'
import Image from 'next/image'


export default function Aboutus() {
  return (
    <div className='  relative mt-36'>
      <div>
      <h1 className="text-center text-[#1F7099] text-2xl font-semibold p-6 text-2xl font-semibold mb-12 text-xxl  font-oxanium font-thin">
        About Us 
      </h1>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
      
  <Image src={vedio} className="w-[600px]" alt="" />
</div>
 
      <Image src={part} className=' w-full' alt="" />
      </div>
    
    <Ourstory></Ourstory>
    <Ourvalues></Ourvalues>
    </div>
  )
}
