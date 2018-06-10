import React from "react";

import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

import "./home.css";

const style_card = {
    backgroundColor: "#ecf6fd"
};

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Card title="Web前端框架流行指数">
                    <Row gutter="16">
                        <Col span="6">
                            <Card
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                React.js : + + + + +
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                Vue.js : + + +
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                Angular.js : + +
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card
                                bordered={false}
                                hoverable="true"
                                bodyStyle={style_card}
                            >
                                jQuery : + +
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}
