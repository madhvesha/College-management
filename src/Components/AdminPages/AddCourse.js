import React, { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseType, setCourseType] = useState('');
  const [courseCredits, setCourseCredits] = useState('');
  const [msg,setmsg]=useState('');

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };
  const handleCourseCodeChange = (e) => {
    setCourseCode(e.target.value);
  };
  const handleCourseTypeChange = (e) => {
    setCourseType(e.target.value);
  };
  const handleCourseCreditsChange = (e) => {
    setCourseCredits(e.target.value);
  };

  const addCourse=()=>{
    
    axios.post("http://localhost:9000/api/addcourse",{
      courseName:courseName, courseCode:courseCode, courseType:courseType, courseCredits:courseCredits
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
    <div className="box">
       <h4 style={{backgroundColor:'Yellow',margin:'15px' ,color:'red',width:'300px',borderRadius:'10px'}}>Add Course</h4>
      <div>
        <input type="text"  className="form-control m-2 w-25"  value={courseName}  onChange={handleCourseNameChange}  placeholder="Enter course name"  />
        <input type="text"  className="form-control m-2 w-25"  value={courseCode}  onChange={handleCourseCodeChange}  placeholder="Enter course Code"  />
        <input type="text"  className="form-control m-2 w-25"  value={courseType}  onChange={handleCourseTypeChange}  placeholder="Enter course Type"  />
        <input type="text"  className="form-control m-2 w-25"  value={courseCredits}  onChange={handleCourseCreditsChange}  placeholder="Enter course Credits"  />
        <button  className="btn btn-primary" onClick={addCourse}>Add Course</button>
        <p>{msg}</p>
      </div>
    </div>
  );
}

export default AddCourse;
