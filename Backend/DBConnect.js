const mysql=require('mysql')
const myconnection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"erp-app"
})

myconnection.connect(err=>{
    if(err)
    console.log(err)

    else
    console.log("connected to MySql")

})
module.exports=myconnection