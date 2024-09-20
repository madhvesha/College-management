import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Routes,Route,NavLink } from 'react-router-dom';
import AddStudent from './AdminPages/AddStudent';
import AddFaculty from './AdminPages/AddFaculty';
import AddCourse from './AdminPages/AddCourse';
function Admin({setLoginStatus}) {
  const logout=()=>{
    alert("Logout")
    setLoginStatus(false)
  }
  return (
   <div>
    <div className="container12">
      {/* Your Admin content here */}
      <h1>Welcome to Admin Account</h1>
      <p>This is your Admin dashboard.</p>
    </div>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto" style={{paddingLeft:'20px', display:'flex',justifyContent:'space-around', gap:'30px'}}>
      <NavLink to="/addStd" element={<AddStudent />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Add Student</NavLink>
      <NavLink to="/addfaculty" element={<AddFaculty />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Add Faculty</NavLink>
      <NavLink to="/addcourse" element={<AddCourse />} style={{textDecoration:'none',margin:'5px',color:'white'}}>Add Course</NavLink>
      <img onClick={logout} style={{cursor:'pointer',marginLeft:'650px',borderRadius:'30px'}} src={require("./images/logout.jpeg")} width='50px' height='50px' alt='Logout'>
    </img>
    </Nav>
    </Navbar>
    <Routes>
        <Route path="/addstd" element={<AddStudent />}></Route>
        <Route path="/addfaculty" element={<AddFaculty />}></Route>
        <Route path="/addcourse" element={<AddCourse />}></Route>
       
        </Routes>
    </div>
  )
}

export default Admin
