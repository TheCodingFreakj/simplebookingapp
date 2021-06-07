import React from "react";

const store = React.createContext();
export const useStore = () => React.useContext(store);
export const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);
  return (
    <store.Provider value={[globalState, dispatch]}>{children}</store.Provider>
  );
};
