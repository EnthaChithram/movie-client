import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CommentsContextProvider } from "./context/commentscontext";
import { Colorcontextprovider } from "./context/colorcontext";
import { ListContextProvider } from "./context/listcontext";
import { AuthContextProvider } from "./context/AuthContext";
import { LoadingContextProvider } from "./context/loadingContext";
import { Navcontextprovider } from "./context/navContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <CommentsContextProvider>
        <Colorcontextprovider>
          <ListContextProvider>
            <AuthContextProvider>
              <Navcontextprovider>
                <App />
              </Navcontextprovider>

            </AuthContextProvider>
          </ListContextProvider>
        </Colorcontextprovider>
      </CommentsContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
