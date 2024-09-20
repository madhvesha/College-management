const express=require('express')
const router=express.Router()
const myconnection=require("./DBConnect")

router.post('/addstudent', (req, res) => {
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
router.post('/studentgrevience', (req, res) => {
      const { greviencetype,usn,description } = req.body;
      console.log(description)
      const sql = 'INSERT INTO studentgrevience (greviencetype,usn,decsription ) VALUES (?,?,?)';
      try {
        myconnection.query(sql, [greviencetype,usn,description ], (err, result) => {
       
          if (err) {
            console.error('Error adding Grevience :', err);
            res.status(500).json({ success: false, message: 'Failed to add Grevience.' });
          } else {
            myconnection.commit();
            myconnection.query("select max(complaintID) as cid from studentgrevience ",(err,resp)=>{
              res.send(resp);
            })  
            
          }
        });
      } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ success: false, message: 'Internal server error.' });
        }
      });   
      
router.get("/studentcomplaint/:cid",(req,res)=>{
  let cid=req.params.cid
        myconnection.query("select * from studentgrevience where complaintID="+cid,(err,result)=>{
            if(err)
            console.log(err)
        else
        res.send(result)
        })
    })      
router.get("/studentgreviencehod",(req,res)=>{
            myconnection.query("select * from studentgrevience ",(err,result)=>{
                if(err)
                console.log(err)
            else
            res.send(result)
            })
        })  
        
router.put("/studentgrevienceupdate/:cid/:type",(req,res)=>{
  let cid=req.params.cid
  let type=req.params.type
  if(type==2)
  myconnection.query("update studentgrevience set status='Resolved' where complaintID=?",[cid],(err,result)=>{
      if(err)
      console.log(err)
  else
  res.send(result)
  })
  else if(type==1)
  myconnection.query("update studentgrevience set status='Under Process' where complaintID=?",[cid],(err,result)=>{
    if(err)
    console.log(err)
else
res.send(result)
})
})          
module.exports=router