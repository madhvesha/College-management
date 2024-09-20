
import './Login.css'
import React, { useRef, useState } from 'react'

function Login({setLoginStatus,setloginType}) {
    const [user,setUser]=useState("")
    const [Password,setPassword]=useState("")
    const [userType, setUserType]=useState("");
    const handleSelectChange=(e)=>{
        setUserType(e.target.value);
      };
    const PasswordRef=useRef()
    const authenticateUser=()=>{
       if(user==="mlp" && Password==="123"){
        alert(userType)
       if(userType==="Admin")
       setloginType("Admin")
    
       else if(userType==="Faculty")
       setloginType("Faculty")
       else if(userType==="Hod")
       setloginType("Hod")
       else
       setloginType("Student")
       
    setLoginStatus(true)
       }
    else
    alert("Access Denied")
    setUser("")
    setPassword("")
    }
  return (
    <div  style={{width: '550px', height: '400px'}}>
        <div className='container' style={{marginLeft:'300px'}}>
        <h1 className='h2'>Login</h1>
        <input className='form-control w-50 m-2' value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Login' ></input>
        <input className='form-control w-50 m-2' value={Password}  onChange={(e)=>setPassword(e.target.value)} ref={PasswordRef} type='password' placeholder='Password'></input>
        <select className='form-control w-50 m-2' id='userType' value={userType}  onChange={handleSelectChange}>
            <option selected>select User Type</option>
            <option value="Admin">Admin</option>
            <option value="Faculty">Faculty</option>
            <option value="Student">Student</option>
            <option value="Hod">Hod</option>
          </select>
        <button onClick={()=>authenticateUser()} className='btn btn-primary w-25 m-1'>Login</button>
        
        </div>
    </div>
  )
}

export default Login