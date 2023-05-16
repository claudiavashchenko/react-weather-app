const TodayDisplay = ({today, location}) => {
    return (
        <div className="today-container">
            <div className="info-container">
                <h1>Today's Forecast</h1>
                <h3>For the location of lng XXX and lat XXX</h3>
            </div>
            <div className="info-container">
                ICON
            </div>
        </div>
    )
}

export default TodayDisplay