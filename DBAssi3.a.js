const url="";

let parameter={

    host : 'localhost',
    user :'root',
    password :'cdac',
    database :'test',
    port : 3306
};

const mysql = require("mysql2");
const connection=mysql.createConnection(parameter);
console.log("database working");

let resourceNo =1;
let resourceName  ='sales';
let status   =true;

connection.query('insert into resource (id,resourcename,status) values(?,?,?)',
[resourceNo,resourceName,status] ,
(err,res1)=>{
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}


);