import React, {useState, useEffect} from 'react'

function WeatherDetails({temp,
    pressure,
    humidity,
    speed,
    country,
    sunset,
    weatherType,
    name}) {


    const [weatherIcon, setWeatherIcon] = useState("")

    useEffect(() => {
        if (weatherType) {
            switch (weatherType) {
              case "Clouds":
               setWeatherIcon("wi-cloudy");
                break;
              case "Haze":
               setWeatherIcon("wi-fog");
                break;
              case "Clear":
               setWeatherIcon("wi-day-sunny");
                break;
              case "Mist":
               setWeatherIcon("wi-dust");
                break;
              case "Rain":
               setWeatherIcon("wi-rain");
                break;
              case "Snow":
               setWeatherIcon("wi-snow");
                break;
      
              default:
               setWeatherIcon("wi-day-sunny");
                break;
            }
          }

    },[weatherType])

    let sec = sunset;
    let date = new Date(sec * 1000)
    let time = `${date.getHours()}:${date.getMinutes()}`

  return (
    <div>
        <article className="widget">
            <div className="weatherIcon">
                <i className={`${weatherIcon}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{Math.round(Number(temp))}&deg;C</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">{weatherType}</div>
                    <div className="place">
                        {name}, {country}
                    </div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className="extra-info-leftside">
                            {time} <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside">
                            {humidity} <br />
                            Humidity
                        </p>
                    </div>
                </div>

                <div className="temp-info-minmax">
                    <div className="two-sided-section"> 
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className="extra-info-leftside">
                            {pressure} <br />
                            Pressure
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside">
                            {speed} <br />
                            Speed
                        </p>
                    </div>

                </div>
            </div>
        </article>
    </div>
  )
}

export default WeatherDetails