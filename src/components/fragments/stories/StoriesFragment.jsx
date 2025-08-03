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
                <div className="w-full max-w-10/12 lg:max-w-10/12 mx-auto lg:max-h-screen ">
                    <div className="grid grid-cols-1 lg:grid-cols-5  h-auto lg:h-screen py-8 lg:py-25 gap-y-13 lg:gap-y-0">
                        <div className="lg:col-span-3 flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-3 w-[270px] lg:w-auto">
                                <TextElement type="xl_600" respText='text-xs' textColor="text-primary-500" textTransform="uppercase" classname="">
                                    INCREASE PRODUCTIVITY
                                </TextElement>
                                <TextElement type="5xl_700" respText='text-2xl' textColor="text-secondary-700" textTransform="" classname="">
                                    Reduce Time in Doing Manual Work Managing Expenses
                                </TextElement>
                            </div>
                            <div className='flex flex-col gap-8 lg:gap-12.5 w-full'>
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