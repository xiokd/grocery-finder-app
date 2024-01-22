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
app.get("/product" , async (req,res) => {
    try {
        const allProduct = await pool.query("SELECT * FROM product");
        res.json(allProduct.rows);
    } catch (err) {
        console.error(err.message);
    }
});

/*
End of Routes and Requests
*/

// Simple GET request test using root '/' as a route
app.get('/' , (req,res) => { 
    res.send('Test Request: Success!'); 
});
  
// Server Setup 
app.listen(port_no, () => { 
    console.log('Server is starting on port 5555'); 
});