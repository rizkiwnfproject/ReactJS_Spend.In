import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'
import { HiArrowSmLeft, HiArrowSmRight, HiCheck } from 'react-icons/hi'
import { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const TestimonialFragment = () => {

  const testimonials = [
    {
      title: "It’s just incredible!",
      content: "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
      name: "Jimmy Bartney",
      position: "Product Manager at Picko Lab",
      image: "user-1"
    },
    {
      title: "Satisfied User Here!",
      content: "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
      name: "Natasha Romanoff",
      position: "Black Widow",
      image: "user-2"
    },
    {
      title: "No doubt, Spend.In is the best!",
      content: "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
      name: "Moritika Kazuki",
      position: "Finance Manager at Mangan",
      image: "user-3"
    },
    {
      title: "Satisfied User Here!",
      content: "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
      name: "Natasha Romanoff",
      position: "Black Widow",
      image: "user-2"
    },
  ]

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="bg-secondary-700 py-20">
        <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto max-h-screen">
          <div className="flex flex-col w-full mx-auto items-center justify-center gap-16">
            <div className="flex flex-col gap-6 text-center max-w-[580px]">
              <div className="flex flex-col gap-3">
                <TextElement type="xl_600" textColor="text-primary-500" textTransform="uppercase" classname="">
                  WHAT THEY SAY
                </TextElement>
                <TextElement type="5xl_700" textColor="text-primary-0" textTransform="" classname="">
                  Our User Kind Words
                </TextElement>
              </div>
              <TextElement type="xl_400" textColor="text-secondary-400" textTransform="" classname="max-w-[740px]">
                Here are some testimonials from our user after using Spend.In to manage their business  expenses.
              </TextElement>
            </div>
            <div className="w-full">
              <Swiper
                modules={[Navigation]}
                // loop={true}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current
                  swiper.params.navigation.nextEl = nextRef.current
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  }
                }}
              >
                {testimonials.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col justify-between bg-secondary-500 w-full h-[370px] rounded-xl p-8">
                      <div className="flex flex-col gap-4">
                        <TextElement type='lg_600' textColor='text-primary-0'>{item.title}</TextElement>
                        <TextElement type='md_500' textColor='text-primary-0'>{item.content}</TextElement>
                      </div>
                      <div className="flex items-center pt-8 gap-6 border-t border-t-secondary-300/20">
                        <ImageElement path='user' image={item.image} name={item.name} classname='w-17.5 h-17.5 rounded-lg' />
                        <div className="flex flex-col gap-0">
                          <TextElement type='lg_700' textColor='text-primary-0'>{item.name}</TextElement>
                          <TextElement type='sm_400' textColor='text-secondary-200'>{item.position}</TextElement>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full flex justify-center gap-6">
              <ButtonElement typeButton='icon' padding='p-3' bgColor='bg-secondary-500' iconSize='23px' ref={prevRef} icon={HiArrowSmLeft} />
              <ButtonElement typeButton='icon' padding='p-3' iconSize='23px' ref={nextRef} icon={HiArrowSmRight} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default TestimonialFragment