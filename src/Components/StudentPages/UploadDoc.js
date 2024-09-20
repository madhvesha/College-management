import React,{useState,useEffect,useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
function UploadDoc() {
  const [msg,setmsg]=useState("")
  const[file,setFile]=useState("")
  const myFile=useRef("")
  
  
  const uploadfile=async()=>{
   alert(myFile.current.value)
   const formData=new FormData()
   formData.append('folder',"Questionpaper")
   formData.append('file',myFile.current.files[0])
   await axios.post("http://localhost:9000/api/uploadstudentfile",formData,{
    headers:{
      "Content-Type":"multipart/formData"
    }
   })
   .then(resp=>{
    setmsg("File Uploaded")
   })
   .catch(err=>{
    console.log(err)
   })
  }

  const onFileChange=(e)=>{
     setFile(e.target.files[0]);
  }


  useEffect(()=>{
    setTimeout(()=>{
      setmsg("")
    },2000)
  },[msg])
  return (
    <div className='box'>
      <h4 style={{margin:'20px',color:'blueviolet'}}>Upload Student Document</h4>
      <div style={{display:'flex',flexDirection:'row'}}>
    <input ref={myFile} type="file" onChange={onFileChange} className="form-control m-2 w-25" ></input>
      <button onClick={()=>uploadfile()} className='btn btn-danger m-2' > Upload File</button>
      <p style={{color:'green',margin:'10px',backgroundColor:'yellow'}}>{msg}</p>
    </div>
    </div>
  )
}

export default UploadDoc