import { useState } from "react"
import ButtonElement from "../../elements/button/ButtonElement"
import ImageElement from "../../elements/image/ImageElement"
import TextElement from "../../elements/text/TextElement"
import { HiMenuAlt4 } from "react-icons/hi";
import LogoElement from "../../elements/logo/LogoElement";

const NavbarFragment = () => {
    const [open, setOpen] = useState(false);
    console.log(open)
    return (
        <>
            <div className="py-0 lg:py-5">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto">
                    <div className="flex justify-between items-center">
                        <LogoElement image='logo-1' textColor='text-primary-100'/>
                        <ButtonElement typeButton="icon" icon={HiMenuAlt4} bgColor="" classname="block lg:hidden" onClick={() => setOpen(!open)} />
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
                    <div className={`block lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out md:overflow-visible md:max-h-full ${open ? "max-h-[500px]" : "max-h-0"} md:flex`}>
                        <ul className='flex flex-col md:flex md:flex-row py-5 md:py-0 px-5 md:px-0 gap-4 md:gap-5 text-sm text-gray-400 font-medium w-full'>
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