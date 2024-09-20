import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


function ViewDocument() {
  const[FacDocumets,setfacDocuments]=useState([])
  const showDocuments=()=>{
     axios.get("http://localhost:9000/api/getfacultydocument")
    .then(response=>{
    setfacDocuments(response.data)
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
  showDocuments()
},[])
  return (
    <div className='box'>
      <h4 style={{marginBottom:'20px',color:'orange'}}>ViewDocument</h4>
     {FacDocumets.map((Doc,Key)=><li style={{listStyle:'none'}}><span style={{display:'inline-block', width:'150px'}}> {Doc.dTitle}</span>
     <span style={{display:'inline-block', width:'150px'}}>{Doc.facultyid}</span>
     <span style={{display:'inline-block', width:'150px'}}>{Doc.courseCode}</span>
     <span style={{display:'inline-block', width:'200px'}}>
     <NavLink to={Doc.documentUrl} target="_blank" download> <button className='btn btn-primary  m-2' onClick={()=>viewdoc(Doc.documentUrl)}>Download Document</button></NavLink></span>
     <span style={{display:'inline-block', width:'200px'}}>
     <NavLink to={Doc.documentUrl} target="_blank"> <button className='btn btn-primary  m-2' >View Document</button></NavLink></span></li>)}
     

    </div>
  )
}

export default ViewDocument