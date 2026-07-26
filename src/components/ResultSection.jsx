import React from 'react'
import results from '../data/results'
import testimonials from '../data/testimonials'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='bg-[#FAFAFA] text-[#004643] p-6 rounded-lg w-80 shrink-0'>
      <p className='text-lg font-semibold'>{testimonial.name}</p>
      <p className='font-semibold'>{testimonial.role}</p>
      <p className='text-lg font-semibold'>{testimonial.text}</p>
    </div>
  )
}

const Result = () => {
  return (
    <section id='results-section'>
      <div className='bg-[#004643] text-[#FAFAFA] text-center mt-15 py-15'>

        <div>
          <h2 className='text-5xl font-semibold'>
            RESULTS THAT MATTER
          </h2>

          <p className='text-xl pt-10 font-semibold'>
            We don't just build digital experiences.
          </p>

          <p className='text-lg pt-9 font-semibold'>
            We build experiences that deliver results.
          </p>
        </div>

        {/* Results */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-15 px-6'>
          {
            results.map((result) => (
              <div
                className='bg-[#FAFAFA] text-[#004643] p-6 rounded-lg hover:scale-110 hover:shadow-md
                hover:shadow-[#FAFAFA] hover:cursor-pointer hover:opacity-80
                transition-all delay-150 duration-300'
                key={result.value}
              >
                <h3 className='font-semibold'>
                  {result.value}
                </h3>

                <p className='text-lg font-semibold'>
                  {result.label}
                </p>
              </div>
            ))
          }
        </div>

        {/* Testimonials */}
        <div className='overflow-hidden mt-20'>
            <div className='flex w-max animate-[testimonials_30s_linear_infinite]'>

                {/* First set */}
                <div className='flex gap-15 shrink-0 pr-15'>
                {
                    testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                    />
                    ))
                }
                </div>

                {/* Duplicate set */}
                <div className='flex gap-15 shrink-0 pr-15'>
                {
                    testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={`duplicate-${testimonial.id}`}
                        testimonial={testimonial}
                    />
                    ))
                }
                </div>

            </div>
        </div>

      </div>
    </section>
  )
}

export default Result