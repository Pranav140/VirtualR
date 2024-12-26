import { FiX, FiAlignCenter } from "react-icons/fi";
import React from 'react'
import NavImg from '.././assets/virtualR_logo.png'
import { useState } from "react";
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 h-[60px]'>
            <div className='flex justify-between items-center mr-5 ml-5'>
                <div className='flex items-center space-x-1'>
                    <img src={NavImg} alt="logo" className='h-[30px]' />
                    <h1 className='text-xl font-medium '>VirtualR</h1>
                </div>
                <ul className='hidden space-x-12 font-normal lg:flex md:flex'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Workflow</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Testimonials</a>
                    </li>
                </ul>
                <div className='space-x-5 hidden lg:flex ' >
                    <button className='border border-white rounded-md px-4 py-1 '>Sign In</button>
                    <button className='border bg-gradient-to-r from-primary to-secondary px-4 py-1 border-none rounded-md'>Create Account</button>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <FiX /> : <FiAlignCenter />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 p-12 bg-neutral-900 w-full flex flex-col justify-center items-center lg:hidden">
                    <ul className="space-y-3">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Workflow</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                    </ul>
                    <div className="py-5 space-x-5">
                        <button className="border border-white py-1 px-3 rounded-md ">Sign In</button>
                        <button className="border border-none py-1 px-3 rounded-md bg-gradient-to-r from-primary to-secondary ">Create Account</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar