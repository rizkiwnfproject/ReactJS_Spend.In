const WrapSection = ({
    children,
    classname = "",
    maxWidth = "max-w-10/12",
    padding = "py-15",
    bgColor = "bg-white"
}) => {
    return (
        <div className={`${bgColor} ${padding}`}>
            <div classname={`w-full mx-auto ${classname} ${maxWidth}`}>
                {children}
            </div>
        </div>
    )
}

export default WrapSection