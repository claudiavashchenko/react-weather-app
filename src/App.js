import { useEffect, useState } from "react";
import TodayDisplay from "./components/TodayDisplay";
import Card from "./components/Card";
import UnitContainer from "./components/UnitContainer";
import "@fortawesome/fontawesome-free/js/all.js";
const App = () => {

  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [unit, setUnit] = useState("celcius")

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Location API is not supported by your browser!")
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation(position.coords)
      },
       () => {
          setError("Sorry, we cannot find your location!")
       }
      )
    }

}
 

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { latitude, longitude } = location || {}
        const response = await fetch(
          `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
        )
        const json = await response.json()
        setData(json)
      } catch (err) {
        console.error(err)
      }
    }
    if (location) {
      fetchData()
    }
  }, [location])

  const handleClick = (e) => {
    setUnit(e.target.id)
  }


  return (
    <div className="weather-app">
        <TodayDisplay today={data?.dataseries[0]} location={location} />
      <div className="cards-container">
      {data?.dataseries.map((day, index) => (
        <Card key={index} day={day} index={index} unit={unit} />
      ))}
      </div>
        <UnitContainer handleClick={handleClick} unit={unit} />
        {error}
    </div>
  );
}

export default App;
