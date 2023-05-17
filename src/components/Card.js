import { getIcon } from "../helpers"
const Card = ({ day, index }) => {
    const date = day.date.toString()
    const year = date.slice(0, 4)
    const month = date.slice(4, 6)
    const dayOfTheMonth = date.slice(6, 8)
    const formattedDate = new Date(year, month - 1, dayOfTheMonth).toDateString().slice(0, 3)
    return (
        <div className="card-container">
            <h3>{index === 0 ? "Today" : formattedDate}</h3>
            <div className="icon-container">{getIcon(day.weather)}</div>
            <p>{day.weather}</p>
            <p>{day.temp2m.max} max</p>
            <p>{day.temp2m.min} min</p>
            <p>XXX</p>
        </div>
    )
}

export default Card