import React, { useEffect } from "react";
import "../index.css";
//api to access index.js
import ItemsApi from "../apis/ItemsApi";
import ProductStoreGrid from "../components/ProductStoreGrid";

import NavBar from "../components/NavBar";
import { StoreContext } from "../context/StoreContext";
//import 'bootstrap/dist/css/bootstrap.min.css'

//below is help on getting start

/*const itemResponse = (props) => {
  const{stores, setStores} = useContext(StoreContext)
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await ItemsApi.get("http://localhost:5555/groceryApp/store/item/product");
        Console.log(response);
        setStores(response.data.storesArray)
  
      }catch (err){}
    };
    fetchData();
  }, []);
}*/

function Products() {
  return (
    <div>
      <div>
        <NavBar/>
        <ProductStoreGrid/>
      </div>
    </div>
  );
}

export default Products;