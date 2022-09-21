import { useState, useEffect } from "react";
import * as IAPI from './API/IslamicApi';
import * as WAPI from './API/WeatherApi';

function App() {

  let date = "16-09-2022";
  let location = "mula";
  let method = "5";

  let obj = {
    fecha: date,
    localizacion: location,
    metodo: method
  }


  const [data, setData] = useState(0)

  useEffect(() => {

    IAPI.IslamPrayerActualTime("mula").then((data) => setData(data))
  }, []);

  const [extended, setExtended] = useState(0)

  useEffect(() => {

    IAPI.IslamPrayerTimeExtended(obj).then((data) => setExtended(data))
  }, []);

  const [W, setw] = useState(0)

  useEffect(() => {

    WAPI.getWeather().then((data) => setw(data))
  }, []);

  return (
    <>

    </>
  )
}

export default App
