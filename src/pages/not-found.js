import React from "react";

import { Icon } from "antd";

import "./not-found.css";

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="not-found">
                <p>
                    <Icon type="meh-o" /> <br />
                    Error 404: Page Not Found.<br />
                    <br />
                    <Icon type="tool" /> The coder is working ...{" "}
                    <Icon type="tool" />
                </p>
            </div>
        );
    }
}
