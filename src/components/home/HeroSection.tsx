/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { RightArrow } from '../icons'

const HeroSection = () => {
    return (
        <section style={{
            backgroundImage: `url("/banner/destination-bg.png")`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative"
        }} className='w-full pt-10'>
            <div className='container flex items-center'>
                <div className='flex-1 flex flex-col gap-5'>
                    <h1 className='text-8xl text-gray-800 tracking-tight leading-tight font-extrabold'>LETS TRAVEL THE WORLD WITH US</h1>
                    <p className='max-w-[500px] text-gray-500 tracking-wide font-medium'>Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt mauris tellus nunc eleifend. Odio suspendisse ut arcu eget enim vulputate.</p>
                    <div className='px-10 py-3 flex items-center gap-1 border-[2px] shadow-sm w-fit border-primaryColor rounded-md '>
                        <button className='font-medium'>Explore more</button>
                        <RightArrow className='text-xl' />
                    </div>
                </div>
                <div className='flex-1 flex justify-end'>
                    <img className='w-[550px] h-auto object-cover' src="/banner/banner-five-img.png" alt="banner-five-img" />
                </div>
            </div>

        </section>
    )
}

export default HeroSection