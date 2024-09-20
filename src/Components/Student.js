import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Routes,Route,NavLink } from 'react-router-dom';

import ViewDoc from './StudentPages/ViewDoc';
import UploadDoc from './StudentPages/UploadDoc';
import ViewMarks from './StudentPages/ViewMarks';
import StudentGrevience from './StudentPages/StudentGrevience';

function Student({setLoginStatus}) {
  const logout=()=>{
    alert("Logout")
    setLoginStatus(false)
  }
  return (
    <div>
        
      <div className="container12">
        {/* Your Faculty content here */}
        <h1>Welcome to Student Account</h1>
        <p>This is your Student dashboard.</p>
      </div>
      <Navbar bg="dark" variant="dark" >
        <Nav className="mr-auto" style={{paddingLeft:'20px', display:'flex',justifyContent:'space-around', gap:'30px'}}>
          <NavLink to="/viewMarks" element={<ViewMarks />} style={{textDecoration:'none',margin:'5px',color:'white'}}>View Marks</NavLink>
          <NavLink to="/uploadDoc" element={<UploadDoc />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Upload documents</NavLink>
          <NavLink to="/viewDoc" element={<ViewDoc />} style={{textDecoration:'none',margin:'5px',color:'white'}}>View Documents</NavLink>
          <NavLink to="/stdgrevience" element={<StudentGrevience />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Student Grevience</NavLink>
          <img onClick={logout} style={{cursor:'pointer',marginLeft:'650px',borderRadius:'30px'}} src={require("./images/logout.jpeg")} width='50px' height='50px' alt='Logout'>
    </img>
        </Nav>
        </Navbar>
      <Routes>
        <Route path="/viewMarks" element={<ViewMarks />}></Route>
        <Route path="/upLoadDoc" element={<UploadDoc />}></Route>
        <Route path="/viewDoc" element={<ViewDoc />}></Route> 
        <Route path="/stdgrevience" element={<StudentGrevience />}></Route>
        </Routes>
    </div>
  )
}

export default Student