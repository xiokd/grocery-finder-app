import React from "react";
import "../index.css";
import { Box, Avatar, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import placeholdermilk from "../images/placeholder/placeholdermilk.png";
import placeholdercoffee from "../images/placeholder/placeholdercoffee.png";
import placeholdercereal from "../images/placeholder/placeholdercereal.png";
import placeholderbread from "../images/placeholder/placeholderbread.png";

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

const rows = [
  {
    id: 1,
    productImage: placeholderbread,
    storeName: "Store 1",
    product: "Placeholder French Bread",
    price: 1.47,
  },
  {
    id: 2,
    productImage: placeholdermilk,
    storeName: "Store 1",
    product: "Placeholder Milk",
    price: 4.34,
  },
  {
    id: 3,
    productImage: placeholdercereal,
    storeName: "Store 2",
    product: "Placeholder Cereal",
    price: 3.27,
  },
  {
    id: 4,
    productImage: placeholdercoffee,
    storeName: "Store 3",
    product: "Placeholder Coffee",
    price: 16.9,
  },
];

function ProductGrid() {
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
}

export default ProductGrid;
