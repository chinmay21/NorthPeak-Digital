import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className='bg-[#004643] px-5 sm:px-8 lg:px-10 py-5'>

        {/* Main Navbar */}
        <div className='flex items-center justify-between'>

          {/* Logo */}
          <div className='lg:w-225 flex lg:justify-around'>
            <div className='text-2xl text-[#FAFAFA] font-bold hover:opacity-80 transition-opacity duration-300'>
              <a href='#hero-section'>NorthPeak Digital</a>
            </div>

            {/* Desktop / Tablet Navigation */}
            <div className='hidden md:flex items-center gap-6 lg:gap-10 text-[#FAFAFA]'>
              <a
                className='hover:underline underline-offset-15 transition-all duration-300 font-semibold'
                href='#services-section'
              >
                Services
              </a>

              <a
                className='hover:underline underline-offset-15 transition-all duration-300 font-semibold'
                href='#whyUs-section'
              >
                Why Us
              </a>

              <a
                className='hover:underline underline-offset-15 transition-all duration-300 font-semibold'
                href='#results-section'
              >
                Results
              </a>

              <a
                className='hover:underline underline-offset-15 transition-all duration-300 font-semibold'
                href='#pricing-section'
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Desktop Contact */}
          <div className='hidden md:block lg:px-20'>
            <a
              className='bg-[#FAFAFA] w-30 text-[#004643] inline-block font-semibold px-5 py-2 rounded-3xl text-center hover:scale-110 transition'
              href='#contact-section'
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-[#FAFAFA] text-3xl focus:outline-none'
            aria-label='Toggle navigation menu'
          >
            {isOpen ? '✕' : '☰'}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden flex flex-col items-center gap-5 pt-6 text-[#FAFAFA]'>

            <a
              className='font-semibold hover:underline underline-offset-8'
              href='#services-section'
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>

            <a
              className='font-semibold hover:underline underline-offset-8'
              href='#whyUs-section'
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </a>

            <a
              className='font-semibold hover:underline underline-offset-8'
              href='#results-section'
              onClick={() => setIsOpen(false)}
            >
              Results
            </a>

            <a
              className='font-semibold hover:underline underline-offset-8'
              href='#pricing-section'
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>

            <a
              className='bg-[#FAFAFA] w-30 text-[#004643] font-semibold px-5 py-2 rounded-3xl text-center hover:scale-110 transition'
              href='#contact-section'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar