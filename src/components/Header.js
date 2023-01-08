
import React from 'react'

const Header = (props) => {

    console.log("header component rendered");
  return (
    <div>

     <img src={props.image} alt="img" style={{width:"500px",height:"400px" }}/>

    </div>
  )
}

export default React.memo(Header);