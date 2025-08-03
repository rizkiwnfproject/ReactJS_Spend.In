import LogoElement from "../../elements/logo/LogoElement"
import TextElement from "../../elements/text/TextElement"

const FooterFragment = () => {
    const footerMenu = [{
        title: "Product",
        links: [
            "Digital Invoice",
            "Insights",
            "Reimbursements",
            "Virtual Assistant",
            "Artificial Intelligence",
        ],
    },
    {
        title: "Company",
        links: [
            "About Us",
            "Newsletters",
            "Our Partners",
            "Career",
            "Contact Us",
        ],
    },
    {
        title: "Resources",
        links: [
            "Blog",
            "Pricing",
            "FAQ",
            "Events",
            "Ebook & Guide",
        ],
    },
    {
        title: "Follow Us",
        links: [
            "LinkedIn",
            "Twitter",
            "Instagram",
            "Facebook",
            "YouTube",
        ],
    },
    ];
    return (
        <>
            <div className="bg-primary-0 py-3 md:py-15" data-aos="fade-down">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto lg:max-h-screen px-1">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-6 lg:gap-0 pb-8 lg:pb-16">
                        <div className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col gap-3 lg:gap-8">
                            <LogoElement image='logo-2' textColor='text-secondary-500'  />
                            <TextElement type="lg_400" respText="text-lg" classname="w-[200px]" textColor="text-secondary-400">Data visualization, and expense management for your business.</TextElement>
                        </div>
                        {footerMenu.map((item, index) => (
                            <div className="md:mt-6 lg:mt-0">
                                <div key={index} className="flex flex-col gap-8">
                                    <TextElement type="xl_600" respText="text-xl" textColor="text-secondary-500">{item.title}</TextElement>
                                    <ul className="flex flex-col gap-6">
                                        {item.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href="#" className="">
                                                    <TextElement type="md_400" textColor="text-secondary-400 hover:text-secondary-600">{link}</TextElement>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-t-primary-200 pt-8 pb-4 lg:pb-0 flex flex-col lg:flex-row justify-normal md:justify-center lg:justify-between md:items-center lg:items-baseline w-full gap-12">
                        <div className="flex flex-col md:flex-row gap-8 ">
                            <TextElement type="lg_600" respText="text-lg" textColor="text-secondary-500">Privacy Policy</TextElement>
                            <TextElement type="lg_500" textColor="text-secondary-500" classname="hidden lg:block">|</TextElement>
                            <TextElement type="lg_600" respText="text-lg" textColor="text-secondary-500">Terms & Conditions</TextElement>
                            <TextElement type="lg_500" textColor="text-secondary-500" classname="hidden lg:block">|</TextElement>
                            <TextElement type="lg_600" respText="text-lg" textColor="text-secondary-500">Cookie Policy</TextElement>
                        </div>
                        <TextElement type="md_500" textColor="text-secondary-400">© Picko Lab 2022</TextElement>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterFragment