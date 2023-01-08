import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import image from "./assets/img.svg"
import img2 from "./assets/img2.jpg"
import List from "./components/List"

function App() {

  const [count,setCount]=useState(0);
  const[imgPath,setImgPath]=useState(image);
  const[userList,setUserList]=useState([]);
  const[text,setText]=useState("");
  const[search,setSearch]=useState("");



  console.log("App component rendered")
  const increase=()=>
  {
    
     setCount(count=>count+1);

  }

  const changeImage=()=>{
   
    setImgPath(img2)

  }

  const handleChange=(e)=>{

   setText(e.target.value)

  }
  const handleSearch=()=>{
 
     setSearch(text);


  }
  useEffect(()=>{

   fetch("https://jsonplaceholder.typicode.com/users")
   .then((res)=>res.json())
   .then((data)=>setUserList(data))


  },[])


 const filteredUsers=userList.filter(user=>{

  return user.name.toLowerCase().includes(search.toLowerCase());
 })

  return (
    <div>
     
    <Header image={imgPath}/>
  
    <br/>
    count : {count}
    <button type="submit" onClick={increase}> Arttır </button>
    <button onClick={changeImage}>Change Image</button>
   <hr/>
   

   <input type="txt" name="txt" value={text} onChange={handleChange}/>
   <button type="submit" onClick={handleSearch} style={{background:"green",border:"none",padding:"20px",borderRadius:"10px"}}>Search</button>
   <List userList={filteredUsers}/>
   
    </div>
  );
}

export default App;
