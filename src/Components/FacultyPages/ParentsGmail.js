import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ParentsGmail() {
  const [parents, setParents] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch parent data from the backend
    axios.get('http://localhost:9000/api/parents')
      .then(response => {
        setParents(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching parents:', error);
      });
  }, []);

  const sendEmail =async () => {
    axios.post('http://localhost:9000/api/sendEmail', {
      recipient: selectedParent,
      subject:subject,
      message:message,
    })
      .then(response => {
        alert('Email sent successfully!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
        alert('Failed to send email.');
      });
  };

  return (
    <div className='box'>
    <div>
    <h4 style={{marginBottom:'20px',color:'orange'}}>Send Email to Parents</h4>
    <div>
      <label>Select Parent Email:</label>
      <select className='form-control w-25 m-2' onChange={e => setSelectedParent(e.target.value)}>
        <option value="">--Select Parent--</option>
        {parents.map((parent, index) => (
          <option key={index} value={parent.parentGmail}>
            {parent.parentGmail}
          </option>
        ))}
      </select>
    </div>
    {selectedParent && (
      <div>
        <div>
          <label>Subject:</label>
          <input className='form-control w-25 m-2' type="text" value={subject} onChange={e => setSubject(e.target.value)} />
        </div>
        <div>
          <label>Message:</label>
          <textarea className='form-control w-25 m-2' value={message} onChange={e => setMessage(e.target.value)} />
        </div>
        <button className='btn btn-primary' onClick={sendEmail}>Send Email</button>
      </div>
    )}
  </div>
  </div>
);
};
export default ParentsGmail;
