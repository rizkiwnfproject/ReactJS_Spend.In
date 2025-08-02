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
            <div className="bg-primary-0 py-30">
                <div className="w-full max-w-11/12 lg:max-w-10/12 mx-auto max-h-screen">
                    <div className="grid grid-cols-6 w-full pb-16">
                        <div className="col-span-2 flex flex-col gap-8">
                            <LogoElement image='logo-2' textColor='text-secondary-500' />
                            <TextElement type="lg_400" classname="w-[200px]" textColor="text-secondary-400">Data visualization, and expense management for your business.</TextElement>
                        </div>
                        {footerMenu.map((item, index) => (
                            <div key={index} className="flex flex-col gap-8">
                                <TextElement type="xl_600" textColor="text-secondary-500">{item.title}</TextElement>
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
                        ))}
                    </div>
                    <div className="border-t border-t-primary-200 pt-8 flex justify-between w-full">
                        <div className="flex gap-8">
                            <TextElement type="lg_600" textColor="text-secondary-500">Privacy Policy</TextElement>
                            <TextElement type="lg_500" textColor="text-secondary-500">|</TextElement>
                            <TextElement type="lg_600" textColor="text-secondary-500">Terms & Conditions</TextElement>
                            <TextElement type="lg_500" textColor="text-secondary-500">|</TextElement>
                            <TextElement type="lg_600" textColor="text-secondary-500">Cookie Policy</TextElement>
                        </div>
                        <TextElement type="md_500" textColor="text-secondary-400">© Picko Lab 2022</TextElement>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterFragment