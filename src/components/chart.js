import React from "react";

import Axios from "axios";

import Echarts from "echarts/lib/echarts";

import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";

import "echarts/lib/component/title";
import "echarts/lib/component/grid";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

const series_data = [
    {
        name: "销售额",
        type: "bar",
        barWidth: "50%",
        data: [
            ["Jan", 60],
            ["Mar", 65],
            ["May", 66],
            ["Jul", 70],
            ["Sep", 65],
            ["Nov", 75]
        ]
    },
    {
        name: "利润",
        type: "line",
        data: [
            ["Jan", 18],
            ["Mar", 19],
            ["May", 21],
            ["Jul", 20],
            ["Sep", 18],
            ["Nov", 23]
        ]
    }
];

export default class ChartLine extends React.Component {
    componentDidMount() {
        const option = {
            title: {
                text: "月度销售数据汇总",
                left: "center",
                top: "2%"
            },
            // grid: {
            //     top: "15%",
            //     left: "5%",
            //     right: "5%"
            // },
            xAxis: {
                name: "Month",
                type: "category"
                // boundaryGap: false
            },
            yAxis: {
                name: "Million(RMB)",
                type: "value"
            },
            series: series_data,
            
            tooltip: {
                trigger: "axis"
            },
            legend: {
                left: "center",
                bottom: "bottom"
            }
        };

        this.echart = Echarts.init(this.refs.container);
        this.echart.setOption(option);

        setInterval(
            () =>
                Axios.post("getChartData", {
                    data: {
                        series: option.series
                    }
                }).then(res => {
                    option.series = res.data;
                    this.echart.setOption(option);
                }),
            3000
        );
    }

    render() {
        return <div ref="container" style={{ height: "380px" }} />;
    }
}
