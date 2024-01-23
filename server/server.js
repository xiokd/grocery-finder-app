const express = require('express');
const app = express();
const port_no = 5555
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

/*
Routes and Requests:
- GET/POST requests go here
- Using the pool from the db.js file, it can communicate with the PostgreSQL database using SQL queries
- Routes can be accessed through localhost and appending the route at the end: http://localhost:5555/
*/

// GET Request: Return all the rows from the Products table
/*app.get("/product" , async (req,res) => {
    try {
        const allProduct = await pool.query("SELECT * FROM product");
        res.json(allProduct.rows);
    } catch (err) {
        console.error(err.message);
    }
});*/

/*
End of Routes and Requests
*/
// Routes
// SQL Queries

//get all stores
app.get("/get/Store", async (req, res) => { // http://localhost:5555/getStore
   try{
        const result = await pool.query("select * from store;");
        console.log(result);
        res.status(200).json({
            status: 200,
            store: "store1",
            data: {
                store: result.rows,
            },
        });
    }catch (err){
        console.log(err)
        }
});
//get a store <--help needed
app.get("/get/Store/:id", async (req, res) => { //http://localhost:5555/getStore/{id}
    try{
        const result = await pool.query("SELECT store_name FROM store WHERE zip = $1", [req.params.zip]);
        console.log(result);
        console.log(req.params);
        res.status(200).json({
            status: 200,
            data:{
                store: result.rows,
            },        
        })
    }catch(err){
        console.log(err)
    }
});
//create a store<--rethink the create
app.post("/create/Store", async (req, res) => {
    try{
        const result = await pool.query("INSERT INTO store (zip, store_name) values ($1, $2)", [req.body.zip, req.body.store_name]);
        console.log(req.body);
        res.status(201).json({
            status: 201,
            data:{
                store: result.rows[0],
            }

        })
    }catch(err){
        console.log(err);
    }
});
//update a store
app.put("/update/Store/:id", async (req, res) =>{
    try{
        const result = await pool.query("UPDATE store SET store_name = $1 where zip = $2 returning *", [req.body.store_name, re.params.zip]);
        console.log(req.params.id);
        console.log(req.body);
        res.status(200).json({
            status: 200,
            data:{
                store: result.rows[0],
            }

        })
    }catch(err){
        console.log(err);
    }
});
//delete a store
app.delete("/delete/Store/:id", async(req, res) =>{
    try{
        const result = await pool.query("DELETE FROM store where store_name = $1", [req.params.store_name]);
        res.status(204).json({
            status: "deleted",
        });
    }catch(err){
        console.log(err)
    }
});
//get specific item
app.get("/get/Store/item/:id", async (req, res) => {
    try{
        const result = await pool.query("SELECT item_type, item_name, price, weight FROM store WHERE item_type = $1", [req.params.item_type]);
        //console.log(result);
        console.log(req.params);
        res.status(200).json({
            status: 200,
            data:{
                store: result.rows,
            },        
        });
    }catch(err){
        console.log(err)
    }
});
// Simple GET request test using root '/' as a route
app.get('/' , (req,res) => { 
    res.send('Test Request: Success!'); 
});
  
// Server Setup 
app.listen(port_no, () => { 
    console.log('Server is starting on port 5555'); 
});