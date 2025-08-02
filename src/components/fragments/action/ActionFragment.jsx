import React from 'react'
import TextElement from '../../elements/text/TextElement'
import ButtonElement from '../../elements/button/ButtonElement'
import ImageElement from '../../elements/image/ImageElement'

const ActionFragment = () => {
    return (
        <div className="bg-secondary-700 mt-5 relative">
            <div className="w-full max-w-11/12  lg:max-w-10/12 mx-auto">
                <div className="h-[600px] max-w-[600px] flex items-center justify-start">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 max-w-[600px]">
                            <TextElement type="xl_600" textColor="text-primary-500" textTransform="uppercase" classname="">
                                DOWNLOAD NOW!
                            </TextElement>
                            <TextElement type="5xl_700" textColor="text-primary-0" textTransform="" classname="">
                                Start Track Your Business Expenses Today
                            </TextElement>
                        </div>
                        <TextElement type="xl_400" textColor="text-secondary-400" textTransform="" classname="">
                            Are you ready to make your business more organized? Download Spend.In now!
                        </TextElement>
                        <ButtonElement typeButton='label' label='get a free demo' classname='w-1/3 mt-4' textType='md_600' />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[700px] h-[450px] bg-secondary-100 rounded-tl-2xl">
                <ImageElement path='action' image='action-1' format='svg' classname='absolute bottom-0 right-0' />
                <ImageElement path='action' image='action-2' format='svg' classname='absolute bottom-0' />
            </div>
        </div >
    )
}

export default ActionFragment