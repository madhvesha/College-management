import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';

function UploadDocument() {
    const [subcode ,setsubcode]=useState("")
    const [file, setFile] = useState("");
    const [facultyid,setfacultyid]=useState(100)
    const [documenttype,setDocumenttype]=useState("")
    const [title,setTitle]=useState("")
  
  
    const handleUpload = async () => {
      if (!file) {
        alert('Please select a file');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('doctype',documenttype);
      formData.append('facultyid',facultyid);
      formData.append('subCode',subcode);
       alert(file+" "+documenttype+facultyid)
      try {
        const response = await axios.post('http://localhost:9000/api/FileUpload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response.data);
        alert('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file');
      }
     /* $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/api/FileUpload', // Replace with your server endpoint
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          console.log('File uploaded successfully:'+response);
        
        },

    });*/
  }
return (
  <div className='box'>
    <input type='text' className='form-control w-25 m-2' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} />
    <select className='form-control w-25 m-2'  value={documenttype}  onChange={(e)=>setDocumenttype(e.target.value)}>
            <option selected>Select Document Type </option>
            <option value="">IA1</option>
            <option value="">IA2</option>
            <option value="">As1</option>
            <option value="">As2</option>
            <option value="">Time Table</option>
          </select>
    <select className='form-control w-25 m-2'  value={subcode}  onChange={(e)=>setsubcode(e.target.value)}>
            <option selected>Select Subject Code </option>
            <option value="21CS51">21CS51</option>
            <option value="21CS71">21CS71</option>
          </select>
    <input type="file" className='form-control w-25 m-2' onChange={(e)=>setFile(e.target.value)} />
    <button onClick={handleUpload} className='btn btn-primary m-2'>Upload File</button>
  </div>
);
}
export default UploadDocument