import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (

    <div style={styles.counterContainer}>

      <p style={styles.countDisplay}>Count: {count}</p>

      <div style={styles.buttonContainer}>

        <button onClick={increment} style={styles.button}>
          +1
        </button>

        <button onClick={decrement} style={styles.button}>
          -1
        </button>

        <button onClick={reset} style={styles.resetButton}>
          Reset
        </button>

      </div>

    </div>

  );
}

const styles = {

  counterContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "inline-block",
    textAlign: "center",
  },

  countDisplay: {
    fontSize: "24px",
    margin: "10px 0",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  resetButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

};

export default Counter;