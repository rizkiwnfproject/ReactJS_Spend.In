import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'
import { HiCheck } from 'react-icons/hi'

const WorksFragment = () => {
    return (
        <>
            <div className="bg-secondary-700 py-8 lg:py-0">
                <div className="w-full max-w-10/12 lg:max-w-10/12 mx-auto lg:max-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:h-screen lg:items-center lg:justify-center gap-8 lg:gap-0">
                        <div className="order-2 lg:order-1 relative bg-secondary-100 lg:w-[588px] h-[300px] md:h-[390px] lg:h-[536px] rounded-xl" data-aos="fade-right">
                            {/* dikasih overlay */}
                            <ImageElement path='how-it-works' image='hiw-1' format='svg' name='how-it-works' classname='absolute bottom-0 right-0 w-[270px] lg:w-auto rounded-xl' />
                            <div className="absolute top-5 lg:top-10 left-3 lg:left-10 flex items-center gap-2 bg-primary-0 w-56 lg:w-92 py-2 lg:h-16 rounded-md lg:rounded-lg pl-2 lg:pl-4 drop-shadow-md">
                                <ButtonElement typeButton='icon' bgColor='bg-success-600' textColor='text-primary-0' iconSize='14px' padding='p-1' icon={HiCheck} />
                                <TextElement type="md_600" respText='text-[9px]' textColor="text-secondary-700" textTransform="" classname="">
                                    Yeay! Your account has been registered.
                                </TextElement>
                            </div>
                            <div className="absolute top-20 lg:top-35 left-7 lg:left-15 flex items-center gap-2 bg-primary-0 w-56 lg:w-92 py-2 lg:h-16 rounded-md lg:rounded-lg pl-2 lg:pl-4 drop-shadow-md">
                                <ButtonElement typeButton='icon' bgColor='bg-success-600' textColor='text-primary-0' iconSize='14px' padding='p-1' icon={HiCheck} />
                                <TextElement type="md_600" respText='text-[9px]' textColor="text-secondary-700" textTransform="" classname="">
                                    Your expenses has been saved.
                                </TextElement>
                            </div>
                            <div className="absolute top-35 lg:top-60 left-12 lg:left-24 flex items-center gap-2 bg-primary-0 w-56 lg:w-92 py-2 lg:h-16 rounded-md lg:rounded-lg pl-2 lg:pl-4 drop-shadow-md">
                                <ButtonElement typeButton='icon' bgColor='bg-success-600' textColor='text-primary-0' iconSize='14px' padding='p-1' icon={HiCheck} />
                                <TextElement type="md_600" respText='text-[9px]' textColor="text-secondary-700" textTransform="" classname="">
                                    Done, let’s continue the work
                                </TextElement>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col gap-8">
                            <div className="flex flex-col gap-6 max-w-[510px]" data-aos="fade-down">
                                <div className="flex flex-col gap-3 w-[200px] lg:w-auto">
                                    <TextElement type="xl_600" respText='text-xs' textColor="text-primary-500" textTransform="uppercase" classname="">
                                        HOW IT WORKS
                                    </TextElement>
                                    <TextElement type="5xl_700" respText='text-2xl' textColor="text-primary-0" textTransform="" classname="">
                                        Few Easy Steps and Done
                                    </TextElement>
                                </div>
                                <TextElement type="xl_400" respText='text-sm' textColor="text-secondary-300" textTransform="" classname="lg:max-w-[740px]">
                                    In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
                                </TextElement>
                            </div>
                            <div className="bg-linear-to-br from-secondary-500 to-secondary-500/10 max-w-[550px] w-full h-auto rounded-lg py-5 lg:py-10 pl-7 lg:pl-14 relative" data-aos="fade-left">
                                <div className="border-l-2 border-l-primary-500 pt-1 lg:pt-2 pb-10 lg:pb-13 pl-8  lg:px-12">
                                    <TextElement type="xl_500"
                                        respText='text-sm' textColor='text-primary-0'>Register your Spend.In account.</TextElement>
                                    <ButtonElement typeButton='label' label='1' textType='2xl_500' padding='' classname='w-8 h-8 lg:w-13 lg:h-13 absolute top-5 lg:top-8 left-3 lg:left-8' />
                                </div>
                                <div className="border-dashed border-l-2 border-l-primary-0 pt-1 lg:pt-3 pb-6 lg:pb-13 pl-8 lg:px-12">
                                    <TextElement type="xl_500"
                                        respText='text-sm' textColor='text-primary-0'>Fill in the list of your business expenses.</TextElement>
                                    <ButtonElement typeButton='label' label='2' textType='2xl_500' padding='' classname='w-8 h-8 lg:w-13 lg:h-13 absolute top-20 lg:top-30 left-3 lg:left-8' />
                                </div>
                                <div className="pl-8  lg:px-12">
                                    <TextElement type="xl_500" respText='text-sm' textColor='text-primary-0'>Done, let’s continue the work.</TextElement>
                                    <ButtonElement typeButton='label' label='3' bgColor='bg-primary-0' textColor='text-secondary-900' textType='2xl_500' padding='' classname='w-8 h-8 lg:w-13 lg:h-13 absolute top-36 lg:top-52 left-3 lg:left-8' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WorksFragment