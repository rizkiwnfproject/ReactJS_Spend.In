import { useState } from "react";

const TabElement = ({ tabs, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const handleTabClick = (tab) => {
        setActiveTab(tab.value);
        onTabChange(tab.value);
    };

    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);


    return (
        <div className="relative flex bg-secondary-100 rounded-full w-full mx-auto lg:mx-0 md:w-max gap-2">
            <div
                className="absolute top-0 left-0 h-[calc(100%)] w-[calc(50%)] bg-primary-500 rounded-full transition-transform duration-300 ease-in-out z-0"
                style={{
                    transform: `translateX(${activeIndex * 100}%)`,
                }}
            />
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => handleTabClick(tab)}
                    className={`relative z-10 w-50 px-0 lg:px-6 py-4 lg:py-3.5 rounded-full transition-all duration-300 text-xs lg:text-base font-semibold ${activeTab === tab.value
                        ? "text-primary-0 "
                        : "text-secondary-300 "
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};


export default TabElement