import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Email() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const  [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
useEffect(()=>{
setTimeout(()=>{
  setMsg("")
},2000)
},[msg])
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       axios.post('http://localhost:9000/api/send', {
        email,
        message,
        subject,
      });
     setMsg("Email Sent Successfully !")
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="box">
      <h1>Send an Email</h1>
      <form onSubmit={handleSubmit}>
        
        <input className='form-control m-2 w-25'  type="email" placeholder='Email' value={email} onChange={handleEmailChange}/>
        
        <input className='form-control m-2 w-25'  type="text" placeholder='Subject' value={subject} onChange={handleSubjectChange}/>
        
        <textarea className='form-control m-2 w-50 h-50'  placeholder='Enter Message' value={message} onChange={handleMessageChange}/>
        
        <div style={{display:'flex',flexDirection:'row'}}>
        <button className='btn btn-primary m-2' type="submit">Send Email</button>
        <p style={{margin:'10px', color:'#07640A',fontWeight:'bold'}}>{msg}</p>
        </div>
      </form>
    </div>
  );
}

export default Email;
