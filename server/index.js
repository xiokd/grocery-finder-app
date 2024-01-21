const express = require('express');
const app = express();
const port_no = 5555
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes and SQL Queries

// GET Request: Return all the rows from the Products table
app.get("/product" , async (req,res) => {
    try {
        const allProduct = await pool.query("SELECT * FROM product");
        res.json(allProduct.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Basic GET request test 
app.get('/' , (req,res) => { 
    res.send('Test Request'); 
});
  
// Server Setup 
app.listen(port_no, () => { 
    console.log('Server is starting on port 5555'); 
});