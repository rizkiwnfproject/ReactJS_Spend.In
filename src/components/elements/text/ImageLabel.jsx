import ImageElement from '../image/ImageElement'
import TextElement from './TextElement'

const ImageLabel = ({
    image,
    path,
    alt,
    format,
    label,
    classname,
    classnameImage,
    classnameText,
    textType,
    textColor,
    textTransform,
    respText
}) => {
    return (
        <div className={`flex gap-3 ${classname}`}>
            <ImageElement path={path} image={image} format={format} name={alt} classname={classnameImage}/>
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

export default ImageLabel