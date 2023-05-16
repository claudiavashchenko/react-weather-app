import { useEffect, useState } from "react";
import TodayDisplay from "./components/TodayDisplay";
import Card from "./components/Card";
import UnitContainer from "./components/UnitContainer";
const App = () => {

  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

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
 

  const fetchData = () => {
    const latitude = location?.latitude
    const longitude = location?.longitude
    fetch(`http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=astro&output=xml`)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch (err => console.error(err))
  }

  console.log(location)

  useEffect(() => {
     getLocation()
     fetchData()
  }, [])


  return (
    <div className="weather-app">
        <TodayDisplay />
      <div className="cards-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
        <UnitContainer />
        {error}
    </div>
  );
}

export default App;
