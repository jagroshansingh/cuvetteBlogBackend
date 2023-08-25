const mysql=require('mysql2')
require('dotenv').config()

const connection=mysql.createConnection({
    host:'database-1.cl6c5dt3dv1u.eu-north-1.rds.amazonaws.com',
    user:'admin',
    password:`${process.env.dbPassword}`,
    database:'cuvetteblogassignment'
})

module.exports=connection;