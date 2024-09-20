import React, { useRef, useState } from 'react'
import axios from 'axios';

function AddFaculty() {
  const [facultyname, setfacultyname]=useState('');
  const [age, setage]=useState('');
  const [gender, setgender]=useState('');
  const [address, setaddress]=useState('');
  const [designation, setdesignation]=useState('');
  const [salary, setsalary]=useState('');
  const [msg,setmsg]=useState('');

  const fName=useRef("")
  const handlefacultyNameChange = (e) => {
    setfacultyname(e.target.value);
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
  const handledesignationChange = (e) => {
    setdesignation(e.target.value);
  };
  const handlesalaryChange = (e) => {
    setsalary(e.target.value);
  };

  const addfaculty=()=>{
    alert(fName.current.value)
    axios.post("http://localhost:9000/api/addfaculty",{
      facultyname:fName.current.value,age:age,gender:gender,address:address,destination:designation,salary:salary
    })

   .then(response=>{
   setmsg(response.data.message)
   console.log(response.data)
 })
 .catch(err=>{
   if(err)
   console.log(err)

 })
 
  }
  return (
  <div className='box'>
     <h4 style={{backgroundColor:'Yellow',margin:'15px' ,color:'red',width:'300px',borderRadius:'10px'}}>Enter Faculty details</h4>
    <input type="text" className="form-control m-2 w-25" value={facultyname} ref={fName}  onChange={handlefacultyNameChange} placeholder='Faculty Name'></input>
    <input type="text" className="form-control m-2 w-25" value={age}  onChange={handleageChange} placeholder='Age'></input>
    <input type="text" className="form-control m-2 w-25" value={gender}  onChange={handlegenderChange} placeholder='Gender'></input>
    <input type="text" className="form-control m-2 w-25" value={address}  onChange={handleaddressChange} placeholder='Address'></input>
    <input type="text" className="form-control m-2 w-25" value={designation}  onChange={handledesignationChange} placeholder='Designation'></input>
    <input type="text" className="form-control m-2 w-25" value={salary}  onChange={handlesalaryChange} placeholder='Salary'></input>
    <button onClick={()=>addfaculty()} className='btn btn-primary m-2' >Add Faculty</button>
    <p>{msg}</p>
   </div>
  )
}

export default AddFaculty