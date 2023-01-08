import React from 'react'


const ClearButton = ({handleClear}) => {
  return (
    <div>
 
   <button  onClick={handleClear} style={{background:"green",border:"none",padding:"20px",borderRadius:"10px",marginLeft:"20PX"}}>Clear</button>

    </div>
  )
}

export default React.memo(ClearButton);