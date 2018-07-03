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
            ["Feb", 65],
            ["Mar", 66],
            ["Apr", 70],
            ["May", 65],
            ["Jun", 75]
        ]
    },
    {
        name: "利润",
        type: "line",
        data: [
            ["Jan", 18],
            ["Feb", 19],
            ["Mar", 21],
            ["Apr", 20],
            ["May", 18],
            ["Jun", 23]
        ]
    }
];

export default class ChartLine extends React.Component {
    componentDidMount() {
        this.option = {
            title: {
                text: "月度销售数据汇总",
                left: "center",
                top: "2%"
            },
            grid: {
                // top: "15%",
                left: "50",
                right: "70"
            },
            xAxis: {
                name: "Month",
                type: "category"
                // nameLocation: "center"
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
        this.echart.setOption(this.option);

        this.idInterval = setInterval(
            () =>
                Axios.post("getChartData", {
                    data: {
                        series: this.option.series
                    }
                }).then(res => {
                    this.option.series = res.data;
                    this.echart.setOption(this.option);
                }),
            3000
        );

        this.handleResize = () => {
            this.echart.dispose();

            this.echart = Echarts.init(this.refs.container);
            this.echart.setOption(this.option);
        };

        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        this.echart.dispose();

        clearInterval(this.idInterval);
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div
                ref="container"
                style={{
                    height: "380px",
                    border: "1px solid lightgrey",
                    marginTop: "20px"
                }}
            />
        );
    }
}
