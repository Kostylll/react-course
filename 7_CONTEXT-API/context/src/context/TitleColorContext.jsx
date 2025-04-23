import { useReducer } from "react";
import { createContext, useState } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state,action) => {

};

export const TitleColorContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});

  return (
    <TitleColorContext.Provider value={{...state}}>
      {children}
    </TitleColorContext.Provider>
  );
};
