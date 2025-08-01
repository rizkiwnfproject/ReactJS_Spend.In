import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'
import { HiCheck } from 'react-icons/hi'

const BenefitFragment = () => {
    return (
        <>
            <div className="bg-primary-0">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto max-h-screen">
                    <div className="flex flex-col w-full h-screen mx-auto items-center justify-center gap-16">
                        <div className="flex flex-col gap-6 text-center">
                            <div className="flex flex-col gap-3">
                                <TextElement type="xl_600" textColor="text-primary-500" textTransform="uppercase" classname="">
                                    WHY USE SPEND.IN
                                </TextElement>
                                <TextElement type="5xl_700" textColor="text-secondary-900" textTransform="" classname="">
                                    Easy, Simple, Affordable
                                </TextElement>
                            </div>
                            <TextElement type="xl_400" textColor="text-secondary-400" textTransform="" classname="max-w-[740px]">
                                Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                            </TextElement>
                        </div>
                        <div className="grid grid-cols-2 w-full">
                            <div className="pt-3 flex flex-col gap-11">
                                <div className="flex gap-8">
                                    <ButtonElement typeButton='svg' path='benefit' image='wallet' padding='' rounded='rounded-xl' classname='h-12.5 w-12.5 flex justify-center items-center' />
                                    <div className="flex flex-col max-w-[500px] gap-3">
                                        <TextElement type="2xl_600" textColor="text-secondary-900" textTransform="" classname="max-w-[740px]">
                                            Automatic Invoice Payment
                                        </TextElement>
                                        <TextElement type="md_400" textColor="text-secondary-400" textTransform="" classname="max-w-[740px]">
                                            Automatic payments help you to arrange payments on a certain date without doing it manually again.
                                        </TextElement>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <ButtonElement typeButton='svg' path='benefit' image='clear' padding='' rounded='rounded-xl' classname='h-12.5 w-12.5 flex justify-center items-center' />
                                    <div className="flex flex-col max-w-[500px] gap-3">
                                        <TextElement type="2xl_600" textColor="text-secondary-900" textTransform="" classname="max-w-[740px]">
                                            Clear payment history
                                        </TextElement>
                                        <TextElement type="md_400" textColor="text-secondary-400" textTransform="" classname="max-w-[740px]">
                                            Clear payment history helps you to track your business expenses on specific dates.
                                        </TextElement>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <ButtonElement typeButton='svg' path='benefit' image='cards' padding='' rounded='rounded-xl' classname='h-12.5 w-12.5 flex justify-center items-center' />
                                    <div className="flex flex-col max-w-[500px] gap-3">
                                        <TextElement type="2xl_600" textColor="text-secondary-900" textTransform="" classname="max-w-[740px]">
                                            Use of multi-card payments
                                        </TextElement>
                                        <TextElement type="md_400" textColor="text-secondary-400" textTransform="" classname="max-w-[740px]">
                                            Have more than one debit or credit card? Don't worry, we support payments using more than one card.
                                        </TextElement>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="relative w-[621px] h-[410px] bg-secondary-100 rounded-xl">
                                    <ImageElement path='benefit' image='benefit-1' format='svg' classname='absolute bottom-0 right-0' />
                                    <ImageElement path='benefit' image='benefit-2' format='svg' classname='absolute bottom-0 left-0' />
                                    <div className="absolute bottom-0 left-10 w-40 h-64 bg-linear-to-l from-information-500 to-information500/50 rounded-l-xl"></div>
                                    <div className="absolute top-45 right-35 flex items-center gap-2 bg-primary-0 py-2 pl-2 w-40 rounded-full shadow-md">
                                        <div className="p-2 bg-success-600 w-13 rounded-full">
                                            <ButtonElement typeButton='icon' bgColor='bg-success-700' textColor='text-primary-0' iconSize='20px' padding='p-2' icon={HiCheck} />
                                        </div>
                                        <TextElement type="md_600" textColor="text-secondary-900" textTransform="" classname="max-w-[740px]">
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