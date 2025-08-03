import React from 'react'
import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'

const ActionFragment = () => {
    return (
        <div className="bg-secondary-700 relative py-8 lg:py-0">
            <div className="w-full max-w-10/12 lg:max-w-10/12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-[600px] max-w-[600px] flex lg:items-center justify-start">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3 max-w-[600px]">
                                <TextElement type="xl_600" respText='text-xs' textColor="text-primary-500" textTransform="uppercase" classname="">
                                    DOWNLOAD NOW!
                                </TextElement>
                                <TextElement type="5xl_700" respText='text-2xl' textColor="text-primary-0" textTransform="" classname="">
                                    Start Track Your Business Expenses Today
                                </TextElement>
                            </div>
                            <TextElement type="xl_400" respText='text-sm' textColor="text-secondary-400" textTransform="" classname="w-80 lg:w-auto">
                                Here are some testimonials from our user after using Spend.In to manage their business  expenses.
                            </TextElement>
                            <ButtonElement typeButton='label' label='get a free demo' classname='lg:w-1/3 mt-8 lg:mt-4' textType='md_600' />
                        </div>
                    </div>
                    <div className="h-[20px] lg:h-auto">
                        <div className="absolute bottom-0 right-0 w-[350px] lg:w-[700px] h-[300px] lg:h-[450px] bg-secondary-100 rounded-tl-2xl">
                            <ImageElement path='action' image='action-1' format='svg' classname='absolute bottom-0 right-0 w-[250px] h-[250px] object-cover object-top-left lg:h-auto lg:w-auto z-0' />
                            <ImageElement path='action' image='action-2' format='svg' classname='absolute bottom-0 w-[300px] h-[230px]  lg:h-auto lg:w-auto z-1' />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ActionFragment