import { textarea } from "@tailwindcss/custom-forms/src/defaultOptions";

const DateTimeDisplay = ({ value, type, isDanger }) => {
    const addZero = (text) => {
        if (text <= 9)
            return "0" + text
        return text
    }
    return (
        <div className={`${isDanger ? 'text-red-600' : 'text-white'} flex flex-col items-center `}>
            <p>{addZero(value)}</p>
            <span className="text-xs font-medium">{type}</span>
        </div>
    );
};

export default DateTimeDisplay;