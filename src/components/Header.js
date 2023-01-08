
import React from 'react'

const Header = (props) => {

    console.log("header component rendered");
  return (
    <div>

     <img src={props.img} style={{width:"500px" }}/>

    </div>
  )
}

export default React.memo(Header);