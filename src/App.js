import React, { useEffect, useState,useMemo, useCallback } from 'react';
import Header from './components/Header';
import image from "./assets/img.svg"
import img2 from "./assets/img2.jpg"
import List from "./components/List"
import ClearButton from './components/ClearButton';

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

  const handleClear=useCallback(()=>{
 
    setSearch("");
    setText("");


  },[])
  useEffect(()=>{

   fetch("https://jsonplaceholder.typicode.com/users")
   .then((res)=>res.json())
   .then((data)=>setUserList(data))


  },[])


 const filteredUsers=useMemo(()=>userList.filter(user=>{

  return user.name.toLowerCase().includes(search.toLowerCase());
 }),[search,userList])

  return (
    <div>
     
    <Header image={imgPath}/>
  
    <br/>
     count : {count}
    <button type="submit" onClick={increase} style={{background:"green",border:"none",padding:"20px",borderRadius:"10px",marginLeft:"20px"}}> Arttır </button>
    <button onClick={changeImage} style={{background:"green",border:"none",padding:"20px 5px",borderRadius:"10px",marginLeft:"20px"}}>Change Image</button>
   <hr/>
   
    <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
  
      <input type="txt" name="txt" value={text} onChange={handleChange} style={{padding:"10px 150px",borderRadius:"10px"}} placeholder="Search Item:"/>
      <button type="submit" onClick={handleSearch} style={{background:"green",border:"none",padding:"20px",borderRadius:"10px",marginLeft:"20px"}}>Search</button>
      <ClearButton handleClear={handleClear}/>
    
    </div>

   
   <List userList={filteredUsers}/>
   
    </div>
  );
}

export default App;
