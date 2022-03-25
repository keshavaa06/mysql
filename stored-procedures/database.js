const { connect } = require('http2')
const db = require('mysql')
const connection = db.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'mydb'
})
connection.connect(function(err){
    if(err)throw err
    console.log('connected')
    // const sql = 'CREATE DATABASE mydb' .. for creating database
    // connection.query(sql,(err,result)=>{if(err)throw err
    // console.log('Database Created')})
  //  const sql = 'CREATE TABLE customers (name VARCHAR(255),address VARCHAR(255))' .. for creating a table
  //const sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY' .. altering exisiting by adding a column with primary key
  //const sql = 'INSERT INTO customers (name,address) VALUES("Company INC","High-Way 37")' .. inserting a record into table
    // connection.query(sql,(err,result)=>{if(err)throw err
    // console.log('1 Record Inserted')

//inserting multiple records
// const sql = 'INSERT INTO customers (name,address) VALUES ?'
// const values = [ ['John', 'Highway 71'],
// ['Peter', 'Lowstreet 4'],
// ['Amy', 'Apple st 652'],
// ['Hannah', 'Mountain 21'],
// ['Michael', 'Valley 345'],
// ['Sandy', 'Ocean blvd 2'],
// ['Betty', 'Green Grass 1'],
// ['Richard', 'Sky st 331'],
// ['Susan', 'One way 98'],
// ['Vicky', 'Yellow Garden 2'],
// ['Ben', 'Park Lane 38'],
// ['William', 'Central st 954'],
// ['Chuck', 'Main Road 989'],
// ['Viola', 'Sideway 1633']]
// connection.query(sql,[values],(err,result)=>{if(err)throw err
// console.log(result.affectedRows+' '+'records inserted')
// })

//const sql = 'SELECT * FROM customers'
//const sql = 'SELECT name,address FROM  customers' //.. to get selected fields
// connection.query(sql,(err,result,fields)=>{
//     if(err)throw err
//     //console.log(result) .. all records are printed
//    // console.log(result[2].address) ..address field of third record is printed
//    console.log(fields)
// })
//const sql = 'SELECT * FROM customers WHERE address="Park Lane 38"'
//const sql ='SELECT * FROM customers WHERE address LIKE "S%" '
const adr = 'Mountain 21'
const name='Amy'
//const sql = 'SELECT * FROM customers WHERE name = ? OR address = ? '
//const sql = 'SELECT * FROM customers WHERE address = ?'
//const sql = 'SELECT * FROM customers ORDER BY name DESC'
// const sql = 'SELECT * FROM customers LIMIT 5'
//const sql = 'SELECT * FROM customers LIMIT 5 OFFSET 2'
//const sql = 'SELECT * FROM customers LIMIT 2,5'
const sql = 'UPDATE customers SET address="Canyon 123" WHERE address="Valley 345" '
//connection.query(sql,[name,adr],(err,result,fields)=>{
   // connection.query(sql,[adr],(err,result,fields)=>{
       connection.query(sql,(err,result)=>{
    if(err)throw err
    //console.log(result)
    console.log(result.affectedRows+' '+'rows updated')
})

   
})

