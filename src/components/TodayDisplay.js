import "@fortawesome/fontawesome-free/js/all.js";
import { getIcon } from "../helpers";
const TodayDisplay = ({today, location}) => {
    return (
        <div className="today-container">
            <div className="info-container">
                <h1>Today's Forecast</h1>
                <h3>For the location of lng {location?.longitude.toFixed(2)} and lat {location?.latitude.toFixed(2)}</h3>
            </div>
            <div className="info-container">
                {getIcon(today?.weather)}
            </div>
        </div>
    )
}

export default TodayDisplay