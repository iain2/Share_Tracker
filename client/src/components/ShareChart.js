import React, {components, useState, useEffect} from "react";
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const ShareChart = () => {

    var processedData = [];
    const [stockDaily, setStockDaily] = useState([]);

    useEffect(() => {
        getDailyStock();
    }, [])
    
  
  const getDailyStock = () => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=ROEFSFBMG6PZ2WKR`)
      .then(res => res.json())
      .then(data => {
        setStockDaily(data);
        for (var key in data['Time Series (Daily)']) {
            processedData.push({
                x: new Date(key).getTime(),
                open: parseFloat(data['Time Series (Daily)'][key]['1. open']),
                high: parseFloat(data['Time Series (Daily)'][key]['2. high']),
                low: parseFloat(data['Time Series (Daily)'][key]['3. low']),
                close: parseFloat(data['Time Series (Daily)'][key]['4. close'])
            });
            
        }
        console.log(processedData);
    })
 
  }

  Highcharts.stockChart('container', {
    series: [{
      type: 'ohlc',
      data: processedData.reverse()
    }]
  });

  return (
    <div>
        {/* <HighchartsReact highcharts={Highcharts}/> */}
    </div>
    
  )
  
}


// Highcharts.stockChart('container', {


//     title: {
//       text: 'AAPL stock price by minute'
//     },

//     subtitle: {
//       text: 'Using ordinal X axis'
//     },

//     xAxis: {
//       gapGridLineWidth: 0
//     },

//     rangeSelector: {
//       buttons: [{
//         type: 'hour',
//         count: 1,
//         text: '1h'
//       }, {
//         type: 'day',
//         count: 1,
//         text: '1D'
//       }, {
//         type: 'all',
//         count: 1,
//         text: 'All'
//       }],
//       selected: 1,
//       inputEnabled: false
//     },

//     series: [{
//       name: 'AAPL',
//       type: 'area',
//       data: processedData,
//       gapSize: 5,
//       tooltip: {
//         valueDecimals: 2
//       },
//       fillColor: {
//         linearGradient: {
//           x1: 0,
//           y1: 0,
//           x2: 0,
//           y2: 1
//         },
//         stops: [
//           [0, Highcharts.getOptions().colors[0]],
//           [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//         ]
//       },
//       threshold: null
//     }]
//   });

//     return (
//             <>

//                 <p>ShareChart</p>

//             </>
//         );
//     };


export default ShareChart;