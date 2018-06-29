import Mock from "mockjs";

Mock.mock("getTableData", {
    "dataSource|30-40": [
        {
            "key|+1": 0,
            name: "@name",
            age: "@integer(20,50)",
            "gender|1": ["Male", "Female"],
            "education|1": ["211", "985", "本科", "大专", "中专", "高中及以下"]
        }
    ]
});

Mock.mock("getChartData", options => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const body = JSON.parse(options.body);

    const data_sales = body.data.series[0].data;
    const data_profit = body.data.series[1].data;

    let i = months.indexOf(data_sales[data_sales.length - 1][0]);
    if (++i >= months.length) i = 0;
    data_sales.push([months[i], Math.ceil(Math.random() * (100 - 60) + 60)]);
    data_sales.shift();

    data_profit.push([
        months[i],
        Math.floor(
            data_sales[data_sales.length - 1][1] *
                (Math.random() * (50 - 20) + 20) /
                100
        )
    ]);

    data_profit.shift();

    return body.data.series;
});
