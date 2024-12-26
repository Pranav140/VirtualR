import React from 'react'; 
import { features } from '../Constants';

const Feature = () => {
    return (
        <div className='relative mt-20 border-b border-neutral-900 min-h-[800px]'>
            <div className='text-center'>
                <span className='bg-neutral-800 rounded-full text-primary h-6 font-medium px-3 py-1 uppercase'>Features</span>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl mt-20'>Easily build <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>your code</span></h1>
            </div>
            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map((feature,index)=>(
                    <div key={index} className='w-full sm:1/2 lg:w-1/3'>
                        <div className='flex'>
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-primary justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                                <p className='text-md pd-2 mb-20 text-neutral-600'>{feature.description}</p>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Feature