import React from 'react'
import whyUs from '../data/whyUs'

const WhyUsSection = () => {
  return (
    <section id='whyUs-section'>
        <div className='text-[#004643]  mt-15 py-15 px-15'>
            <div>
                <h2 className='text-5xl font-semibold'>WHY NORTHPEAK?</h2>
                <p className='text-xl pt-10 font-semibold'>Digital work built with purpose.</p>
                <p className='text-lg pt-9 font-semibold'>
                    We combine thoughtful design, reliable technology, and a focus on measurable outcomes to create digital experiences that make a real difference.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-5xl mx-auto mt-15 px-6'>
                {
                    whyUs.map((whyUs) => (
                        <div
                        className='bg-[#004643] text-[#FAFAFA] p-6 rounded-lg hover:scale-110 hover:shadow-md
                        hover:shadow-[#FAFAFA] hover:cursor-pointer hover:opacity-80 transition-all delay-150 duration-300'
                        key={whyUs.id}
                        >
                            <span className='font-semibold'>{whyUs.number}</span>
                            <h3 className='text-lg font-semibold'>{whyUs.title}</h3>
                            <p>{whyUs.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default WhyUsSection