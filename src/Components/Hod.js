import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Routes,Route,NavLink } from 'react-router-dom';
import StudentGreviences1 from './HodPages/StudentGreviences1'

function Hod({setLoginStatus}) {
    const logout=()=>{
        alert("Logout")
        setLoginStatus(false)
    }
  return (
    <div>
        
    <div className="container12">
      {/* Your Faculty content here */}
      <h1>Welcome to Hod Account</h1>
      <p>This is your  Hod dashboard.</p>
    </div>
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto" style={{paddingLeft:'20px', display:'flex',justifyContent:'space-around', gap:'10px'}}>
        <NavLink to="/stdgrevience" element={<StudentGreviences1/>} style={{textDecoration:'none',margin:'5px',color:'white'}}>Student Grevience</NavLink>
        </Nav>
        <Nav>
         
         <img onClick={logout} style={{cursor:'pointer',marginLeft:'650px',borderRadius:'30px'}} src={require("./images/logout.jpeg")} width='50px' height='50px' alt='Logout'>
   </img>
       </Nav>
     </Navbar>
     <Routes>
        <Route path="/stdgrevience" element={<StudentGreviences1 />}></Route>
        </Routes>
    </div>
  )
}

export default Hod