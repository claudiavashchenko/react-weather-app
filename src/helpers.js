const getIcon = (weatherType) => {

    let weatherStyle

    switch (weatherType) {
        case "lightrainday":
            weatherStyle = <i className="fas fa-cloud-rain"></i>
            break
        case "clear":
            weatherStyle = <i className="fas fa-sun"></i> 
            break
        case "mcloudy":
            weatherStyle = <i className="fas fa-cloud"></i>
            break
        case "cloud":
            weatherStyle = <i className="fas fa-cloud-rain"></i>
            break
        case "snow":
            weatherStyle = <i className="fas fa-snowflake"></i>
            break
        case "ts":
            weatherStyle = <i className="fas fa-bolt"></i>
            break
            default:
                weatherStyle = <i className="fas fa-sun"></i>
    }
    return weatherStyle
}

export { getIcon }