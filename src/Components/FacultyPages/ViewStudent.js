import React,{useState,useEffect} from 'react'
import axios from 'axios'

function ViewStudent() {
  const[Students,setStudents]=useState([])
  const showStudent=()=>{
     axios.get("http://localhost:9000/api/viewstudent")
    .then(response=>{
    setStudents(response.data)
    console.log(response.data)
  })
  .catch(err=>{
    if(err)
    console.log(err)

  })
  
}
useEffect(()=>{
  showStudent()
},[])
  return (
    <div className='box'>
    <div>
    <h4 style={{marginBottom:'20px',color:'orange'}}>View Student Details</h4>
    {Students.map((Std,Key)=><li style={{listStyle:'none'}}><span style={{display:'inline-block', width:'200px'}}>{Std.studentname}</span>
    <span style={{display:'inline-block', width:'100px'}}>{Std.usn}</span></li>)}
   
    </div>
    </div>
  )
}

export default ViewStudent