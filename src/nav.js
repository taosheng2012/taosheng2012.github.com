import React from "react";
import { Link } from "react-router-dom";

import { Menu, Icon } from "antd";

const { SubMenu, Item } = Menu;

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <img
                    src={require("./imgs/logo.svg")}
                    width="100"
                    height="100"
                    alt="LOGO"
                    style={{ display: "block", margin: "3px auto" }}
                />

                <Menu style={{borderRight: "none"}}>
                    <Item>
                        <Link to="/home">
                            <Icon type="home" />Home
                        </Link>
                    </Item>

                    <SubMenu
                        title={
                            <span>
                                <Icon type="line-chart" />Products
                            </span>
                        }
                    >
                        <Item>
                            <Link to="/products/ios">
                                <Icon type="apple" />iOS
                            </Link>
                        </Item>

                        <Item>
                            <Link to="/products/android">
                                <Icon type="android" />Android
                            </Link>
                        </Item>

                        <Item>
                            <Link to="/products/web">
                                <Icon type="chrome" />Web
                            </Link>
                        </Item>
                    </SubMenu>

                    <Item>
                        <Link to="/employees">
                            <Icon type="user" />Employees
                        </Link>
                    </Item>

                    <Item>
                        <Link to="/settings">
                            <Icon type="setting" />Settings
                        </Link>
                    </Item>

                    <Item>
                        <Link to="/about">
                            <Icon type="coffee" />About
                        </Link>
                    </Item>
                </Menu>
            </nav>
        );
    }
}
