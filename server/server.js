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
app.get("/groceryApp/store/item", async (req, res) => { // http://localhost:5555/getStore
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
//get a stores by name (Safeway or Yokes)
app.get("/groceryApp/store/item/:store_name", async (req, res) => { //http://localhost:5555/
    try{
        const {store_name} = req.params;
        const result = await pool.query("SELECT zip, city, address, store_name FROM store WHERE store_name = $1", [store_name]);
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
app.post("/groceryApp/store/item", async (req, res) => {
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
//update a store and item
app.put("/groceryApp/store/item/:product_upc", async (req, res) =>{
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
app.delete("/groceryApp/store/item/:address", async(req, res) =>{
    try{
        const {address} = req.params;
        const result = await pool.query("DELETE FROM store where address = $1", [address]);
        res.status(204).json({
            status: "deleted",
        });
    }catch(err){
        console.log(err)
    }
});
//get items by product_type
app.get("/groceryApp/store/item/product/:product_type", async (req, res) => {
    try{
        const {product_type} = req.params;
        const result = await pool.query("SELECT product_discription, product_weight, product_price, package_quantity, product_upc, product_url FROM store WHERE product_type = $1", [product_type]);
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
app.get("/groceryApp/store/item/:product_upc", async (req, res) => {
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