import React from "react";
import "../index.css";
import 
{ 
  Box, 
  IconButton, 
  TextField, 
  Typography 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import NavBar from "../components/NavBar";
import ProductGrid from "../components/ProductGrid";


// TextField will need to be replaced with Autocomplete component from MUI
function List() {
  return (
    <div>
      <NavBar />
      <div className="list-title-container">
        <Typography variant="h4">Product List</Typography>
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
        <ProductGrid />
      </div>
    </div>
  );
}

export default List;
