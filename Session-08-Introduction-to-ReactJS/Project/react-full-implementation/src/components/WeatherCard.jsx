import React from "react";
import './WeatherCard.css'

function WeatherCard ({ city, temperature, description }) {

    return (
        <div className="card">
            <h2>{city}</h2>
            <h3>{temperature}</h3>
            <p>{description}</p>
        </div>
    )

}

export default WeatherCard