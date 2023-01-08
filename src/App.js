import React, { useState } from 'react';
import Header from './components/Header';
import img from "./assets/img.svg"


function App() {

  const [count,setCount]=useState(0);
  console.log("App component rendered")
  const increase=()=>
  {
    
     setCount(count=>count+1);

  }

  return (
    <div>
     
    <Header img={img}/>
  
    <br/>
    count : {count}
    <button type="submit" onClick={increase}> Arttır </button>

   

    </div>
  );
}

export default App;
