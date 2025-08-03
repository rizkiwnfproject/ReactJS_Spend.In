import ButtonElement from "../../elements/button/ButtonElement"
import ImageElement from "../../elements/image/ImageElement"
import TextElement from "../../elements/text/TextElement"

const HeroFragment = () => {
    return (
        <>
            <div className="bg-secondary-700 relative overflow-hidden pb-0 lg:pb-50">
                <div className="absolute -top-36 lg:-top-120 -right-50 lg:-right-120 w-[400px] lg:w-[900px] h-[400px] lg:h-[900px] border-[50px] lg:border-[100px] border-primary-0/5 rounded-full z-0"></div>
                <div className="absolute -bottom-40 lg:-bottom-110 -left-60 lg:-left-90 w-[400px] lg:w-[900px] h-[400px] lg:h-[900px] border-[50px] lg:border-[100px] border-primary-0/5 rounded-full z-0"></div>
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto lg:max-h-screen pt-35 lg:pt-55 px-3 lg:px-0" data-aos="fade-up">
                    <div className="flex flex-col w-full lg:h-screen mx-auto lg:items-center justify-center gap-10" >
                        <div className="flex flex-col gap-6 lg:text-center">
                            <TextElement type="6xl_700" respText="text-4xl" textColor="text-primary-0" textTransform="" classname="max-w-[850px] tracking-tight leading-[150%]">
                                All your <br className="block lg:hidden" /> business <br className="hidden lg:block" /> expenses in one place.
                            </TextElement>
                            <TextElement type="2xl_400" respText="text-sm" textColor="text-secondary-300" textTransform="" classname="tracking-tight leading-[150%] w-[300px] md:w-auto">
                                Your one-stop finance empower platform. <br />Manage all your business expenses with our supafast app.
                            </TextElement>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                            <ButtonElement typeButton="label" label="Get a Free Demo" textType="md_600" classname="w-full md:w-auto" />
                            <ButtonElement typeButton="label" bgColor="md:bg-secondary-500" label="See Pricing" textColor="text-secondary-400 lg:text-secondary-200" textType="md_600" />
                        </div>
                        <div className="h-[150px] lg:h-[400px]">
                            <ImageElement path="hero" image="hero" name="dashboard" classname="object-cover object-top lg:mt-8 w-full rounded-t-lg lg:rounded-t-xl" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HeroFragment