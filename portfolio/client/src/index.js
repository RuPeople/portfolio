import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import PortfolioStore from "./portfolio/PortfolioStore";
import UserStore from "./portfolio/UserStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Context.Provider value={{
        work: new PortfolioStore(),
        user: new UserStore(),
    }}>
        <App/>
    </Context.Provider>
);

