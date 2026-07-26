import React from 'react'
import services from '../data/services'

const ServiceSection = () => {
  return (
    <section id='services-section'>
        <div className='bg-[#004643] mt-15 flex flex-col mx-auto text-center text-[#FAFAFA] py-15'>
            <h2 className='text-5xl font-semibold'> WHAT WE DO </h2>
            <p className='text-lg pt-10 font-semibold'> Digital solutions built for growth.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-15 px-6'>
                {
                    services.map((service) => (
                        <div 
                        className='bg-[#FAFAFA] text-[#004643] p-6 rounded-lg hover:scale-110 hover:shadow-md
                        hover:shadow-[#FAFAFA] hover:cursor-pointer hover:opacity-80 transition-all delay-150 duration-300'
                        key={service.id}
                        >
                            <span className='font-semibold'>{service.number}</span>
                            <h3 className='text-lg font-semibold'>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ServiceSection