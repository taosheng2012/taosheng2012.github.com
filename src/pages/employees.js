import React from "react";

import { Table } from "antd";

import axios from "axios";

const index_title = [
    ["name", "Name"],
    ["gender", "Gender"],
    ["age", "Age"],
    ["education", "Education Background"]
];

const columns = [];
for (let i = 0; i < index_title.length; i++) {
    columns.push({
        dataIndex: index_title[i][0],
        title: index_title[i][1]
    });
}

export default class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    componentDidMount() {
        axios.get("getTableData").then(res => {
            this.setState({ dataSource: res.data.dataSource });
            console.log(res);
        });
    }

    render() {
        return (
            <div style={{ padding: "2%" }}>
                <Table
                    dataSource={this.state.dataSource}
                    columns={columns}
                    title={() => "职工信息系统"}
                    bordered={true}
                    rowSelection={{}}
                    size="small"
                />
            </div>
        );
    }
}
