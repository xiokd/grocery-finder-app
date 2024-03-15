import React from "react";
import "../index.css";
import 
{ 
  Box, 
  IconButton, 
  TextField, 
  Autocomplete,
  Typography 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import NavBar from "../components/NavBar";
import ProductGrid from "../components/ProductGrid";


// TextField will need to be replaced with Autocomplete component from MUI
const items  = [{label: "Search Products"},
                {label: "Placeholder French Bread"},
                {label: "Placeholder Milk"},
                {label: "Placeholder Cereal"},
                {label: "PlaceHolder Coffee"}];
/*const[itemSelect, setItems] = useState(rows);
const[selectedItems, setSelectedItems] = useState([]);
const handleCheckbox = (itemId) => {
  setSelectedItems(prevSelected => {
    if(prevSelected.includes(itemId)){
      return prevSelected.filter(id => id !==itemId);
    }else{
      return[...prevSelected,itemId];
    }
  });
};
const deleteItem = () => {
  setItems(prevItems => prevItems.filter(item => !selectedItems.includes(item.id)));
  setSelectedItems([]);
};*/

function List() {
  return (
    <div>
      <NavBar />
      <div className="list-title-container">
        <Typography variant="h4">Product List</Typography>
        <div className="list-title-search-section">
          <Autocomplete
            //label="Search Products"
            variant="outlined"
            size="small"
            options={items}
            sx={{ width: 300 }}
            renderInput ={(params) => <TextField {...params} label= "Search Products"/>}
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
