import React from "react";

import Axios from "axios"

import Echarts from "echarts/lib/echarts";

import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";

import "echarts/lib/component/title";
import "echarts/lib/component/grid";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

const series_data = [
    {
        name: "销售额/百万",
        type: "bar",
        barWidth: "50%",
        data: [
            ["Jan", 20],
            ["Feb", 10],
            ["Mar", 20],
            ["Apr", 40],
            ["May", 30],
            ["Jun", 50],
            ["Jul", 60]
        ]
    },
    {
        name: "利润/百万",
        type: "line",
        // barWidth: "50%",
        data: [
            ["Jan", 15],
            ["Feb", 8],
            ["Mar", 12],
            ["Apr", 22],
            ["May", 18],
            ["Jun", 32],
            ["Jul", 44]
        ]
    }
];

export default class ChartLine extends React.Component {
    componentDidMount() {
        const option = {
            title: {
                text: "月度销售数据汇总（2018年）",
                left: "center",
                top: "2%"
            },
            // grid: {
            //     top: "15%",
            //     left: "5%",
            //     right: "5%"
            // },
            xAxis: {
                type: "category"
                // boundaryGap: false
            },
            yAxis: {
                type: "value"
            },
            series: series_data,

            tooltip: {
                trigger: "axis"
            },
            legend: {
                // data: ["意向", "成交"],
                left: "center",
                bottom: "bottom"
            }
        };
        
        this.echart = Echarts.init(this.refs.container);
        this.echart.setOption(option);
        
        setInterval(()=>{Axios.get("getChartData").then((res)=>)},1000)
    }

    render() {
        return (
            <div ref="container" style={{ width: "100%", height: "380px" }} />
        );
    }
}
