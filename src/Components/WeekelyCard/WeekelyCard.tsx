import style from './WeekelyCard.module.css'

interface DayData {
    day: string;
    icon: string;
    high: number;
    low: number;
}

interface Props {
    days: DayData[];
}

const WeeklyCard = ({ days }: Props) => {
    return (
        <div className={style['weekly-card']}>
            {days.map((day, index) => (
                <div className="week-row" key={index}>
                    <p>{day.day}</p>
                    <img src={day.icon} alt="" />
                    <div className="temps">
                        <span>{day.high}°</span>
                        <span>{day.low}°</span>
                    </div>

                </div>

            ))}

        </div>

    )

}

export default WeeklyCard;