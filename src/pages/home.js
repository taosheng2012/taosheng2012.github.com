import React from "react";

import { Card, Rate, Row, Col } from "antd";
import "antd/dist/antd.css";

import Chart from "../components/chart.js";

import "./home.css";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Card title="竞品影响力指数">
                    <div style={{ display: "flex" ,flexWrap: "wrap"}}>
                        {[
                            ["React.js", 5],
                            ["Vue.js", 4],
                            ["Angular.js", 3],
                            ["jQuery", 3]
                        ].map((item, index) => (
                            <Card
                                title={item[0]}
                                bordered={false}
                                hoverable={true}
                                bodyStyle={{
                                    backgroundColor: "#ecf6fd"
                                }}
                                style={{
                                    width: "200px",
                                    margin: "0px 10px",
                                }}
                            >
                                <Rate value={item[1]} />
                            </Card>
                        ))}
                    </div>
                </Card>

                <Chart />
            </div>
        );
    }
}
