import React from "react";

const WeatherCard = ({ city, temperature, description }) => {

  return (

    <div style={styles.card}>
      <h2>{city}</h2>
      <h3>{temperature}°C</h3>
      <p>{description}</p>
    </div>

  );

};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "200px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px"
  },
};

export default WeatherCard;
