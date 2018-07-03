import React from "react";
import { Link } from "react-router-dom";

import { Menu, Dropdown, Icon, Button } from "antd";

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/user">My Profile</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/setting">Settings</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/logout">Logout</Link>
        </Menu.Item>
    </Menu>
);

export default class Header extends React.Component {
    render() {
        const isMobile = window.innerHeight > window.innerWidth ? true : false;

        let text =
            window.location.pathname.slice(1, 2).toUpperCase() +
            window.location.pathname.slice(2);
        text = text ? text : "Home";

        return (
            <div
                style={{
                    height: "40px",
                    backgroundColor: "#ecf6fd"
                }}
            >
                {isMobile ? (
                    <Button
                        onClick={this.props.handleClickStart}
                        style={{
                            backgroundColor: "#ecf6fd",
                            // border: "none",
                            display: "block",
                            float: "left",
                            marginTop: "3px",
                            marginLeft: "2%",
                            marginRight: "30px",
                            width: "60px",
                            height: "34px"
                        }}
                    >
                        <Icon
                            type="menu-unfold"
                            style={{ backgroundColor: "dark" }}
                        />
                    </Button>
                ) : (
                    ""
                )}

                <span
                    id="header-text"
                    style={{
                        fontSize: "18px",
                        lineHeight: "40px",
                        margin: "0px 0px 0px 10px",
                        float: "left"
                    }}
                >
                    {text}
                </span>

                <div
                    id="header-user"
                    style={{
                        fontSize: "15px",
                        lineHeight: "40px",
                        marginRight: "10px",
                        float: "right"
                    }}
                >
                    <Dropdown overlay={menu} placement="bottomRight">
                        <a>
                            <Icon type="user" />
                            {" John "}
                            <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
