import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./mock";

import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

import Home from "./pages/home";
import Employees from "./pages/employees";
import About from "./pages/about"
import NotFound from "./pages/not-found";

ReactDOM.render(
    <BrowserRouter>
        <div id="app" style={{ display: "flex" }}>
            <div
                id="app-left"
                style={{
                    flex: 1,

                    height: "100vh",
                    minWidth: "150px",
                    overflowY: "auto",
                    borderRight: "1px solid lightgrey",

                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Nav />
                <Footer />
            </div>

            <div
                id="app-right"
                style={{
                    flex: 3,

                    height: "100vh",
                    /*min-width: 300px,*/
                    overflowY: "auto",

                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Route component={Header} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/employees" component={Employees} />
                    <Route path="/about" component={About} />

                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
