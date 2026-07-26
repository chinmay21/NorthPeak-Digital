import React from 'react'
import pricingPlans from '../data/pricing'

const PricingSection = () => {
  return (
    <section id='pricing-section'>
      <div className='py-20 mb-15'>
        <h2 className='text-5xl font-semibold text-center text-[#004643] pt-15 pb-15'>Simple Plans. Powerful Results.</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl text-center mx-auto mt-15 px-6'>
          {
            pricingPlans.map((plan) => {
              return(
                <div
                className={`bg-[#004643] text-[#FAFAFA] p-6 px-5 rounded-lg hover:shadow-md hover:shadow-[#004643]                                                                                                                                                                                                 
                hover:cursor-pointer hover:opacity-80 transition-all delay-150 duration-300 ${plan.popular ? "scale-115 z-10" : 
                "scale-100"}`}
                key={plan.name}
                >
                  <h3 className='text-xl font-semibold py-5'>{plan.name}</h3>

                  <p className='font-semibold'>{plan.price}</p>

                  <p className='font-semibold py-3'>{plan.description}</p>

                    <ul className='list-disc pl-5 space-y-2'>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <a href='#contact-section'>
                      <button
                      className='mt-5 bg-[#FAFAFA] text-[#004643] px-3 py-2 rounded-xl hover:cursor-pointer'
                      >
                        {plan.buttonText}
                      </button>
                    </a>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  )
}

export default PricingSection