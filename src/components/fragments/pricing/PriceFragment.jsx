import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'
import { HiCheck, HiX } from 'react-icons/hi'
import ToggleElement from '../../elements/toggle/ToggleElement'
import ImageLabel from '../../elements/text/ImageLabel'
import IconLabel from '../../elements/text/IconLabel'

const PriceFragment = () => {
    return (
        <>
            <div className="bg-primary-0 py-25">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto">
                    <div className="flex flex-col w-full mx-auto items-center gap-16">
                        <div className="space-y-16">
                            <div className="flex flex-col gap-6 text-center">
                                <TextElement type="5xl_700" textColor="text-secondary-900" textTransform="" classname="">
                                    Ready to Get Started?
                                </TextElement>
                                <TextElement type="xl_400" textColor="text-secondary-400" textTransform="" classname="max-w-[740px]">
                                    Choose a plan that suits your business needs
                                </TextElement>
                            </div>
                            <div className="flex justify-center gap-6 text-center">
                                <TextElement type="xl_600" textColor="text-secondary-700" textTransform="" classname="">
                                    Monthly
                                </TextElement>
                                <ToggleElement label={{ on: "Save 65%", off: "Save 40%" }} />
                                <TextElement type="xl_600" textColor="text-secondary-700" textTransform="" classname="">
                                    Yearly
                                </TextElement>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 w-full gap-6 h-[710px]">
                            <div className="bg-secondary-100/30 p-8 rounded-xl h-full">
                                <ImageLabel path="pricing" image='free' format="svg" label='Free' textType='3xl_600' textColor='text-secondary-700' />
                                <TextElement type='md_400' textColor='text-secondary-400' classname='pt-3'>Perfect plan to get started</TextElement>
                                <div className="flex items-center gap-3 py-6">
                                    <TextElement type='5xl_600' textColor='text-secondary-700'>$0</TextElement>
                                    <TextElement type='lg_500' textColor='text-secondary-400'>/month</TextElement>
                                </div>
                                <TextElement type='md_400' textColor='text-secondary-500'>A free plan grants you access to some cool features of Spend.In.</TextElement>
                                <div className="flex flex-col gap-6 pt-8 pb-10">
                                    <IconLabel  Icon={HiCheck} label='Sync accross device' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='5 workspace' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Collaborate with 5 user' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiX} label='Sharing permission' padding='p-1 mt-1' bgIcon='bg-secondary-400' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiX} label='Admin tools' padding='p-1 mt-1' bgIcon='bg-secondary-400' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiX} label='100+ integrations' padding='p-1 mt-1' bgIcon='bg-secondary-400' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                </div>
                                <ButtonElement typeButton='label' label='Get Your Free Plan' classname='w-full' textType='md_600'/>
                            </div>
                            <div className="bg-secondary-100/30 p-8 rounded-xl h-full">
                                <ImageLabel path="pricing" image='pro' format="svg" label='Pro' textType='3xl_600' textColor='text-secondary-700' />
                                <TextElement type='md_400' textColor='text-secondary-400' classname='pt-3'>Perfect plan for professionals!</TextElement>
                                <div className="flex items-center gap-3 py-6">
                                    <TextElement type='5xl_600' textColor='text-secondary-700'>$12</TextElement>
                                    <TextElement type='lg_500' textColor='text-secondary-400'>/month</TextElement>
                                </div>
                                <TextElement type='md_400' textColor='text-secondary-500'>For professional only! Start arranging your expenses with our best templates.</TextElement>
                                <div className="flex flex-col gap-6 pt-8 pb-10">
                                    <IconLabel  Icon={HiCheck} label='Everything in Free Plan' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Unlimited workspace' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Collaborative workspace' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Sharing permission' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Admin tools' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='100+ integrations' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                </div>
                                <ButtonElement typeButton='label' label='Get Started' classname='w-full' textType='md_600'/>
                            </div>
                            <div className="bg-secondary-100/30 p-8 rounded-xl h-full">
                                <ImageLabel path="pricing" image='ultimate' format="svg" label='Ultimate' textType='3xl_600' textColor='text-secondary-700' />
                                <TextElement type='md_400' textColor='text-secondary-400' classname='pt-3'>Best suits for great company!</TextElement>
                                <div className="flex items-center gap-3 py-6">
                                    <TextElement type='5xl_600' textColor='text-secondary-700'>$33</TextElement>
                                    <TextElement type='lg_500' textColor='text-secondary-400'>/month</TextElement>
                                </div>
                                <TextElement type='md_400' textColor='text-secondary-500'>If you a finance manager at big  company, this plan is a perfect match.</TextElement>
                                <div className="flex flex-col gap-6 pt-8 pb-10">
                                    <IconLabel  Icon={HiCheck} label='Everything in Pro Plan' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Daily performance reports' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Dedicated assistant' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Artificial intelligence' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Marketing tools & automations' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                    <IconLabel Icon={HiCheck} label='Advanced security' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start' />
                                </div>
                                <ButtonElement typeButton='label' label='Get Started' classname='w-full' textType='md_600'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PriceFragment