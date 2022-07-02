const baseURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=IOETLV12N9IIMNFD'


export const getStock = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

