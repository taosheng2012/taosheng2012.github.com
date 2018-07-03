import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./mock";

import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

import Home from "./pages/home";
import Employees from "./pages/employees";
import About from "./pages/about";
import NotFound from "./pages/not-found";

let isMobile = window.innerHeight > window.innerWidth ? true : false;

function styleApp() {
    const style_mobile = {};
    const style_pc = {
        display: "flex"
    };

    return isMobile ? style_mobile : style_pc;
}

function styleAppLeft() {
    const style_mobile = {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 11,

        backgroundColor: "white",

        height: "100vh",
        width: "200px",
        overflowY: "auto",
        borderRight: "1px solid lightgrey",

        display: "flex",
        flexDirection: "column"
    };

    const style_pc = {
        flex: 1,

        height: "100vh",
        minWidth: "150px",
        overflowY: "auto",
        borderRight: "1px solid lightgrey",

        display: "flex",
        flexDirection: "column"
    };

    return isMobile ? style_mobile : style_pc;
}

function styleAppRight() {
    const style_mobile = {};
    const style_pc = {
        flex: 3,

        height: "100vh",
        /*min-width: 300px,*/
        overflowY: "auto",

        display: "flex",
        flexDirection: "column"
    };

    return isMobile ? style_mobile : style_pc;
}

class AppLeft extends React.Component {
    render() {
        if (!this.props.show) return "";

        return isMobile ? (
            <div>
                <div id="app-left" style={styleAppLeft()}>
                    <Nav />
                    <Footer />
                </div>

                <div
                    onClick={this.props.handleClickEnd}
                    style={{
                        backgroundColor: "lightgrey",
                        opacity: "0.5",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 10
                    }}
                />
            </div>
        ) : (
            <div id="app-left" style={styleAppLeft()}>
                <Nav />
                <Footer />
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = { show: !isMobile };

        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickEnd = this.handleClickEnd.bind(this);

        window.addEventListener("resize", () => {
            isMobile = window.innerHeight > window.innerWidth ? true : false;
            this.setState({ show: !isMobile });
        });
    }

    handleClickStart() {
        this.setState({ show: true });
    }

    handleClickEnd() {
        this.setState({ show: false });
    }

    render() {
        return (
            <BrowserRouter>
                <div id="app" style={styleApp()}>
                    <AppLeft
                        handleClickEnd={this.handleClickEnd}
                        show={this.state.show}
                    />

                    <div id="app-right" style={styleAppRight()}>
                        <Header handleClickStart={this.handleClickStart} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/employees" component={Employees} />
                            <Route path="/about" component={About} />

                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
