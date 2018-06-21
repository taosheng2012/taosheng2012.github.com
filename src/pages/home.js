import React from "react";

import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

import Mock from "mockjs"
import $ from "jquery"

import "./home.css";

import Chart from "../components/chart.js";

Mock.mock("getJSON",{
    name: "hello",
    "gender|1": ["Male", "Female"],
    age: "@integer(22,35)",
    email: "@email"

})

$.ajax({url: "getJSON"}).done((res)=>console.log(res))

const style_card = {
    backgroundColor: "#ecf6fd"
};

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Card title="竞品影响力指数">
                    <Row gutter={16}>
                        <Col span="6">
                            <Card
                                title="React.js"
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                <span style={{ color: "red" }}>☆ ☆ ☆ ☆ ☆</span>
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card
                                title="Vue.js"
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                <span style={{ color: "red" }}>☆ ☆ ☆ ☆</span> ☆
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card
                                title="Angular.js"
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                <span style={{ color: "red" }}>☆ ☆ ☆</span> ☆ ☆
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card
                                title="jQuery"
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                <span style={{ color: "red" }}>☆ ☆ ☆</span> ☆ ☆
                            </Card>
                        </Col>
                    </Row>
                </Card>

                <Chart />
            </div>
        );
    }
}
