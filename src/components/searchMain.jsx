import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [search, setSearch] = useState("İstanbul");
  console.log(search);
  function handleChange(e) {
    setSearch(e.target.value);
  }

  const [tempInfo, setTempInfo] = useState({});

  const handleClick = async () => { 
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=248a86195f6dbc96258b0b33a174b8e4&units=metric`;
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClick()
  }

  return (
    <>
      <div className="wrap">
        <form >
        <div className="search">
          <input
            type="input"
            placeholder="type city name.."
            id="searchTerm"
            value={search}
            onChange={handleChange}
            onClick={()=> setSearch("")}
          />
        </div>
        <button className="searchButton" onClick={(e)=>handleSubmit(e)}>
          search
        </button>
        </form>
      </div>
      <WeatherDetails  {...tempInfo} />
    </>
  );
}

export default SearchMain;
