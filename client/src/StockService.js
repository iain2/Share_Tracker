const baseURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=HJLCHFKGONF4JPE9'


export const getStock = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

