const express = require('express');
const app = express();
const port_no = 5555;
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
app.get("/get/Store/:store_name", async (req, res) => { //http://localhost:5555/getStore/{id}
    try{
        const result = await pool.query("SELECT * FROM store WHERE store_name = $1", [params.body.store_name]);
        console.log(result);
        console.log(store_name);
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
//create a new store entry with product
app.post("/create/Store", async (req, res) => {
    try{
        const result = await pool.query("INSERT INTO store (zip, city, address, store_name, product_name, product_discription, product_type, product_weight, product_price, package_quantity, product_upc, product_url) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
         [req.body.zip, req.body.city, req.body.address, req.body.store_name, req.body.product_name, req.body.product_discription, req.body.product_type, req.body.product_weight, req.body.product_price, req.body.package_quantity, req.body.product_upc, req.body.product_url]);
        
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
//update a product and (store <--will fix later with a separate table)
app.put("/update/Store/item/:product_upc", async (req, res) =>{
    try{
        const result = await pool.query("UPDATE store SET product_name = $1, product_discription = $2, product_type = $3, product_weight = $4, product_price = $5, package_quantity = $6, product_url = $7 where product_upc = $8 returning *",
         [req.body.product_name, req.body.product_discription, req.body.product_type, req.body.product_weight, req.body.product_price, req.body.package_quantity, req.body.product_url,  req.params.product_upc]);
        
       // console.log(req.params.id);
        //console.log(req.body);
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
app.delete("/delete/Store/byItem/:product_upc", async(req, res) =>{
    try{
        const result = await pool.query("DELETE FROM store where product_upc = $1", [req.params.product_upc]);
        res.status(204).json({
            status: "deleted",
        });
    }catch(err){
        console.log(err)
    }
});
//get items by description
app.get("/get/Store/item/product_discription", async (req, res) => {
    try{
        //const product = req.params;
        const result = await pool.query("SELECT DISTINCT product_discription FROM store");
        console.log(result);
        res.json(result.rows);
        /*res.status(200).json({
            status: 200,
            data:{
                store: result.rows,
            },        
        });*/
    }catch(err){
        console.log(err)
    }
});
app.get("/get/Store/upc/:product_upc", async (req, res) => {
    try {
        const { product_upc } = req.params;
        const allProduct = await pool.query("SELECT product_name, product_discription, product_type, product_weight, product_price FROM store where product_upc = $1", [product_upc]);
        res.json(allProduct.rows);
    } catch (err) {
        console.error(err.message);
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