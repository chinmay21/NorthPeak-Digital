import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center py-5 px-10 bg-[#004643] justify-between'>
            <div className='flex lg:w-225 justify-around'>
                <div className="text-2xl text-[#FAFAFA] font-bold hover:opacity-80 transition-opacity duration-300">
                    <a href='#hero-section'>NorthPeak Digital</a>
                </div>

                <div className='flex gap-10 items-center text-[#FAFAFA]'>
                    <a className='hover:underline underline-offset-15 transition-all duration-300 font-semibold' href='#services-section'>Services</a>
                    <a className='hover:underline underline-offset-15 transition-all duration-300 font-semibold' href='#whyUs-section'>Why Us</a>
                    <a className='hover:underline underline-offset-15 transition-all duration-300 font-semibold' href='#results-section'>Results</a>
                    <a className='hover:underline underline-offset-15 transition-all duration-300 font-semibold' href='#pricing-section'>Pricing</a>
                </div>
            </div>

            <div className='px-20'>
                <a 
                className='bg-[#FAFAFA] w-30 text-[#004643] inline-block font-semibold px-5 py-2 rounded-3xl text-center
                hover:scale-110 transition'
                href='#contact-section'
                >
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar