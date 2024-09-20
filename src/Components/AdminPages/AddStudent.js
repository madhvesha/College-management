import React, { useState }  from 'react'
import axios from 'axios';

function AddStudent() {
  const [studentname, setstudentname]=useState('');
  const [age, setage]=useState('');
  const [gender, setgender]=useState('');
  const [address, setaddress]=useState('');
  const [usn, setusn]=useState('');
  const [parentGmail, setparentGmail]=useState('');
  const [msg,setmsg]=useState('');

  const handlestudentnameChange = (e) => {
    setstudentname(e.target.value);
  };
  const handleageChange = (e) => {
    setage(e.target.value);
  };
  const handlegenderChange = (e) => {
    setgender(e.target.value);
  };
  const handleaddressChange = (e) => {
    setaddress(e.target.value);
  };
  const handleusnChange = (e) => {
    setusn(e.target.value);
  };
  const handleparentGmailChange = (e) => {
    setparentGmail(e.target.value);
    
  };
  const addstudent=async ()=>{
    
    axios.post("http://localhost:9000/api/student/addstudent",{
      studentname:studentname,usn:usn,age:age,gender:gender,address:address,parentGmail:parentGmail
    })

   .then(response=>{
   setmsg(response.data.message)
   alert("Student Added Successfully")
  
 })
 .catch(err=>{
   if(err)
   console.log(err)

 })
  }
  return (
   <div className='box'>
     <h4 style={{backgroundColor:'Yellow',margin:'15px' ,color:'red',width:'300px',borderRadius:'10px'}}>Enter Student details</h4>
    <input type="text" className="form-control m-2 w-25" value={studentname}  onChange={handlestudentnameChange}  placeholder='Student Name'></input> 
    <input type="text" className="form-control m-2 w-25" value={usn}  onChange={handleusnChange} placeholder='Usn'></input>
    <input type="text" className="form-control m-2 w-25" value={age}  onChange={handleageChange} placeholder='Age'></input>
    <input type="text" className="form-control m-2 w-25" value={gender}  onChange={handlegenderChange} placeholder='Gender'></input>
    <input type="text" className="form-control m-2 w-25" value={address}  onChange={handleaddressChange} placeholder='Address'></input>
    <input type="email" className="form-control m-2 w-25" value={parentGmail}  onChange={handleparentGmailChange} placeholder='Parent Gmail'></input>
    <button onClick={()=>addstudent()} className='btn btn-primary m-2' >Add Student</button>
    <p>{msg}</p>
   </div>
  )
}

export default AddStudent