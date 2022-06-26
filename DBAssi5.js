const express = require('express');

const app = express();
const mysql = require('mysql2');
app.use(express.static("sf"));
let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'test',
    port: 3306
};

const con = mysql.createConnection(dbparams);

app.get("/AccountInfo", (req, resp) => {
    let accno = req.query.accno;
    console.log(accno);
    let details = { status: false, account: {} }
    con.query('select balance from account where accno=?', [accno],
        (error, cityRow) => {
         //   console.log("error occured");
            if (error) {
                //when you dont have data why problem is there collect data first.
                console.log("Error aaa raha he be" + error);
            }
            else if(cityRow.length>0){
                details.status = true;
                details.account =cityRow[0]
            }
           resp.send(details);

            console.log("search");

        }
    );
    console.log(details.account.balance)
    
});
app.listen(1200, function () {
    console.log("Server connect tomport 1200");

});