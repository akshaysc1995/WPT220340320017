const express = require('express');

const app = express();
const mysql = require('mysql2');
app.use(express.static("sf"));
let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'nodejs',
    port: 3306
};

const con = mysql.createConnection(dbparams);

app.get("/pincode", (req, resp) => {
    let pincode1 = req.query.pincode;
    console.log(pincode1);
    let details = { status: false, cityname: {} }
    con.query('select city from citytable where pincode=?', [pincode1],
        (error, cityRow) => {
         //   console.log("error occured");
            if (error) {
                //when you dont have data why problem is there collect data first.
                console.log("Error aaa raha he be" + error);
            }
            else if(cityRow.length>0){
                details.status = true;
                details.cityname =cityRow[0]
            }
           resp.send(details);

            console.log("search");

        }
    );
    console.log(details.cityname.city)
    
});
app.listen(1000, function () {
    console.log("Server connect tomport 1000");

});