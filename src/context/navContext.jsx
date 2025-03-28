import { createContext, useState } from "react";

export const NavContext = createContext([]);

export const Navcontextprovider = ({ children }) => {
    const [thh, setThh] = useState(null)




    return (
        <NavContext.Provider value={{ thh, setThh }}>
            {children}
        </NavContext.Provider>
    )
}