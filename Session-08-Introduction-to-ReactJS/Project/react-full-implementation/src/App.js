import React from "react";
import WeatherCard from "./components/WeatherCard";
import Counter from "./components/Counter"
import "./App.css";
import Greeting from "./components/Greetings"

const App = () => {

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

      {/* Greeting */}

      <Greeting/>

      <Greeting name="Stanley"/>

      {/* Weather Widget */}

      <h1>Weather Widget</h1>

      <div className="centered">

          {weatherData.map((data, index) => (
              <WeatherCard
                key={index}
                city={data.city}
                temperature={data.temperature}
                description={data.description}
              />
          ))}

          {/* <WeatherCard
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
          /> */}

          <WeatherCard
            city="Indonesia"
            temperature="36"
            description="+62 Citizen"
          />

      </div>

      {/* Simple Counter */}

      <h1>Simple Counter</h1>
      <Counter />

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