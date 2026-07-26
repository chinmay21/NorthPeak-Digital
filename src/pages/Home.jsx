import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import WhyUsSection from '../components/WhyUsSection'
import ResultSection from '../components/ResultSection'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServiceSection/>
      <WhyUsSection/>
      <ResultSection/>
      <PricingSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default Home