import React from 'react'
import Code from '../assets/code.png'
import { checklistItems } from '../Constants'
import { CiCircleCheck } from "react-icons/ci";
const Workflow = () => {
    return (
        <div className='mt-20 '>
            <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-6'>
                Accelerate your <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>coding workflow</span>
            </h1>
            <div className='flex flex-wrap justify-center mt-10'>
                <div className='p-2 w-full lg:w-1/2'>
                    <img src={Code} alt="code" />
                </div>
                <div className='pt-12 w-full lg:w-1/2 '>
                    {checklistItems.map((item, index) => (
                        <div key={index} className='flex mb-12'>
                            <div className='text-green-400 mx-6 bg-neutral-900 h-8 w-8 p-2 justify-center items-center rounded-full'>
                                <CiCircleCheck />
                            </div>
                            <div>
                                <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                                <p className='text-md text-neutral-500 '>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow