import { createContext, useContext, useReducer } from "react";
import { initalState, reducer } from "./reducer";

export const Store = createContext({});
export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState);
    return <Store.Provider value={{ ...state, dispatch }}> {children}</Store.Provider>
}