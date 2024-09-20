import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Routes,Route,NavLink } from 'react-router-dom';

import ViewStudent from './FacultyPages/ViewStudent';
import UploadDocument from './FacultyPages/UploadDocument';
import ViewDocument from './FacultyPages/ViewDocument';
import ViewPublication from './FacultyPages/ViewPublication';
import Email from './FacultyPages/Email';
import ParentsGmail from './FacultyPages/ParentsGmail';

function Faculty({setLoginStatus}){
  
const logout=()=>{
  alert("Logout")
  setLoginStatus(false)
}
  return (
    <div>
        
      <div className="container12">
        {/* Your Faculty content here */}
        <h1>Welcome to Faculty Account</h1>
        <p>This is your Faculty dashboard.</p>
      </div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto" style={{paddingLeft:'20px', display:'flex',justifyContent:'space-around', gap:'10px'}}>
          <NavLink to="/stdDetails" element={<ViewStudent />} style={{textDecoration:'none',margin:'5px',color:'white'}}>View Student Details</NavLink>
          <NavLink to="/uploadDoc" element={<UploadDocument />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Upload documents</NavLink>
          <NavLink to="/viewDoc" element={<ViewDocument />} style={{textDecoration:'none',margin:'5px',color:'white'}}>View Documents</NavLink>
          <NavLink to="/viewPub" element={<ViewPublication />} style={{textDecoration:'none',margin:'5px',color:'white'}}>View Publications</NavLink>
          <NavLink to="/sendmail" element={<Email />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Send Email</NavLink>
          <NavLink to="/parentmail" element={<ParentsGmail />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Parents  Email</NavLink>
        </Nav>
        
        <Nav>
         
          <img onClick={logout} style={{cursor:'pointer',marginLeft:'650px',borderRadius:'30px'}} src={require("./images/logout.jpeg")} width='50px' height='50px' alt='Logout'>
    </img>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/stdDetails" element={<ViewStudent />}></Route>
        <Route path="/upLoadDoc" element={<UploadDocument />}></Route>
        <Route path="/viewDoc" element={<ViewDocument />}></Route> 
        <Route path="/viewPub" element={<ViewPublication />}></Route>
        <Route path="/sendmail" element={<Email />}></Route>
        <Route path="/parentmail" element={<ParentsGmail/>}></Route>


        
        </Routes>
    </div>
  );
};

export default Faculty;