import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"


const Hero = () => {
    return (
        <div className='flex flex-col items-center mt-8 lg:mt-15'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>VirtualR Build tools <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>for developers</span></h1>
            <h3 className='text-xl text-gray-500 text-center max-w-4xl mt-10'>Empower your creativity and bring your VR app ideas to life with our initiative development tools.Get started today and turn your imagination into impressive reality</h3>
            <div className='flex space-x-6 mt-6'>
                <button className='border border-none bg-gradient-to-r from-primary to-secondary rounded-md py-2 px-4'>Start For Free</button>
                <button className='border border-white py-2 px-4 rounded-md '>Documentation</button>
            </div>
            <div className='flex mt-28 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-primary shadow-orange-500 mx-2 my-4 '>
                    <source src={video1} type="video/mp4" />
                    Your browser doesnot support the video tags
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-primary shadow-orange-500 mx-2 my-4 text-white'>
                    <source src={video2} type="video/mp4" />
                    Your browser doesnot support the video tags
                </video>

            </div>
        </div>
    )
}

export default Hero