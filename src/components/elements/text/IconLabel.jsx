import ButtonElement from "../button/ButtonElement"
import TextElement from "./TextElement"

const IconLabel = ({
    Icon,
    label,
    classname,
    classnameButton,
    classnameText,
    textType,
    textColor,
    bgIcon,
    iconSize,
    padding,
    textTransform,
    respText
}) => {
    return (
        <div className={`flex gap-3 ${classname}`}>
            <ButtonElement
                typeButton='icon'
                bgColor={bgIcon}
                iconSize={iconSize}
                padding={padding}
                icon={Icon}
                classname={classnameButton} />
            <TextElement
                type={textType}
                respText={respText}
                textColor={textColor}
                textTransform={textTransform}
                classname={classnameText}>
                {label}
            </TextElement>
        </div>
    )
}

export default IconLabel