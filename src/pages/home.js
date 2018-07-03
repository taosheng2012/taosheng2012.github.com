import React from "react";

import { Card, Rate } from "antd";
import "antd/dist/antd.css";

import Chart from "../components/chart.js";

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ padding: "2%" }}>
                <Card title="前端框架影响力指数" >
                    <div style={{ display: "flex", flexWrap: "wrap" ,justifyContent: "space-evenly"}}>
                        {[
                            ["React.js", 5],
                            ["Vue.js", 4],
                            ["Angular.js", 3],
                            ["jQuery", 3]
                        ].map((item, index) => (
                            <Card
                                key={index}
                                title={item[0]}
                                // bordered={false}
                                hoverable={true}
                                bodyStyle={{
                                    backgroundColor: "#ecf6fd"
                                }}
                                style={{
                                    margin: "10px 10px"
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
