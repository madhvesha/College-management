import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ViewPublication() {
  const[Publications,setpublication]=useState([])
  const showPublication=()=>{
     axios.get("http://localhost:9000/api/getfacultypublications")
    .then(response=>{
    setpublication(response.data)
    console.log(response.data)
  })
  .catch(err=>{
    if(err)
    console.log(err)

  })
  
}
useEffect(()=>{
  showPublication()
},[])
  return (
<div className='box'>
    <div>
         
        {Publications.map((Pub,Key)=><li style={{listStyle:'none'}}>
          <span style={{display:'inline-block', marginBottom:'10px'}}>{Pub.pTitle}</span></li>)}
        
    </div>
    </div>
  )
}

export default ViewPublication