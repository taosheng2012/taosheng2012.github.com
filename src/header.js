import React from "react";
import { Link } from "react-router-dom";

import { Menu, Dropdown, Icon } from "antd";

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
        return (
            <div
                style={{
                    height: "40px",
                    backgroundColor: "#ecf6fd"
                }}
            >
                <span
                    id="header-text"
                    style={{
                        fontSize: "18px",
                        lineHeight: "40px",
                        margin: "0px 0px 0px 10px",
                        float: "left"
                    }}
                >
                    {this.props.location.pathname.slice(1, 2).toUpperCase() +
                        this.props.location.pathname.slice(2)}
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
