import React from "react";

import { Icon } from "antd";

export default class NotFound extends React.Component {
    render() {
        return (
            <div style={{ padding: "2%" }}>
                <p
                    style={{
                        color: "green",
                        fontSize: "20px",
                        paddingTop: "60px",
                        textAlign: "center"
                    }}
                >
                    <Icon type="meh-o" /> Error 404: Page Not Found.
                    <br /> <br />
                    <Icon type="tool" /> The coder is working ...{" "}
                    <Icon type="tool" />
                </p>
            </div>
        );
    }
}
