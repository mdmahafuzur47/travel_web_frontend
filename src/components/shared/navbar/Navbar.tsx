/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TopNavbar from './TopNavbar'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            {/* top navbar  */}
            <TopNavbar />
            <hr />
            {/* navbar  */}
            <div className='container flex justify-between items-center py-3'>
                <img className='w-[170px]' src="/navImg/logo_black.png" alt="logo_black" />
                <div className='flex gap-5 font-medium '>
                    <Link href={"#"} >
                        <p>Home</p>
                    </Link>
                    <Link href={"#"} >
                        <p>Categories</p>
                    </Link>
                    <Link href={"#"} >
                        <p>Pages</p>
                    </Link>
                    <Link href={"#"} >
                        <p>Dashboard</p>
                    </Link>
                    <Link href={"#"} >
                        <p>News</p>
                    </Link>
                    <Link href={"#"} >
                        <p>Contact</p>
                    </Link>
                </div>
                <button className='primaryBtn px-5 py-2'>Become a partner</button>
            </div>
            <hr />
            {/* scroll navbar  */}
        </nav>
    )
}

export default Navbar