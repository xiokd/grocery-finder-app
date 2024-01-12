const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// SQL Queries

app.listen(5000, () => {
    console.log("Server is starting on port 5000");
});