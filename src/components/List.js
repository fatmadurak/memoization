import React from 'react'

const List = ({userList}) => {
  return (
    <div>

    <ul>
        {

         userList.map(item => (
         <li key={item.id} style={{listStyle:"none",border:"1px solid purple",background:"purple",margin:"20px",padding:"30px",fontWeight:"900",fontSize:"20px"}}>{item.name}</li>
        ))

        }
    </ul>
    

    </div>
  )
}

export default React.memo(List);