import React from "react";
import { Icon, Divider } from "antd";

export default class About extends React.Component {
    render() {
        const data_style = {
            textAlign: "left",
            padding: "0 20px",
            minWidth: "170px"
        };

        return (
            <div
                style={{
                    color: "green",
                    fontSize: "20px",
                    padding: "60px 20px",
                    textAlign: "center"
                }}
            >
                <table style={{ margin: "0px auto" }}>
                    <thead>
                        <tr>
                            <th colspan="2" style={data_style}>
                                <Icon type="idcard" /> 和我联系
                                <Divider />
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style={data_style}>
                                <Icon type="user" /> Name
                            </td>
                            <td style={data_style}>余理涛</td>
                        </tr>

                        <tr>
                            <td style={data_style}>
                                <Icon type="man" /> Gender
                            </td>
                            <td style={data_style}>Man</td>
                        </tr>

                        <tr>
                            <td style={data_style}>
                                <Icon type="rocket" /> Age
                            </td>
                            <td style={data_style}>28</td>
                        </tr>

                        <tr>
                            <td style={data_style}>
                                <Icon type="shop" /> Education
                            </td>
                            <td style={data_style}>苏州大学</td>
                        </tr>

                        <tr>
                            <td style={data_style}>
                                <Icon type="message" /> Email
                            </td>
                            <td style={data_style}>yult123@qq.com</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <Divider />
                            </td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td style={data_style}>
                                <Icon type="flag" /> State
                            </td>
                            <td style={data_style}>
                                正在寻找一份<strong>Web前端</strong>工作，如有意向联系我哦
                                😄
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
