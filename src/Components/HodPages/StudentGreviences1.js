import React, { useEffect, useState } from 'react'
import axios from 'axios'

function StudentGreviences1() {
  const[greviences,setgreviences]=useState([])
  const[status,setStatus]=useState("")
  const resolveIssue=(g,type)=>{
     if(type==1){
      setStatus("Under Process")
     }
     else if(type==2){
      setStatus("Resolved")
     }
     let cid=g.complaintID
     axios.put("http://localhost:9000/api/student/studentgrevienceupdate/"+cid+"/"+type)
     .then(response=>{
      console.log(response.data)
    })
  }
  const showPublication=()=>{
     axios.get("http://localhost:9000/api/student/studentgreviencehod")
    .then(response=>{
    setgreviences(response.data)
    console.log(response.data)
  })
  .catch(err=>{
    if(err)
    console.log(err)

  })
  
}
useEffect(()=>{
  showPublication()
},[greviences])
  return (
    <div className='box'>
    <div>
      {greviences.map((grevience,Key)=><li style={{listStyle:'none'}}><span style={{display:'inline-block', width:'150px'}}>{grevience.greviencetype}</span>
      <span style={{display:'inline-block', width:'125px'}}>{grevience.status}</span>

      <button onClick={(e)=>resolveIssue(grevience,1)} >Under Process</button>
      <button onClick={(e)=>resolveIssue(grevience,2)} >Resolved</button>
      </li>)}
    </div>
    </div>
  )
}

export default StudentGreviences1