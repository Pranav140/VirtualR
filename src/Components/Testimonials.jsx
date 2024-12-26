import React from 'react'
import { testimonials } from '../Constants'

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl text-center '>What people are saying</h2>
        <div className='flex flex-wrap justify-center mt-16'>
            {testimonials.map((testimonial,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral rounded-md text-md border border-neutral-800 p-6 font-thin'>
                        <p>{testimonial.text}</p>
                        <div className='flex mt-8 items-start'>
                            <img src={testimonial.image} alt="profile_pic" className='w-12 h-12 mr-6 rounded-full border border-neutral-300'/>
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-500'>{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials