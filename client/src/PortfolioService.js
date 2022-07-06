const baseURL = 'http://localhost:9000/api/stocks/'

export const getPortfolio = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postPortfolio = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deletePortfolio = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updatePortfolio = (booking) => {
    console.log(booking)
    return fetch(baseURL + booking._id, {
        method: 'PUT',
        body: JSON.stringify({ checkedIn: true }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())

}



export const dummyData = {
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "ibm",
        "3. Last Refreshed": "2022-07-01",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2022-07-01": {
            "1. open": "141.0000",
            "2. high": "141.6700",
            "3. low": "139.2600",
            "4. close": "141.1200",
            "5. volume": "4012106"
        },
        "2022-06-30": {
            "1. open": "139.5800",
            "2. high": "142.4600",
            "3. low": "139.2800",
            "4. close": "141.1900",
            "5. volume": "4878020"
        }
    }
}


