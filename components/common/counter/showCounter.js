import dynamic from "next/dynamic";

const DateTimeDisplay = dynamic(() => import("./dateTimeDisplay"));
const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="flex space-x-2 text-[43px] text-white font-bold leading-[53px]">

            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={days <= 3 && hours <= 24} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Minutes'} isDanger={days <= 3 && hours <= 24 && minutes <= 60} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={days <= 3 && hours <= 24 && minutes <= 60 && seconds <= 60} />
        </div>
    );
};
export default ShowCounter