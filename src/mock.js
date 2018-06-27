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
    const body = JSON.parse(options.body);

    const data_sales = body.data.series[0].data.shift();
    data_sales[1] = Math.ceil(Math.random() * (100 - 60) + 60);
    body.data.series[0].data.push(data_sales);

    const data_interest = body.data.series[1].data.shift();
    data_interest[1] = Math.floor(
        data_sales[1] * Math.round(Math.random() * (50 - 20) + 20) / 100
    );
    body.data.series[1].data.push(data_interest);

    return body.data.series;

    // "date|+1": ["Jan", "Mar", "May", "Jul","Sep","Nov"],

    // sales(){

    //     [
    //     ["Jan", "@integer(10,100)"],
    //     ["Jan", "@integer(10,100)"],
    //     ["Jan", "@integer(10,100)"],
    //     ["Jan", "@integer(10,100)"],
    //     ["Jan", "@integer(10,100)"],
    //     ["Jan", "@integer(10,100)"],

    // ]
    // }

    // ,
    // interest: {

    // }
});
