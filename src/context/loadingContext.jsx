import { Children, createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isloading, setIsloading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isloading, setIsloading }}>
      {children}
    </LoadingContext.Provider>
  );
};
