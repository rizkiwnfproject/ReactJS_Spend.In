import { useState } from "react"
import ButtonElement from "../../elements/button/ButtonElement"
import ImageElement from "../../elements/image/ImageElement"
import TextElement from "../../elements/text/TextElement"
import { HiMenuAlt4 } from "react-icons/hi";

const NavbarFragment = () => {
    const [open, setOpen] = useState(false);
    console.log(open)
    return (
        <>
            <div className="py-0 lg:py-5">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1.5 lg:gap-3.5 py-5 lg:py-0">
                            <ImageElement path="logo" image="logo" name="logo" classname="w-6 lg:w-auto" />
                            <TextElement textColor="text-primary-100" type="2xl_700">Spend.In</TextElement>
                        </div>
                        <ButtonElement typeButton="icon" icon={HiMenuAlt4} bgColor=""  classname="block lg:hidden" onClick={() => setOpen(!open)} />
                        <ul className="hidden lg:flex items-center justify-between gap-6">
                            <li>
                                <TextElement textColor="text-primary-0" type="lg_500">Product</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="lg_500">Benefit</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="lg_500">How it Works</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="lg_500">Pricing</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="lg_500">Company</TextElement>
                            </li>
                        </ul>
                        <div className="hidden lg:flex items-center gap-8">
                            <TextElement textColor="text-secondary-200" type="lg_500">Login</TextElement>
                            <ButtonElement typeButton="label" textColor="text-primary-0" label="Get Demo" />
                        </div>
                    </div>
                    <div className="">
                        <ul className={`${open ? "flex flex-col" : "hidden"} lg:hidden items-center gap-2 pb-5`}>
                            <li>
                                <TextElement textColor="text-primary-0" type="sm_500" respText="text-sm">Product</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="sm_500" respText="text-sm">Benefit</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="sm_500" respText="text-sm">How it Works</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="sm_500" respText="text-sm">Pricing</TextElement>
                            </li>
                            <li>
                                <TextElement textColor="text-primary-0" type="sm_500" respText="text-sm">Company</TextElement>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarFragment