import React from 'react'
import ImageElement from '../image/ImageElement'
import TextElement from '../text/TextElement'

const LogoElement = ({
    image,
    textColor,
}) => {
    return (
        <>
            <div className="flex items-center gap-1.5 lg:gap-3.5 py-5 lg:py-0">
                <ImageElement path="logo" image={image} format='svg' name="logo" classname="w-6 lg:w-auto" />
                <TextElement textColor={textColor} type="2xl_700">Spend.In</TextElement>
            </div>
        </>
    )
}

export default LogoElement