import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function ViewDoc() {
  const[StdDocs,setStdDocs]=useState([])
  const showPublication=()=>{
     axios.get("http://localhost:9000/api/viewstudentdocs")
    .then(response=>{
    setStdDocs(response.data)
    console.log(response.data)
  })
  .catch(err=>{
    if(err)
    console.log(err)

  })
 
}
const viewdoc=()=>{

}
useEffect(()=>{
  showPublication()
},[])
  return (
    <div className='box'>
      <h4 style={{marginBottom:'20px',color:'orange'}}>ViewDocument</h4>
     {StdDocs.map((StdDoc,Key)=><li style={{listStyle:'none'}}><span style={{display:'inline-block', width:'150px'}}> {StdDoc.dTitle}</span>
     <span style={{display:'inline-block', width:'150px'}}>{StdDoc.facultyid}</span>
     <span style={{display:'inline-block', width:'150px'}}>{StdDoc.courseCode}</span>
     <span style={{display:'inline-block', width:'200px'}}>
     <NavLink to={StdDoc.stdUrl} target="_blank" download> <button className='btn btn-primary  m-2' onClick={()=>viewdoc(StdDoc.stdUrl)}>Download Document</button></NavLink></span>
     <span style={{display:'inline-block', width:'200px'}}>
     <NavLink to={StdDoc.stdUrl} target="_blank"> <button className='btn btn-primary  m-2' onClick={()=>viewdoc(StdDoc.stdUrl)}>View Document</button></NavLink></span></li>)}
     </div>
  )
}

export default ViewDoc