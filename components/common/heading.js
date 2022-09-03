
const Heading = ({ title, textSize }) => {
    return (
        <p className={`${textSize ? `text-[${textSize}]` : "text-[28px]" } }  font-bold`}>
            {title}
        </p>
    )
}

export default Heading