const express=require('express')
const bp=require('body-parser')
const cors=require('cors')
const multer=require('multer');
const nodemailer=require('nodemailer');
const fs = require('fs');
const PORT=9000
const myconnection=require('./DBConnect')
const path=require('path')
const Addstudent=require('./Addstudent')
const App=express()
App.use(bp.json())
App.use(cors({origin:"*"}))
App.use(express.urlencoded({extended:false}))
var newDir=""



const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    
    const newfolder=req.body.folder 
    console.log(newfolder)

    newDir="uploads/"+newfolder+"/"
    const uploadDir=path.join(__dirname,newDir);
   if(!fs.existsSync(uploadDir)){
      fs.mkdirSync(uploadDir)
}
    cb(null,'uploads/'+newfolder+"/")
  },

  filename:(req,file,cb)=>{
    const newFileName="user100"+"."+path.extname(file.originalname)
    cb(null,newFileName)
  }
})

const upload=multer({storage:storage})



App.post('/api/uploadstudentfile',upload.single('file'),(req,res)=>{
  if(!req.file){
    return res.status(400).send('File not uploaded')
  }
  res.status(200).send('File uploaded successfully')
})


App.get("/api/getfacultypublications",(req,res)=>{
    myconnection.query("select * from facultypublication",(err,result)=>{
        if(err)
        console.log(err)
    else
    res.send(result)
    })
})
App.get("/api/viewmarks",(req,res)=>{
    myconnection.query("select * from viewmarks",(err,result)=>{
        if(err)
        console.log(err)
    else
    res.send(result)
    })
})
App.post('/api/addcourse', (req, res) => {
    const { courseName, courseCode, courseType, courseCredits } = req.body;
  
    const sql = 'INSERT INTO coursecode (coursename, coursecode, coursetype, coursecredits) VALUES (?, ?, ?, ?)';
    try {
      myconnection.query(sql, [courseName, courseCode, courseType, courseCredits], (err, result) => {
        if (err) {
          console.error('Error adding course to database:', err);
          res.status(500).json({ success: false, message: 'Failed to add course.' });
        } else {
          console.log('Course added to database:', result);
          res.status(200).json({ success: true, message: 'Course added successfully.' });
        }
      });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
      }
    });
App.post('/api/addfaculty', (req, res) => {
      const { facultyname,age,gender,address,destination,salary } = req.body;
    
      const sql = 'INSERT INTO faculty (facultyname,age,gender,address,destination,salary) VALUES (?,?,?,?,?,?)';
      try {
        myconnection.query(sql, [facultyname,age,gender,address,destination,salary], (err, result) => {
          if (err) {
            console.error('Error adding faculty to database:', err);
            res.status(500).json({ success: false, message: 'Failed to add faculty.' });
          } else {
            console.log('Course added to database:', result);
            res.status(200).json({ success: true, message: 'Faculty added successfully.' });
          }
        });
      } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ success: false, message: 'Internal server error.' });
        }
      });
App.use("/api/student",Addstudent)



/*App.post('/api/addstudent', (req, res) => {
        const { studentname,usn,age,gender,address,parentGmail } = req.body;
        console.log(parentGmail)
        const sql = 'INSERT INTO student (studentname,usn,age,gender,address,parentGmail) VALUES (?,?,?,?,?,?)';
        try {
          myconnection.query(sql, [studentname,usn,age,gender,address,parentGmail], (err, result) => {
            
            if (err) {
              console.error('Error adding Student to database:', err);
              res.status(500).json({ success: false, message: 'Failed to add Student.' });
            } else {
              console.log('Course added to database:', result);
              res.status(200).json({ success: true, message: 'Student added successfully.' });
            }
          });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'Internal server error.' });
          }
        });
*/
App.get('/api/parents', (req, res) => {
  myconnection.query("select parentGmail from student ",(err,result)=>{
    if(err)
    console.log(err)
else
res.send(result)
})
        });
        
        // Endpoint to send email
App.post("/api/sendEmail",async(req,res)=>{
          const {recipient,message,subject}=req.body;
          console.log(recipient)
          const transporter = nodemailer.createTransport({
              service:'Gmail',
              auth: {
                user: 'madhveshapatil@gmail.com',
                pass: 'nxfa qhvv shjs fgtx',
              },
      })
      try {
          // Send mail with defined transport object
          await transporter.sendMail({
            from: 'madhveshapatil@gmail.com',
            to: recipient,
            subject: subject,
            text: message,
          });
          res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
      });
        
App.get("/api/getfacultydocument",(req,res)=>{
    myconnection.query("select * from facultydocuments",(err,result)=>{
        if(err)
        console.log(err)
    else
    res.send(result)
    })
})
App.post("/api/send",async(req,res)=>{
    const {email,message,subject}=req.body;
    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth: {
          user: 'madhveshapatil@gmail.com',
          pass: 'nxfa qhvv shjs fgtx',
        },
})
try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: 'madhveshapatil@gmail.com',
      to: email,
      subject: subject,
      text: message,
    });
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});
App.get("/api/viewstudent",(req,res)=>{
    myconnection.query("select * from student",(err,result)=>{
        if(err)
        console.log(err)
    else
    res.send(result)
    })
})
App.get("/api/viewstudentdocs",(req,res)=>{
  myconnection.query("select * from viewstudentDoc",(err,result)=>{
      if(err)
      console.log(err)
  else
  res.send(result)
  })
})

App.listen(PORT,err=>{
    if(err)  console.log(err)
    else
console.log("Server Started at PORT "+PORT)
})
