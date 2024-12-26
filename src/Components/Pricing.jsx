import React from 'react'
import { pricingOptions } from '../Constants'
import { CiCircleCheck } from "react-icons/ci";


const Pricing = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl text-center sm:text-5xl lg:text-7xl my-8 tracking-wider'>Pricing</h1>
            <div className='flex flex-wrap'>
                {pricingOptions.map((option, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className='p-10 border border-neutral-700 rounded-xl'>
                            <p className='text-4xl mb-8'>
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl mx-2'>(Most Popular)</span>
                                )}
                            </p>
                            <p className='mb-8'>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                                <span className='text-xl tracking-tight text-neutral-400'>/month</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className='mt-8 flex items-center '>
                                        <CiCircleCheck/>
                                        <span className='ml-2'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing