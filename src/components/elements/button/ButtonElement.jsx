import ImageElement from "../image/ImageElement"
import TextElement from "../text/TextElement"

const ButtonElement = ({
    classname = "",
    type = "button",
    typeButton = "",
    rounded = "rounded-full",
    bgColor = "bg-primary-500",
    textType = "",
    textColor = "text-primary-0",
    iconColor = "text-primary-0",
    onClick = () => { },
    ref,
    padding = "py-3.5 px-6",
    shadow = "",
    iconSize = "18px",
    icon: Icon,
    label = "",
    respText = "",
    elementHover = "",
    path = "",
    image = "",
    alt = "",
    classnamePict = "",
    format = "svg"
}) => {
    if (typeButton === "label") {
        return (
            <button className={`${classname} ${bgColor} ${rounded} ${padding} ${elementHover}`} type={type} onClick={onClick}>
                <TextElement type={textType} respText={respText} textColor={textColor}>{label}</TextElement>
            </button>
        )
    } else if (typeButton === "iconRight") {
        return (
            <button className={`${classname} ${bgColor} ${textColor} ${rounded} ${padding} ${elementHover} flex gap-2`} onClick={onClick}>
                <TextElement type={textType} respText={respText} textColor={textColor}>{label}</TextElement>
                <Icon size={iconSize} className={`shrink-0 ${iconColor}`} />
            </button>
        )
    } else if (typeButton === "iconLeft") {
        return (
            <button className={`${classname} ${bgColor} ${textColor} ${rounded} ${padding} ${elementHover} flex gap-2`} onClick={onClick}>
                <Icon size={iconSize} className={`shrink-0 ${iconColor}`} />
                <TextElement type={textType} respText={respText} textColor={textColor}>{label}</TextElement>
            </button>
        )
    } else if (typeButton === "icon") {
        return (
            <button ref={ref} className={`${classname} ${bgColor} ${textColor} ${rounded} ${padding} ${elementHover} flex gap-2`} onClick={onClick}>
                {Icon && <Icon size={iconSize} className={`shrink-0 ${iconColor}`} />}
            </button>
        )
    } else if (typeButton === "svg") {
        return (
            <button className={`${classname} ${bgColor} ${textColor} ${rounded} ${padding} ${elementHover}`} onClick={onClick}>
                <ImageElement path={path} image={image} name={alt} classname={classnamePict} format={format} />
            </button>
        )
    } else {
        return (
            <button ref={ref} className={`${classname} ${bgColor} ${rounded} ${padding} ${shadow} ${elementHover}`} onClick={onClick}>
                <TextElement type={textType} respText={respText} textColor={textColor}>{label}</TextElement>
            </button>
        )
    }
}

export default ButtonElement