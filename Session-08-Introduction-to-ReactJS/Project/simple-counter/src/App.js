import React from "react";
import Counter from "./components/Counter";

function App() {

  return (

    <div style={styles.appContainer}>

      <h1>Simple Counter</h1>
      <Counter />

    </div>

  );

}

const styles = {

  appContainer: {

    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    
  },

};

export default App;