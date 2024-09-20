import './App.css';
import React,{useEffect, useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Student from './Components/Student';
import Faculty from './Components/Faculty';
import Hod from './Components/Hod';
import Email from './Components/FacultyPages/Email';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  const [loginStatus,setLoginStatus]=useState(false)
  const [loginType,setloginType]=useState("")
  useEffect(()=>{

},[loginStatus])
  return (
    <React.Fragment>
      <div className="App">
      <Routes>
        <Route to="/Admin" element={<Admin />}></Route>
        <Route to="/Faculty" element={<Faculty />}></Route>
        <Route to="/Student" element={<Student />}></Route>
        <Route to="/Hod" element={<Hod />}></Route>   
       
        </Routes>
        {loginStatus && (loginType==="Admin"?<Admin setLoginStatus={setLoginStatus} /> :loginType==="Student"?<Student setLoginStatus={setLoginStatus} /> :loginType==="Faculty"?<Faculty setLoginStatus={setLoginStatus} />:loginType==="Hod"?<Hod setLoginStatus={setLoginStatus} /> :<h1>None of these</h1>)}
        {!loginStatus && <Login setLoginStatus={setLoginStatus} loginType={loginType} setloginType={setloginType} />}
    </div> 
    </React.Fragment>
  );

}

export default App;
