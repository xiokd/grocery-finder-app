import React, { useEffect } from "react";
import 
{ 
  Box, 
  IconButton, 
  TextField, 
  Typography 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../index.css";
//api to access index.js
import ItemsApi from "../apis/ItemsApi";
import ProductStoreGrid from "../components/ProductStoreGrid";

import NavBar from "../components/NavBar";

//below is help on getting start
const itemResponse = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ItemsApi.get("/");
        console.log(response);
      } catch (err) {}
    };
    fetchData();
  }, []);
};

function Products() {
  return (
    <div>
      <div>
        <NavBar />
        <div className="list-title-container">
          <Typography variant="h4">Store Grocery Products</Typography>
          <div className="list-title-search-section">
            <TextField
              label="Search Products"
              variant="outlined"
              size="small"
              sx={{ width: 300 }}
            />
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="list-grid-content">
          <ProductStoreGrid />
        </div>
      </div>
    </div>
  );
}

export default Products;
