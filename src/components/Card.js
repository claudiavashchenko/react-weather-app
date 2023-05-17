import { getIcon } from "../helpers"
const Card = ({ day }) => {
    return (
        <div className="card-container">
            <div>{getIcon(day.weather)}</div>
            <p>{day.weather}</p>
            <p>{day.temp2m.max} max</p>
            <p>{day.temp2m.min} min</p>
            <p>XXX</p>
        </div>
    )
}

export default Card