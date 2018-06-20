import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";

import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

import Home from "./pages/home";
import NotFound from "./pages/not-found";

import Employees from "./pages/employees"

ReactDOM.render(
    <BrowserRouter>
        <div className="app">
            <div className="app-left">
                <Nav />
                <Footer />
            </div>

            <div className="app-right">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/employees" component={Employees} />

                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
