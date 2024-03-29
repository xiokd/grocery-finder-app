import React, {useState, createContext} from "react";

export const StoreContext = createContext;

//wrapper for application so there is access to the state
export const storeContextProvider = props => {
    const [store, setStore] =useState([])


    return(
                            //store: item
      <StoreContext value = {{store: setStore}}> 
        {props.children}
      </StoreContext>  
    )
}