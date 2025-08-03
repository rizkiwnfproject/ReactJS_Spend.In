import IconLabel from "../../elements/text/IconLabel"
import TextElement from "../../elements/text/TextElement"
import { HiX } from 'react-icons/hi'
const WithoutStoriesFragment = () => {
    return (
        <>
            <div className="flex flex-col gap-8 lg:max-w-[550px]">
                <TextElement type="2xl_700" textColor="text-secondary-700">Taking too long to tidy up administrative files makes it unproductive</TextElement>
                <IconLabel Icon={HiX} label='Complex recording process due to every administrative file in a different place.' padding='p-1 mt-1' bgIcon='bg-error-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' respText='text-xs' classname='items-start' />
                <IconLabel Icon={HiX} label='Need more effort to pay manually one by one invoice because there is no payment accommodation.' padding='p-1 mt-1' bgIcon='bg-error-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' respText='text-xs' classname='items-start' />
                <IconLabel Icon={HiX} label='Manual data arranging needs a long time because the different months/years are not in the same place.' padding='p-1 mt-1' bgIcon='bg-error-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' respText='text-xs' classname='items-start' />
            </div>
        </>
    )
}

export default WithoutStoriesFragment