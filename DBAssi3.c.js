const url=""
let paramaters={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"test",
    port:3306
};

const mysql=require("mysql2");
const connection=mysql.createConnection(paramaters);
console.log("Db is  working ");

let resourceNo=1;
connection.query("select resourcename, status from resource where  id=?",
[resourceNo],
(error,rows)=>{
    if (error) {
        console.log(error);  
    } else if(rows.length>0) {
        console.log(rows);   
       
    }

});