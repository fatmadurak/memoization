import React, { useState } from 'react';
import Header from './components/Header';
import image from "./assets/img.svg"
import img2 from "./assets/img2.jpg"


function App() {

  const [count,setCount]=useState(0);
  const[imgPath,setImgPath]=useState(image);
  console.log("App component rendered")
  const increase=()=>
  {
    
     setCount(count=>count+1);

  }

  const changeImage=()=>{
   
    setImgPath(img2)

  }

  return (
    <div>
     
    <Header image={imgPath}/>
  
    <br/>
    count : {count}
    <button type="submit" onClick={increase}> Arttır </button>
    <button onClick={changeImage}>Change Image</button>
   

    </div>
  );
}

export default App;
