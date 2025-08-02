import ActionSection from "../components/sections/action/ActionSection"
import BenefitSection from "../components/sections/benefit/BenefitSection"
import HeroSection from "../components/sections/hero/HeroSection"
import NavbarSection from "../components/sections/navbar/NavbarSection"
import StoriesSection from "../components/sections/stories/StoriesSection"
import TestimonialSection from "../components/sections/testimonial/TestimonialSection"
import WorkSection from "../components/sections/works/WorksSection"

const MainLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-secondary-700 border border-b-secondary-500">
        <NavbarSection />
      </div>
      <div className="">
        <HeroSection />
      </div>
      <div className="">
        <BenefitSection />
      </div>
      <div className="">
        <WorkSection />
      </div>
      <div className="">
        <StoriesSection />
      </div>
      <div className="">
        <TestimonialSection />
      </div>
      <div className="">
        <ActionSection />
      </div>
    </>
  )
}

export default MainLayout