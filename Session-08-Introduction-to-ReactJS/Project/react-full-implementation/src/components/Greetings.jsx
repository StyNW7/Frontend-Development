import React from 'react';

// function Greeting(props) {
//   return <h2>Hello, {props.name}!</h2>;
// }

// Greeting.defaultProps = {
//   name: "Guest",
// };

function Greeting({name = "Guest"}) {
  return <h2>Hello, {name}!</h2>;
}

export default Greeting;