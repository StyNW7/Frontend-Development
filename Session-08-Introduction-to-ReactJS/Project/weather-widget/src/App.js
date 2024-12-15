import React from "react";
import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import "./App.css";

const App = () => {

  const cities = ["New York", "Tokyo", "London", "Sydney"];

  const weatherData = [
    {
      city: "New York",
      temperature: 1,
      description: "Partly Cloudy",
    },
    {
      city: "Tokyo",
      temperature: 3,
      description: "Fully Cloudy",
    },
    {
      city: "London",
      temperature: 18,
      description: "Partly Cloudy",
    },
    {
      city: "Syndey",
      temperature: 29,
      description: "Cloudy",
    }
  ]

  return (

    <div style={styles.container}>

      <h1>Weather Widget</h1>

      <CitySelector cities={cities} />

      <div className="centered">
          <WeatherCard
            city={weatherData[0].city}
            temperature={weatherData[0].temperature}
            description={weatherData[0].description}
          />

          <WeatherCard
            city={weatherData[1].city}
            temperature={weatherData[1].temperature}
            description={weatherData[1].description}
          />

          <WeatherCard
            city={weatherData[2].city}
            temperature={weatherData[2].temperature}
            description={weatherData[2].description}
          />

          <WeatherCard
            city={weatherData[3].city}
            temperature={weatherData[3].temperature}
            description={weatherData[3].description}
          />
      </div>

    </div>

  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "32px",
    textAlign: "center",
  },
};

export default App;
