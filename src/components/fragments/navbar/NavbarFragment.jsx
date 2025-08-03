import { useEffect, useRef, useState } from "react"
import ButtonElement from "../../elements/button/ButtonElement"
import ImageElement from "../../elements/image/ImageElement"
import TextElement from "../../elements/text/TextElement"
import { HiMenuAlt4 } from "react-icons/hi";
import LogoElement from "../../elements/logo/LogoElement";
import { Link } from "react-scroll";
import { navbarMenu } from "../../../constants/Constant";

const NavbarFragment = () => {
    const [open, setOpen] = useState(false);
    const navRef = useRef();
    const buttonRef = useRef();
    const [activeId, setActiveId] = useState()

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedOutsideNav = navRef.current && !navRef.current.contains(event.target);
            const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(event.target);

            if (open && clickedOutsideNav && clickedOutsideButton) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "0px", // Fokus area di tengah viewport
                threshold: 0.1,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <div className="py-0 lg:py-5">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                            <LogoElement image='logo-1' textColor='text-primary-100' />
                        </Link>
                        <ButtonElement ref={buttonRef} typeButton="icon" icon={HiMenuAlt4} bgColor="" classname="block lg:hidden" onClick={(e) => {
                            e.stopPropagation();
                            setOpen((prev) => !prev);
                        }} />
                        <ul className="hidden lg:flex items-center justify-between gap-6">
                            {navbarMenu.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.id} smooth={true} duration={500} className="cursor-pointer" offset={item.offsetDesktop}>
                                        <TextElement textColor={activeId === item.id ? "text-primary-500" : "text-primary-0 hover:text-primary-500"} type="lg_500" classname="ease-in-out transition-all duration-500">{item.label}
                                        </TextElement>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:flex items-center gap-8">
                            <TextElement textColor="text-secondary-200" type="lg_500">Login</TextElement>
                            <ButtonElement typeButton="label" textColor="text-primary-0" label="Get Demo" />
                        </div>
                    </div>
                    <div ref={navRef} className={`block lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out lg:overflow-visible lg:max-h-full ${open ? "max-h-[500px]" : "max-h-0"} lg:flex`}>
                        <ul className='flex flex-col lg:flex lg:flex-row py-5 lg:py-0 px-5 md:px-0 gap-4 md:gap-5 text-sm text-gray-400 font-medium w-full'>
                            {navbarMenu.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.id} smooth={true} duration={500} className="cursor-pointer" onClick={() => setOpen(false)} offset={item.offsetMobile}>
                                        <TextElement textColor={activeId === item.id ? "text-primary-500" : "text-primary-0 hover:text-primary-500"} type="sm_500" respText="text-sm">{item.label}</TextElement>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarFragment