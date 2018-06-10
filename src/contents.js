import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./contents.css";

import Home from "./contents/home";
import NotFound from "./contents/not-found";

export default class Contents extends React.Component {
    render() {
        return (
            <div className="contents">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />

                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
