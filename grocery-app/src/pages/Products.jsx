import React, { useEffect } from "react";
import "../index.css";
//api to access index.js
import ItemsApi from "../apis/ItemsApi";

import NavBar from "../components/NavBar";

//below is help on getting start
const itemResponse = () => {
  
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await ItemsApi.get("/");
        console.log(response);
  
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
        Products
      </div>
    </div>
  );
}

export default Products;