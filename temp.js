
const express = require('express');
const app = express();
app.use(express.static("abc"));
const mysql=require('mysql2');
let dbparams={

		host:'localhost',
		user: 'root',
		password: 'cdac',
		database:'students',
		port:3306


};

const con=mysql.createConnection(dbparams);

app.get("/BookInfo",(req,resp)=>{

	let bookid1 =req.query.bookid;
	console.log(bookid1);
	let details={status: false,book: {}};

	con.query('select bookid,bookname,price from book where bookid=?',[bookid1],
	(error,rows)=>{
    if(error){
		console.log("Error is going.. "+error)
	}
	else if(rows.length > 0){
		details.status=true;
		details.book.bookid=rows[0].bookid;
		details.book.bookname=rows[0].bookname;
		details.book.price=rows[0].price;
	
	}
	resp.send(details);
	
});


});



//update

app.get("/BookUpdate",(req,resp)=>{

	let bookid2 =req.query.bookid2;
	let bookname2 =req.query.bookname2;
	let price2 =req.query.price2;

	console.log(bookid2);
	let details={status: false,book: {}};

	con.query('update book set bookname=?,price=? where bookid=?',[bookname2,price2,bookid2],
	(error,rows)=>{
    if(error){
		console.log("Error is going.. "+error)
	}
	else if(rows.affectedRows > 0){
		details.status=true;
		console.log("upadte successfull");
	}
	else{
		console.log("upadte failed");
	}
	resp.send(details);
	
});


});

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});