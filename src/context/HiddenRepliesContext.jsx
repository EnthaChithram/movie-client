import { createContext, useState } from "react";

export const HiddenRepliesContext = createContext()

export const HiddenRepliesContextProvider = ({ children }) => {
    const [HiddenReplies, setHiddenReplies] = useState([]);
    return (
        <HiddenRepliesContext.Provider value={{ HiddenReplies, setHiddenReplies }}>
            {children}
        </HiddenRepliesContext.Provider>
    )
}