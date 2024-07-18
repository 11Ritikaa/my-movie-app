import { useState, createContext, Children } from "react";

export const Context = createContext();


const UserProvider = ({ children })=> {
    const [state, setState] = useState(undefined);
    return (
        <Context.Provider value={[state, setState]} >
        </Context.Provider>
    );
}

export default UserProvider;