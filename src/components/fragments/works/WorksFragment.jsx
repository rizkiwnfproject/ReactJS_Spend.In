import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'
import { HiCheck } from 'react-icons/hi'

const WorksFragment = () => {
    return (
        <>
            <div className="bg-secondary-700 ">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto max-h-screen">
                    <div className="grid grid-cols-2 w-full h-screen items-center justify-center">
                        <div className="relative bg-secondary-100 w-[588px] h-[536px] rounded-xl">
                            {/* dikasih overlay */}
                            <ImageElement path='how-it-works' image='hiw-1' format='svg' name='how-it-works' classname='absolute bottom-0 right-0' />
                            <div className="absolute top-10 left-10 flex items-center gap-2 bg-primary-0 w-90 h-16 rounded-lg pl-4 drop-shadow-md">
                                <ButtonElement typeButton='icon' bgColor='bg-success-600' textColor='text-primary-0' iconSize='14px' padding='p-1' icon={HiCheck} />
                                <TextElement type="md_600" textColor="text-secondary-700" textTransform="" classname="">
                                    Yeay! Your account has been registered.
                                </TextElement>
                            </div>
                            <div className="absolute top-35 left-15 flex items-center gap-2 bg-primary-0 w-90 h-16 rounded-lg pl-4 drop-shadow-md">
                                <ButtonElement typeButton='icon' bgColor='bg-success-600' textColor='text-primary-0' iconSize='14px' padding='p-1' icon={HiCheck} />
                                <TextElement type="md_600" textColor="text-secondary-700" textTransform="" classname="">
                                    Your expenses has been saved.
                                </TextElement>
                            </div>
                            <div className="absolute top-60 left-24 flex items-center gap-2 bg-primary-0 w-90 h-16 rounded-lg pl-4 drop-shadow-md">
                                <ButtonElement typeButton='icon' bgColor='bg-success-600' textColor='text-primary-0' iconSize='14px' padding='p-1' icon={HiCheck} />
                                <TextElement type="md_600" textColor="text-secondary-700" textTransform="" classname="">
                                    Done, let’s continue the work
                                </TextElement>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6 max-w-[510px]">
                                <div className="flex flex-col gap-3">
                                    <TextElement type="xl_600" textColor="text-primary-500" textTransform="uppercase" classname="">
                                        HOW IT WORKS
                                    </TextElement>
                                    <TextElement type="5xl_700" textColor="text-primary-0" textTransform="" classname="">
                                        Few Easy Steps and Done
                                    </TextElement>
                                </div>
                                <TextElement type="xl_400" textColor="text-secondary-300" textTransform="" classname="max-w-[740px]">
                                    In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
                                </TextElement>
                            </div>
                            <div className="bg-linear-to-br from-secondary-500 to-secondary-500/10 max-w-[550px] w-full h-auto rounded-lg py-10 pl-14 relative">
                                <div className="border-l-2 border-l-primary-500 pt-3 pb-13 px-12">
                                    <TextElement type="xl_500" textColor='text-primary-0'>Register your Spend.In account.</TextElement>
                                    <ButtonElement typeButton='label' label='1' textType='2xl_500' padding='' classname='w-13 h-13 absolute top-8 left-8'/>
                                </div>
                                <div className="border-dashed border-l-2 border-l-primary-0  pt-3 pb-13 px-12">
                                    <TextElement type="xl_500" textColor='text-primary-0'>Fill in the list of your business expenses.</TextElement>
                                    <ButtonElement typeButton='label' label='2' textType='2xl_500' padding='' classname='w-13 h-13 absolute top-30 left-8'/>
                                </div>
                                <div className="px-12">
                                    <TextElement type="xl_500" textColor='text-primary-0'>Done, let’s continue the work.</TextElement>
                                    <ButtonElement typeButton='label' label='3' bgColor='bg-primary-0' textColor='text-secondary-900' textType='2xl_500' padding='' classname='w-13 h-13 absolute top-52 left-8'/>
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