import { DownArrow, FBIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/icons'
import Link from 'next/link'
import React from 'react'

const TopNavbar = () => {
    return (
        <div className='container text-sm text-gray-600 flex items-center justify-between py-2'>
            <div className='flex items-center gap-4'>
                <div className='flex gap-1'>
                    <FBIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedinIcon />
                </div>
                <div className='w-[1px] shadow-sm h-4 bg-gray-300'></div>
                <div className='flex gap-6 font-medium'>
                    <p>+880-1793253672</p>
                    <p>contact@gmail.com</p>
                </div>
            </div>

            <div className='flex gap-5 items-center font-medium'>
                <div className='flex gap-5 items-center'>
                    <Link href="#">
                        <p>Login</p>
                    </Link>
                    <Link href="#">
                        <p>Sign up</p>
                    </Link>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <p>English</p>
                        <DownArrow />
                    </div>
                    <div className='flex items-center'>
                        <p>USD</p>
                        <DownArrow />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopNavbar