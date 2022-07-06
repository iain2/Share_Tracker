import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const ChartItem = ({ stock }) => {

    let options;

    const stockDaily = stock["Time Series (Daily)"];
    const stockName = stock["Meta Data"]["2. Symbol"];

    if (stockDaily) {

        var data = []

        for (i in stockDaily) {
            stockDaily[i]["0. date"] = (new Date(i).getTime())
        };

        for (var i in stockDaily)
            data.push(stockDaily[i]);

        var ohlc = [];
        var dataLength = data.length;
        var i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i]['0. date'],
                parseFloat(data[i]["4. close"])
            ]);

            ohlc.sort(function (a, b) { return a[0] - b[0] });
        }

        options = {
            rangeSelector: {
                selected: 1
            },

            title: {
                text: `${stockName} Stock Price`
            },

            series: [{
                name: stockName,
                data: ohlc,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        };
    }


    return (
        <div className="chart-item">
            <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options}
            />
        </div>
    )
}

export default ChartItem;