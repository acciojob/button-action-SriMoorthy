import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {


  const[isVisible,setisVisible] = useState(false)

  function HandleClick(){
    setisVisible(true)
  }

  return (
    <div className="App" id="main">
      <button id='click' onClick={HandleClick}>Click me</button>
      <p id="para" className={isVisible ? 'hide' : 'show'}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
    </div>
  );
}

export default App
