import React from "react";
import { Menu, Dropdown, Icon } from "antd";

import "./header.css";

const menu = (
    <Menu>
        <Menu.Item>
            <a href="/user">My Profile</a>
        </Menu.Item>
        <Menu.Item>
            <a href="/setting">Settings</a>
        </Menu.Item>
        <Menu.Item>
            <a href="/login">Logout</a>
        </Menu.Item>
    </Menu>
);

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="header-text">Home</h1>

                <div className="header-user">
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
