import React from "react";

import { Table } from "antd";

import "./employees.css";

const record_columns = [
    ["Name", "name"],
    ["Gender", "gender"],
    ["Age", "age"],
    ["Education Background", "education"]
];

const columns = [];
for (let i = 0; i < record_columns.length; i++) {
    columns.push({
        title: record_columns[i][0],
        dataIndex: record_columns[i][1]
    });
}

const dataSource = [];
for (let i = 0; i < 30; i++) {
    dataSource.push({
        key: i,
        name: `name-${i}`,
        age: i,
        gender: "Male",
        education: `University-${i}`
    });
}

export default class Employees extends React.Component {
    render() {
        return (
            <div className="employees">
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    title={()=>"职工信息系统"}
                    bordered={true}
                    rowSelection={{}}
                    size="small"
                />
            </div>
        );
    }
}
