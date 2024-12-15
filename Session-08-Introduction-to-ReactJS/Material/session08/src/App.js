import React from 'react';
import Greeting from './components/Greetings.js';

function App() {

  return (

    <div>
      <h1>User Greeting App</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
    
  );

}

export default App;
