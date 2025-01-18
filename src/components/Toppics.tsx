import Image from 'next/image'
import React from 'react'

const Toppicks = () => {
  return (
    <main className='w-full  md:w-[1347px] md:h-[777px] top-[1663px] bg-white flex flex-col items-center space-y-[30px]'>
        {/* headings */}
        <div className='flex flex-col w-full h-[124px] items-center text-center '>
            <h2 className='text-3xl  w-[311px] h-[54px] top-[1718px] left-[564px] font-["Poppins"] font-medium md:text-[36px] leading-[54px] text-black '>Top Picks For You</h2>
            <p className=' text-sm pl-10 w-[85%] sm:w-[773px] h-[24px] top-[1718px] left-[333px] font-["Poppins"] font-medium md:text-[16px] leading-[24px] text-[#9F9F9F]'>
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
            </p>

        </div>



        {/* products sec*/}
    <div className='flex flex-col justify-center md:flex-row  '>
           {/* products 1*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px]'>
                <Image
                src={'/modularsofa.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Trenton modular sofa_3</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
           {/* products 2*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] pt-4 '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]'>
                <Image
                src={'/dinningtable.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Granite dining table with dining chair</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black mt-4 '>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
           {/* products 3*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px]'>
                <Image
                src={'/outdortable.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Outdoor bar table and stool</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
           {/* products 4*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] pt-6  '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]'>
                <Image
                src={'/teakmirror.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Plain console with teak mirror</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] mt-4 text-black'>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
          
        </div>
        {/* button */}
        <div className='w-[155px] h-[49px] top-[2340px] left-[662px] text-black'>
            <button className='w-[104px] h-[30px] top-[2340px] left-[667px] text-black font-["Poppins"] font-medium text-[20px] leading-[30px] '>View More</button>
        <div className='w-[115px] top-[2389px] left-[662px]  border-[2px] border-black'></div>
        </div>

    </main>
  )
}

export default Toppicks