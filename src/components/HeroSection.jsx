import React from 'react'
import HeroSectionImage from '../assets/hero-section-img.jpg'

const HeroSection = () => {
  return (
    <section id='hero-section'>
      <div className='flex pt-25 px-15'>
        <div className='flex flex-col gap-10 text-[#004643] lg:w-200'>
          <h2 className='text-5xl font-semibold'>DIGITAL EXPERIENCES</h2>
          <p className='text-lg font-semibold'>We build digital experiences that move businesses forward.</p>
          <p className='text-md font-semibold'>
            We design and develop fast, modern, and conversion-focused digital experiences that help ambitious businesses
            stand out, connect with their audience, and grow.
          </p>

          <div className='flex gap-5 mt-10'>
            <a className='bg-[#004643] text-[#FAFAFA] px-3 py-2 rounded-lg hover:opacity-80 transition-all' href='#contact-section'>Start Your Project</a>
            <a className='bg-[#004643] text-[#FAFAFA] px-3 py-2 rounded-lg hover:opacity-80 transition-all' href='#services-section'>Explore Our Services</a>
          </div>
        </div>

        <div>
          <img 
            className='rounded-lg'
            src={HeroSectionImage} height={500} width={500} alt='3D illustration representing digital experiences'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection