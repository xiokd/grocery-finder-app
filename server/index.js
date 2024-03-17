const express = require('express');
const app = express();
const port_no = 5555;
const cors = require('cors');
const pool = require('./db');
//this is a test comment for matt
//use npm run running to start this file

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// SQL Queries

//get all items
app.get("/groceryApp/store/item/product", async (req, res) => { // http://localhost:5555/groceryApp/store/item/product
    try{
         const result = await pool.query("SELECT * FROM store");//SELECT product_name, product_discription, product_type, product_weight, product_price, package_quantity, product_upc, product_url from store;");
         console.log("Get all items results", result);
         res.status(200).json({
             status: 200,
             //store: "store1",
             //results: result.row.length,
             data: {
                 store: result.rows,
             },
         });
     }catch (err){
         console.error("product get error", err)
         }
 });
 app.get("/groceryApp/store/item/product/:product_description")
 {
    try
    {
        
    }
    catch(error)
    {
        console.error("Item by product description search error:", error);
    }
 }
//below are two options to get product type vs upc depends on handling requests comment one out for the proper result
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
//get item by upc 
app.get("/groceryApp/store/item/product/:product_upc", async (req, res) => {
    try {
        const { product_upc } = req.params;
        const allProduct = await pool.query("SELECT product_name, product_discription, product_type, product_weight, product_price FROM store where product_upc = $1", [product_upc]);
        res.json(allProduct.rows);
    } catch (err) {
        console.error(err.message);
    }
});
//delete entry by upc
app.delete("/groceryApp/store/item/product/:product_upc", async(req, res) =>{
    try{
        const {product_upc} = req.params;
        const result = await pool.query("DELETE FROM store where address = $1", [product_upc]);
        res.status(204).json({
            status: "deleted",
        });
    }catch(err){
        console.log(err)
    }
});
// Simple GET request test using root '/' as a route
app.get('/' , (req,res) => { 
    res.send('Test Request: Success!'); 
});
app.listen(5555, () => {
    console.log("Index Server is starting on port 5555 successful");
});