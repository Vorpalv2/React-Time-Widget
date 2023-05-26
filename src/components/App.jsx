import React, { useState } from "react";
let time = new Date().toLocaleTimeString();
//Show the latest time in the <h1> when the Get Time button
//is pressed.

function App() {
  const [Time, SetTime] = useState(time);
  function UpdateTime() {
    let newtime = new Date().toLocaleTimeString();
    SetTime(newtime);
  }
  setInterval(UpdateTime, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
