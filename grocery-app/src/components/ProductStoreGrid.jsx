import React, { useEffect, useContext } from "react";
import ItemsAPI from "../apis/ItemsApi";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from 'react-router-dom';
//import "../index.css";

const ProductStoreGrid = (props) =>
  {
    const {store, setStore} = useContext(StoreContext);
    let navigate = useNavigate();
    useEffect(() => 
    {
      const fetchData = () =>
      {
        (async () =>
        {
          try
          {
            const response = await ItemsAPI.get("/");
            setStore(response.data.data.store);
          }
          catch(error)
          {
            console.error(error);
          }
        })();
      }
      fetchData();
    },[]);
  
    const handleAdd = (id) =>
    {
      
    }
    
    //Just going to use bootstrap for this part
    return(
      <div className="list-group">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="bg-primary">
              <th scope='col'>ID</th>
              <th scope='col'>Picture</th>
              <th scope='col'>Product</th>
              <th scope='col'>Store</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            {store && store.map && store.map(store => {
              return(
                <tr key = {store.product_upc}>
                  <td>{store.product_url}</td>
                  <td>{store.product_name}</td>
                  <td>{store.store_name}</td>
                  <td>{store.product_price}</td>
                  <td><button onClick={() => handleAdd(store.product_upc)} classname="btn btn-primary">Add Product</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default ProductStoreGrid;

// Sets Column values and labels for the Data Grid component 
/*
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
  

  