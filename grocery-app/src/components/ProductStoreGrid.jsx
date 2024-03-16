import React, {useEffect} from "react";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StoreAPI from "../apis/StoreAPI";
import { StoreContext } from "../context/StoreContext";
import "../index.css";

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
            const response = await StoreAPI.get("/");
            console.log(response);
          }
          catch(error)
          {
            console.log(error);
          }
        })
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
            {/* {store && store.map(store => {
              return(
                <tr key = {store.id}>
                  <td>{store.productImage}</td>
                  <td>{store.product}</td>
                  <td>{store.storeName}</td>
                  <td>{store.price}</td>
                  <td><button onClick={() => handleAdd(store.id)} classname="btn btn-primary">Add Product</button></td>
                </tr>
              )
            })} */}
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
  

  