const mysql=require('mysql2')
require('dotenv').config()

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'JRS615@yahoo',
    database:'cuvetteblogassignment'
})

module.exports=connection;