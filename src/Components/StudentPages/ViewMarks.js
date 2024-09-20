import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ViewMarks() {
  const[Marks,setmarks]=useState([])
  const showPublication=()=>{
     axios.get("http://localhost:9000/api/viewmarks")
    .then(response=>{
    setmarks(response.data)
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
        {Marks.map((Std,Key)=><li style={{listStyle:'none'}}><span style={{display:'inline-block', width:'100px'}}>{Std.studentname}</span><span style={{display:'inline-block', width:'100px'}}>{Std.marks}</span></li>)}
    </div>
    </div>
  )
}

export default ViewMarks