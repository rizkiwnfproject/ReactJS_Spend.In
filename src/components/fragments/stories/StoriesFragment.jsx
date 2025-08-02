import TabElement from '../../elements/tab/TabElement'
import TextElement from '../../elements/text/TextElement'
import { useState } from 'react'
import WithStoriesFragment from './WithStoriesFragment'
import WithoutStoriesFragment from './WithoutStoriesFragment'
import ImageElement from '../../elements/image/ImageElement'
const StoriesFragment = () => {
    const [activeTab, setActiveTab] = useState("with");

    const renderContent = () => {
        if (activeTab === "with") {
            return (
                <WithStoriesFragment />
            );
        } else {
            return (
                <WithoutStoriesFragment />
            );
        }
    };
    return (
        <>
            <div className="bg-primary-0">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto max-h-screen">
                    <div className="grid grid-cols-5 w-full h-screen py-25">
                        <div className="col-span-3 flex flex-col gap-8 ">
                            <div className="flex flex-col gap-3">
                                <TextElement type="xl_600" textColor="text-primary-500" textTransform="uppercase" classname="">
                                    INCREASE PRODUCTIVITY
                                </TextElement>
                                <TextElement type="5xl_700" textColor="text-secondary-700" textTransform="" classname="">
                                    Reduce Time in Doing Manual Work Managing Expenses
                                </TextElement>
                            </div>
                            <div className='flex flex-col gap-12.5'>
                                <TabElement
                                    tabs={[
                                        { label: "With Spend.In", value: "with" },
                                        { label: "Without Spend.In", value: "without" },
                                    ]}
                                    onTabChange={(value) => setActiveTab(value)}
                                />
                                {renderContent()}
                            </div>
                        </div>
                        <div className="col-span-2 flex items-end">
                            <ImageElement path='stories' image={activeTab === 'with' ? 'with' : 'without'} format='svg'/>
                        </div>
                        
                    </div>
                </div>
            </div >
        </>
    )
}

export default StoriesFragment