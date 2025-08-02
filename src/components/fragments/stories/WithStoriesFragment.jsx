import IconLabel from "../../elements/text/IconLabel"
import TextElement from "../../elements/text/TextElement"
import { HiCheck } from 'react-icons/hi'

const WithStoriesFragment = () => {
    return (
        <>
            <div className="flex flex-col gap-8 max-w-[550px]">
                <TextElement type="2xl_700" textColor="text-secondary-700">Track Business Expenses until its Milisecond</TextElement>
                <IconLabel Icon={HiCheck} label='Analyze your business cost easily with group transaction thorugh tagging feature.' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start'/>
                <IconLabel Icon={HiCheck} label='Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start'/>
                <IconLabel Icon={HiCheck} label='Arrange your business expenses by date, name, etc.,  with just one click.' padding='p-1 mt-1' bgIcon='bg-success-500' iconSize='15px' textColor='text-secondary-700' textType='lg_500' classname='items-start'/>
            </div>
        </>
    )
}

export default WithStoriesFragment