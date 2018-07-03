import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <div
                id="footer"
                style={{
                    marginTop: "auto"
                }}
            >
                <p
                    id="footer-text"
                    style={{
                        fontSize: "12px",
                        textAlign: "center"
                    }}
                >
                    Minimalism Web <br />
                    Copyright © 2018 John Yu
                </p>
            </div>
        );
    }
}
