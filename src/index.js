import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Nav from "./nav";
import Contents from "./contents";
import Header from "./header";
import Footer from "./footer";

ReactDOM.render(
    <BrowserRouter>
        <div className="app">
            <div className="app-left">
                <Nav />
                <Footer />
            </div>

            <div className="app-right">
                <Header />
                <Contents />
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
