import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'
import { HiCheck } from 'react-icons/hi'

const BenefitFragment = () => {
    return (
        <>
            <div className="bg-primary-0 py-8 lg:py-0">
                <div className="w-full max-w-10/12 lg:max-w-10/12 mx-auto lg:max-h-screen">
                    <div className="flex flex-col w-full lg:h-screen mx-auto items-center justify-center gap-8 lg:gap-16">
                        <div className="flex flex-col gap-3 lg:gap-6 md:text-center" data-aos="fade-up">
                            <div className="flex flex-col gap-3 w-[160px] md:w-auto ">
                                <TextElement type="xl_600" respText='text-xs' textColor="text-primary-500" textTransform="uppercase" classname="">
                                    WHY USE SPEND.IN
                                </TextElement>
                                <TextElement type="5xl_700" respText='text-2xl' textColor="text-secondary-900" textTransform="" classname="leading-[150%] lg:leading-normal">
                                    Easy, Simple, Affordable
                                </TextElement>
                            </div>
                            <TextElement type="xl_400" respText='text-sm' textColor="text-secondary-400" textTransform="" classname="max-w-[740px]">
                                Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                            </TextElement>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 lg:gap-0">
                            <div className="pt-3 flex flex-col gap-3.5 lg:gap-11" data-aos="fade-right">
                                <div className="flex gap-3 lg:gap-8 w-full">
                                    <ButtonElement typeButton='svg' path='benefit' image='wallet' padding='px-2 lg:px-3' rounded='rounded -md lg:rounded-xl' classname='h-7 lg:h-12.5 flex justify-center items-center' classnamePict='w-5 md:w-8 lg:w-auto h-5 lg:h-auto' />
                                    <div className="flex flex-col max-w-[500px] gap-3">
                                        <TextElement type="2xl_600" textColor="text-secondary-900" textTransform="" classname="">
                                            Automatic Invoice Payment
                                        </TextElement>
                                        <TextElement type="md_400" respText='text-xs' textColor="text-secondary-400" textTransform="" classname="">
                                            Automatic payments help you to arrange payments on a certain date without doing it manually again.
                                        </TextElement>
                                    </div>
                                </div>
                                <div className="flex gap-3 lg:gap-8 w-full">
                                    <ButtonElement typeButton='svg' path='benefit' image='clear' padding='px-2 lg:px-3' rounded='rounded -md lg:rounded-xl' classname='h-7 lg:h-12.5 flex justify-center items-center' classnamePict='w-5 md:w-8 lg:w-auto h-5 lg:h-auto' />
                                    <div className="flex flex-col max-w-[500px] gap-3">
                                        <TextElement type="2xl_600" textColor="text-secondary-900" textTransform="" classname="">
                                            Clear payment history
                                        </TextElement>
                                        <TextElement type="md_400" respText='text-xs' textColor="text-secondary-400" textTransform="" classname="">
                                            Clear payment history helps you to track your business expenses on specific dates.
                                        </TextElement>
                                    </div>
                                </div>
                                <div className="flex gap-3 lg:gap-8 w-full">
                                    <ButtonElement typeButton='svg' path='benefit' image='cards' padding='px-2 lg:px-3' rounded='rounded -md lg:rounded-xl' classname='h-7 lg:h-12.5 flex justify-center items-center' classnamePict='w-5 md:w-8 lg:w-auto h-5 lg:h-auto' />
                                    <div className="flex flex-col max-w-[500px] gap-3">
                                        <TextElement type="2xl_600" textColor="text-secondary-900" textTransform="" classname="">
                                            Use of multi-card payments
                                        </TextElement>
                                        <TextElement type="md_400" respText='text-xs' textColor="text-secondary-400" textTransform="" classname="">
                                            Have more than one debit or credit card? Don't worry, we support payments using more than one card.
                                        </TextElement>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="fade-left">
                                <div className="relative w-full h-[275px] lg:w-[621px] lg:h-[410px] bg-secondary-100/40 rounded-xl">
                                    <ImageElement path='benefit' image='benefit-1' format='svg' classname='absolute bottom-0 right-0 h-[220px] lg:h-auto w-[250px] lg:w-auto object-cover object-top-left' />
                                    <div className="lg:w-[350px] h-[170px] lg:h-[250px] overflow-hidden rounded-t-xl lg:rounded-t-lg absolute bottom-0 left-8 lg:left-12 z-1 border-x border-t border-t-secondary-100 border-x-secondary-100">
                                        <ImageElement
                                            path="benefit"
                                            image="benefit-2"
                                            format="svg"
                                            classname="w-full h-full lg:object-cover lg:object-top"
                                        />
                                    </div>
                                    {/* <ImageElement path='benefit' image='benefit-2' format='svg' classname=' w-auto h-3/4 object-cover rounded-lg' /> */}
                                    <div className="absolute bottom-0 right-0 z-0 w-[521px] h-[345px] bg-linear-to-r from-secondary-300/5 to-primary-0/5 rounded-l-xl"></div>
                                    <div className="absolute bottom-0 left-7 lg:left-10 z-2 w-19 lg:w-40 h-42.5 lg:h-62.5 bg-linear-to-l from-information-500/80 to-information500/50 rounded-l-xl"></div>
                                    <div className="absolute top-35 lg:top-45 right-2 lg:right-35 z-3 flex items-center gap-2 bg-primary-0 py-2 pl-2 w-32 lg:w-40 rounded-full shadow-2xl lg:shadow-md">
                                        <div className="p-1 lg:p-2 bg-success-600 lg:w-13 rounded-full">
                                            <ButtonElement typeButton='icon' bgColor='bg-success-700' textColor='text-primary-0' iconSize='20px' padding='p-1 lg:p-2' icon={HiCheck} />
                                        </div>
                                        <TextElement type="md_600" textColor="text-secondary-900" textTransform="" classname="">
                                            Verified
                                        </TextElement>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default BenefitFragment