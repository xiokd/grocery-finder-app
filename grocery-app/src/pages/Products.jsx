import React, { useEffect } from "react";
import "../index.css";
//api to access index.js
import ItemsApi from "../apis/ItemsApi";
import ProductStoreGrid from "../components/ProductStoreGrid";
import FetchData from "../../FetchData";

import NavBar from "../components/NavBar";

//below is help on getting start

const itemResponse = () => {
  
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await ItemsApi.get("http://localhost:5555/groceryApp/store/item/product");
        return response;
  
      }catch (err){}
    };
    fetchData();
  }, []);

}

function Products() {
  return (
    <div>
      <div>
        <NavBar/>
        <FetchData/>
      </div>
    </div>
  );
}

export default Products;