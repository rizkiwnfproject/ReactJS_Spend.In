import { useState } from "react";
import TextElement from "../text/TextElement";

const ToggleElement = ({
    label = { on: "", off: "" },
}) => {
    const [enabled, setEnabled] = useState(false);
    const currentLabel = enabled ? label.on : label.off;

    return (
        <>
            <div className="flex flex-col items-center gap-6">
                <button
                    onClick={() => setEnabled(!enabled)}
                    className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${enabled ? "bg-primary-500" : "bg-secondary-300"
                        }`}
                >
                    <div
                        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-0"
                            }`}
                    />
                </button>
                {
                    currentLabel && (
                        <div className="w-26 ">
                            <TextElement type="sm_500" textColor="text-secondary-700" classname="w-full flex justify-center py-2 bg-primary-100 rounded-full">{currentLabel}</TextElement>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default ToggleElement