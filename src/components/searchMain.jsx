import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [search, setSearch] = useState("İstanbul");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const [tempInfo, setTempInfo] = useState({});

  const handleClick = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=07c6ea0179dc3c015ed3fb9f74f5bf57&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { temp, pressure, humidity } = data.main;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      
      const myNewWeatherInfo = {
        temp,
        pressure,
        humidity,
        speed,
        country,
        sunset,
        weatherType,
        name,
      };

      setTempInfo(myNewWeatherInfo)
      console.log(tempInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleClick();
  }, [search]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="type city name.."
            id="searchTerm"
            value={search}
            onChange={handleChange}
            onClick={()=> setSearch("")}
          />
        </div>
        <button className="searchButton" onClick={handleClick}>
          search
        </button>
      </div>
      <WeatherDetails  {...tempInfo} />
    </>
  );
}

export default SearchMain;
