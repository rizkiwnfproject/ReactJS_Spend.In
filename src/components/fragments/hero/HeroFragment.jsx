import ButtonElement from "../../elements/button/ButtonElement"
import ImageElement from "../../elements/image/ImageElement"
import TextElement from "../../elements/text/TextElement"

const HeroFragment = () => {
    return (
        <>
            <div className="bg-secondary-700 relative overflow-hidden pt-60">
                <div className="absolute -top-120 -right-120 w-[900px] h-[900px] border-[100px] border-primary-0/5 rounded-full z-0"></div>
                <div className="absolute -bottom-110 -left-90 w-[900px] h-[900px] border-[100px] border-primary-0/5 rounded-full z-0"></div>
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto max-h-screen">
                    <div className="flex flex-col w-full h-screen mx-auto items-center justify-center gap-10">
                        <div className="flex flex-col gap-6">
                            <TextElement type="6xl_700" textColor="text-primary-0" textTransform="" classname="max-w-[850px] text-center tracking-tight leading-[150%]">
                                All your business <br /> expenses in one place.
                            </TextElement>
                            <TextElement type="2xl_400" textColor="text-secondary-300" textTransform="" classname=" text-center tracking-tight leading-[150%]">
                                Your one-stop finance empower platform. <br />Manage all your business expenses with our supafast app.
                            </TextElement>
                        </div>
                        <div className="flex gap-6">
                            <ButtonElement typeButton="label" label="Get a Free Demo" textType="md_600" />
                            <ButtonElement typeButton="label" bgColor="bg-secondary-500" label="See Pricing" textColor="text-secondary-200" textType="md_600" />
                        </div>

                        <ImageElement path="hero" image="hero" name="dashboard" classname="pt-11.5" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default HeroFragment