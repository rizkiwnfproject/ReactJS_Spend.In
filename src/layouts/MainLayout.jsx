import ActionSection from "../components/sections/action/ActionSection"
import BenefitSection from "../components/sections/benefit/BenefitSection"
import FooterSection from "../components/sections/footer/FooterSection"
import HeroSection from "../components/sections/hero/HeroSection"
import NavbarSection from "../components/sections/navbar/NavbarSection"
import PriceSection from "../components/sections/pricing/PriceSection"
import StoriesSection from "../components/sections/stories/StoriesSection"
import TestimonialSection from "../components/sections/testimonial/TestimonialSection"
import WorkSection from "../components/sections/works/WorksSection"

import { Element } from 'react-scroll'

const MainLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-secondary-700 border border-b-secondary-500">
        <NavbarSection />
      </div>
      <div className="overflow-hidden">
        <Element name="hero" >
          <section id="hero">
            <HeroSection />
          </section>
        </Element >
        <Element name="benefit">
          <section id="benefit">
            <BenefitSection />
          </section>
        </Element >
        <Element name="works">
          <section id="works">
            <WorkSection />
          </section>
        </Element >
        <Element name="stories">
          <section id="works">
            <StoriesSection />
          </section>
        </Element >
        <Element name="testimonial">
          <section id="works">
            <TestimonialSection />
          </section>
        </Element >
        <Element name="price">
          <section id="price" className="scroll-mt-24">
            <PriceSection />
          </section>
        </Element >
        <Element name="action">
          <section id="action">
            <ActionSection />
          </section>
        </Element >
        <Element name="contact">
          <section id="action">
            <FooterSection />
          </section>
        </Element >
      </div>
    </>
  )
}

export default MainLayout