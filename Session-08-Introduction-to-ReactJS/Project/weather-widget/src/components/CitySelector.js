import React from "react";

const CitySelector = ({ cities }) => {

  return (

    <div style={styles.selector}>

      <label htmlFor="city">Select City:</label>

      <select id="city" style={styles.select}>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

    </div>

  );

};

const styles = {

  selector: {
    marginBottom: "16px",
    textAlign: "center",
  },

  select: {
    marginLeft: "8px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  
};

export default CitySelector;
