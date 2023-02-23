import React, { useState, useEffect } from 'react'

import { getWeather } from '../apis/weather'
import { BsThermometerLow, BsThermometerHigh } from 'react-icons/bs'

const sampleWeatherData = {
  weather: [{ description: '', icon: '' }],
  main: { temp_min: 0, temp_max: 0 },
}
export default function Weather() {
  const [weatherData, setWeatherData] = useState(sampleWeatherData)

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeatherData(data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <div className="md:flex float-right pt-5 pr-5 items-center absolute top-4 right-4">
        <div>
          <BsThermometerLow className="h-8 w-8" viewBox="0 0 10 16" />
        </div>
        <div className="text-xl font-medium text-black">
          {Math.floor(weatherData.main.temp_min)}
        </div>

        <div>
          <BsThermometerHigh className="h-8 w-8" viewBox="0 0 10 16" />
        </div>
        <div className="text-xl font-medium text-black">
          {Math.floor(weatherData.main.temp_max)}
        </div>

        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="icon"
          />
        </div>
      </div>
    </>
  )
}
