import React, { useEffect, useState } from 'react'
import axios from 'axios'


function StudentGrevience() {
    const [description,setdescription]=useState()
    const [greviencetype,setgreviencetype]=useState()
    const [respcode,setrespcode]=useState()
    const [complaintid,setcomplaintid]=useState("")
    const [allcomplaints,setallcomplaints]=useState([])

    const handleSelectChange=(e)=>{
        setgreviencetype(e.target.value);
      };
    const searchgrevience=()=>{
        alert(complaintid)
        axios.get("http://localhost:9000/api/student/studentcomplaint/"+complaintid)
        .then(response =>{
            setallcomplaints(response.data);
            console.log(response.data)
          })
          .catch(error =>{
            console.error('Error fetching complaint id :', error);
          });
    }
    const submitgrevience=()=>{
        alert(description)
        axios.post("http://localhost:9000/api/student/studentgrevience",{
             greviencetype:greviencetype,description:description,usn:"2GI21CS023"
        })
       .then(response=>{
       alert("Grevience Recoreded")
       setrespcode(response.data[0].cid)
       console.log(response.data)
     })
     .catch(err=>{
       if(err)
       console.log(err)
   
     })
     
   }
   useEffect(()=>{

   },[respcode])
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
    <div className='box1'>
        <h4>Select Grevience -<p>{respcode}</p></h4>
        <select className='form-select w-50 m-2'  onChange={handleSelectChange} >
            <option selected>Select the Grevience </option>
            <option value="Drinking Water">Drinking Water </option>
            <option value="Bus Facility">Bus Facility</option> 
          </select>
          <input type='text' className='form-control w-75 m-2' style={{height:'250px',padding: "0 0 200px 0"}} placeholder='  Description (Max 200 words)' onChange={(e)=>setdescription(e.target.value)} />
          <button className='btn btn-primary  m-2' onClick={()=>submitgrevience()} >Submit Grevience</button>
          
    </div>
    <div className='box1'>
       <h4>Student Greviences Status</h4>
       <input type='text' className='form-control w-25 m-2' placeholder='Complaint ID' onChange={(e)=>setcomplaintid(e.target.value)}></input>
       <button className='btn btn-primary m-2' onClick={()=>searchgrevience()}>Search</button>
       {allcomplaints.map((Stdgrevi,Key)=><li style={{listStyle:'none'}}><span style={{display:'inline-block', width:'100px'}}>{Stdgrevi.greviencetype}</span>
       <span style={{display:'inline-block', width:'100px'}}>{Stdgrevi.description}</span>
       <span style={{display:'inline-block', width:'100px'}}>{Stdgrevi.status}</span></li>)}
    </div>
    </div>
  )
}

export default StudentGrevience