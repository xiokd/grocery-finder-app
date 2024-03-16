import React from "react";
import "../index.css";
import { Box, Avatar, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Temporary: Imports for placeholder images
import placeholdermilk from "../images/placeholder/placeholdermilk.png";
import placeholdercoffee from "../images/placeholder/placeholdercoffee.png";
import placeholdercereal from "../images/placeholder/placeholdercereal.png";
import placeholderbread from "../images/placeholder/placeholderbread.png";

// Sets Column values and labels for the Data Grid component 
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "productImage",
    headerName: "Image",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 90,
    renderCell: (params) => <Avatar src={params.value} />,
  },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    editable: true,
  },
  {
    field: "storeName",
    headerName: "Store",
    width: 200,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 150,
    editable: true,
  },
];

// Temporary: Placeholder data that currently occupies the data grid
const rows = [
  {
    id: 1,
    productImage: placeholderbread,
    storeName: "Store 1",
    product: "Placeholder French Bread",
    price: 1.47,
  }
];

/*
Tasks:
- The Data Grid component will display: ID, Product Image, Product Name, Store Name, and Price as column values.
- The Search Bar input should be able to search for products that appear in the Data Grid.
- List items can be selected with the checkbox selection.
    - Selected items can be deleted using the "Delete" button that appears on the bottom of the view.
    - It is possible to make Button component disabled. If this is the case, upon selection it should be enabled.
- Current static placeholder data will be replaced with data that appears in the database.
*/

/*function ProductStoreGrid() {
  return (
    <Box sx={{ height: 400, width: "99%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <div className="list-button-section">
        <Button variant="contained">Delete</Button>
      </div>
    </Box>
  );
}*/


const ProductStoreGrid = (props) =>
{
  const {products, setProducts} = useContext(ProductsContext);
}

export default ProductStoreGrid;