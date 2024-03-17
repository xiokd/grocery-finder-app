import React, {useState, createContext} from "react";

export const StoreContext = createContext();

//wrapper for application so there is access to the state
export const StoreContextProvider = (props) => {
    const [store, setStore] = useState([]);


    return(
      <StoreContext.Provider value = {{store, setStore}}> 
        {props.children}
      </StoreContext.Provider>  
    );
};