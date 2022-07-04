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
        "1. Information": "Intraday (5min) open, high, low, close prices and volume",
        "2. Symbol": "aapl",
        "3. Last Refreshed": "2022-07-01 20:00:00",
        "4. Interval": "5min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
    },
    "Time Series (5min)": {
        "2022-07-01 20:00:00": {
            "1. open": "139.0200",
            "2. high": "139.0300",
            "3. low": "139.0000",
            "4. close": "139.0200",
            "5. volume": "4341"
        },
        "2022-07-01 19:55:00": {
            "1. open": "139.0200",
            "2. high": "139.0200",
            "3. low": "139.0200",
            "4. close": "139.0200",
            "5. volume": "310"
        },
        "2022-07-01 19:50:00": {
            "1. open": "138.9600",
            "2. high": "139.0000",
            "3. low": "138.9600",
            "4. close": "139.0000",
            "5. volume": "4361"
        },
        "2022-07-01 19:45:00": {
            "1. open": "138.9400",
            "2. high": "138.9600",
            "3. low": "138.9400",
            "4. close": "138.9600",
            "5. volume": "400"
        },
        "2022-07-01 19:40:00": {
            "1. open": "138.9600",
            "2. high": "138.9600",
            "3. low": "138.9600",
            "4. close": "138.9600",
            "5. volume": "102"
        },
        "2022-07-01 19:35:00": {
            "1. open": "138.9400",
            "2. high": "138.9600",
            "3. low": "138.9400",
            "4. close": "138.9500",
            "5. volume": "511"
        },
        "2022-07-01 19:30:00": {
            "1. open": "138.9500",
            "2. high": "138.9500",
            "3. low": "138.9500",
            "4. close": "138.9500",
            "5. volume": "394"
        },
        "2022-07-01 19:25:00": {
            "1. open": "138.9500",
            "2. high": "138.9699",
            "3. low": "138.9500",
            "4. close": "138.9600",
            "5. volume": "726"
        },
        "2022-07-01 19:20:00": {
            "1. open": "138.9300",
            "2. high": "138.9700",
            "3. low": "138.9300",
            "4. close": "138.9400",
            "5. volume": "750"
        },
        "2022-07-01 19:15:00": {
            "1. open": "138.9600",
            "2. high": "138.9600",
            "3. low": "138.9600",
            "4. close": "138.9600",
            "5. volume": "542"
        },
        "2022-07-01 19:10:00": {
            "1. open": "138.9600",
            "2. high": "138.9800",
            "3. low": "138.9300",
            "4. close": "138.9800",
            "5. volume": "1935"
        },
        "2022-07-01 19:05:00": {
            "1. open": "138.9600",
            "2. high": "138.9600",
            "3. low": "138.9300",
            "4. close": "138.9300",
            "5. volume": "924"
        },
        "2022-07-01 19:00:00": {
            "1. open": "138.9200",
            "2. high": "138.9600",
            "3. low": "138.9200",
            "4. close": "138.9600",
            "5. volume": "4089"
        },
        "2022-07-01 18:55:00": {
            "1. open": "138.9400",
            "2. high": "138.9600",
            "3. low": "138.9400",
            "4. close": "138.9500",
            "5. volume": "2244"
        },
        "2022-07-01 18:50:00": {
            "1. open": "138.9500",
            "2. high": "138.9800",
            "3. low": "138.9500",
            "4. close": "138.9800",
            "5. volume": "1832"
        },
        "2022-07-01 18:45:00": {
            "1. open": "138.9500",
            "2. high": "138.9800",
            "3. low": "138.9500",
            "4. close": "138.9600",
            "5. volume": "2085"
        },
        "2022-07-01 18:40:00": {
            "1. open": "138.9700",
            "2. high": "138.9700",
            "3. low": "138.9600",
            "4. close": "138.9600",
            "5. volume": "1352"
        },
        "2022-07-01 18:35:00": {
            "1. open": "138.9900",
            "2. high": "139.0200",
            "3. low": "138.9700",
            "4. close": "138.9700",
            "5. volume": "3012"
        },
        "2022-07-01 18:30:00": {
            "1. open": "139.0000",
            "2. high": "139.0000",
            "3. low": "138.9500",
            "4. close": "138.9500",
            "5. volume": "733"
        },
        "2022-07-01 18:25:00": {
            "1. open": "138.9400",
            "2. high": "139.0000",
            "3. low": "138.9200",
            "4. close": "139.0000",
            "5. volume": "6121"
        },
        "2022-07-01 18:20:00": {
            "1. open": "138.9500",
            "2. high": "138.9500",
            "3. low": "138.9200",
            "4. close": "138.9300",
            "5. volume": "2576"
        },
        "2022-07-01 18:15:00": {
            "1. open": "138.9700",
            "2. high": "138.9700",
            "3. low": "138.9500",
            "4. close": "138.9500",
            "5. volume": "7408"
        },
        "2022-07-01 18:10:00": {
            "1. open": "138.9300",
            "2. high": "138.9400",
            "3. low": "138.9300",
            "4. close": "138.9400",
            "5. volume": "554"
        },
        "2022-07-01 18:05:00": {
            "1. open": "138.9700",
            "2. high": "138.9700",
            "3. low": "138.9400",
            "4. close": "138.9400",
            "5. volume": "1220"
        },
        "2022-07-01 18:00:00": {
            "1. open": "138.9800",
            "2. high": "138.9800",
            "3. low": "138.9600",
            "4. close": "138.9700",
            "5. volume": "5919"
        },
        "2022-07-01 17:55:00": {
            "1. open": "138.9900",
            "2. high": "138.9900",
            "3. low": "138.9800",
            "4. close": "138.9800",
            "5. volume": "1284"
        },
        "2022-07-01 17:50:00": {
            "1. open": "138.9975",
            "2. high": "139.0399",
            "3. low": "138.9900",
            "4. close": "139.0000",
            "5. volume": "2052"
        },
        "2022-07-01 17:45:00": {
            "1. open": "138.9699",
            "2. high": "139.0400",
            "3. low": "138.9626",
            "4. close": "138.9778",
            "5. volume": "2957"
        },
        "2022-07-01 17:40:00": {
            "1. open": "139.0500",
            "2. high": "139.0500",
            "3. low": "138.9410",
            "4. close": "138.9600",
            "5. volume": "6248"
        },
        "2022-07-01 17:35:00": {
            "1. open": "139.0000",
            "2. high": "139.0400",
            "3. low": "139.0000",
            "4. close": "139.0400",
            "5. volume": "5301"
        },
        "2022-07-01 17:30:00": {
            "1. open": "138.9457",
            "2. high": "138.9700",
            "3. low": "138.9400",
            "4. close": "138.9500",
            "5. volume": "3359"
        },
        "2022-07-01 17:25:00": {
            "1. open": "138.9700",
            "2. high": "138.9700",
            "3. low": "138.9500",
            "4. close": "138.9600",
            "5. volume": "8997"
        },
        "2022-07-01 17:20:00": {
            "1. open": "138.9700",
            "2. high": "138.9700",
            "3. low": "138.9575",
            "4. close": "138.9700",
            "5. volume": "5056"
        },
        "2022-07-01 17:15:00": {
            "1. open": "138.9700",
            "2. high": "139.0400",
            "3. low": "138.9700",
            "4. close": "139.0000",
            "5. volume": "7207"
        },
        "2022-07-01 17:10:00": {
            "1. open": "138.9800",
            "2. high": "139.0000",
            "3. low": "138.9700",
            "4. close": "138.9700",
            "5. volume": "5325"
        },
        "2022-07-01 17:05:00": {
            "1. open": "139.0300",
            "2. high": "139.0300",
            "3. low": "138.9600",
            "4. close": "138.9700",
            "5. volume": "15010"
        },
        "2022-07-01 17:00:00": {
            "1. open": "139.0000",
            "2. high": "139.0301",
            "3. low": "138.9900",
            "4. close": "139.0300",
            "5. volume": "14622"
        },
        "2022-07-01 16:55:00": {
            "1. open": "138.9800",
            "2. high": "139.0081",
            "3. low": "138.9700",
            "4. close": "139.0081",
            "5. volume": "4529"
        },
        "2022-07-01 16:50:00": {
            "1. open": "138.9600",
            "2. high": "139.0400",
            "3. low": "138.9300",
            "4. close": "139.0000",
            "5. volume": "9556"
        },
        "2022-07-01 16:45:00": {
            "1. open": "138.9500",
            "2. high": "138.9600",
            "3. low": "138.9200",
            "4. close": "138.9600",
            "5. volume": "3372"
        },
        "2022-07-01 16:40:00": {
            "1. open": "138.9300",
            "2. high": "138.9300",
            "3. low": "138.9100",
            "4. close": "138.9100",
            "5. volume": "11027"
        },
        "2022-07-01 16:35:00": {
            "1. open": "138.8600",
            "2. high": "138.9600",
            "3. low": "138.8500",
            "4. close": "138.9100",
            "5. volume": "346368"
        },
        "2022-07-01 16:30:00": {
            "1. open": "138.9000",
            "2. high": "138.9000",
            "3. low": "138.8701",
            "4. close": "138.8701",
            "5. volume": "5904"
        },
        "2022-07-01 16:25:00": {
            "1. open": "138.9300",
            "2. high": "138.9499",
            "3. low": "138.9200",
            "4. close": "138.9200",
            "5. volume": "7730"
        },
        "2022-07-01 16:20:00": {
            "1. open": "138.9000",
            "2. high": "138.9500",
            "3. low": "138.8800",
            "4. close": "138.9400",
            "5. volume": "26933"
        },
        "2022-07-01 16:15:00": {
            "1. open": "138.9300",
            "2. high": "138.9900",
            "3. low": "138.9000",
            "4. close": "138.9000",
            "5. volume": "284191"
        },
        "2022-07-01 16:10:00": {
            "1. open": "138.9600",
            "2. high": "138.9600",
            "3. low": "138.9200",
            "4. close": "138.9300",
            "5. volume": "90967"
        },
        "2022-07-01 16:05:00": {
            "1. open": "138.9300",
            "2. high": "139.2300",
            "3. low": "138.9200",
            "4. close": "138.9600",
            "5. volume": "1845290"
        },
        "2022-07-01 16:00:00": {
            "1. open": "138.5600",
            "2. high": "139.0400",
            "3. low": "138.4900",
            "4. close": "138.9400",
            "5. volume": "3628109"
        },
        "2022-07-01 15:55:00": {
            "1. open": "138.6450",
            "2. high": "138.7600",
            "3. low": "138.2050",
            "4. close": "138.5650",
            "5. volume": "1633130"
        },
        "2022-07-01 15:50:00": {
            "1. open": "138.5750",
            "2. high": "138.7000",
            "3. low": "138.3800",
            "4. close": "138.6401",
            "5. volume": "1048709"
        },
        "2022-07-01 15:45:00": {
            "1. open": "138.6000",
            "2. high": "138.7300",
            "3. low": "138.4900",
            "4. close": "138.5750",
            "5. volume": "1067132"
        },
        "2022-07-01 15:40:00": {
            "1. open": "138.5412",
            "2. high": "138.6500",
            "3. low": "138.5000",
            "4. close": "138.6000",
            "5. volume": "633983"
        },
        "2022-07-01 15:35:00": {
            "1. open": "138.2700",
            "2. high": "138.6312",
            "3. low": "138.2700",
            "4. close": "138.5301",
            "5. volume": "854111"
        },
        "2022-07-01 15:30:00": {
            "1. open": "138.2700",
            "2. high": "138.3600",
            "3. low": "138.1300",
            "4. close": "138.2650",
            "5. volume": "608499"
        },
        "2022-07-01 15:25:00": {
            "1. open": "138.1750",
            "2. high": "138.3000",
            "3. low": "138.0550",
            "4. close": "138.2750",
            "5. volume": "537516"
        },
        "2022-07-01 15:20:00": {
            "1. open": "138.2800",
            "2. high": "138.4200",
            "3. low": "138.1300",
            "4. close": "138.1800",
            "5. volume": "542492"
        },
        "2022-07-01 15:15:00": {
            "1. open": "138.2350",
            "2. high": "138.4487",
            "3. low": "138.1700",
            "4. close": "138.2737",
            "5. volume": "580113"
        },
        "2022-07-01 15:10:00": {
            "1. open": "137.9623",
            "2. high": "138.2600",
            "3. low": "137.9601",
            "4. close": "138.2350",
            "5. volume": "650157"
        },
        "2022-07-01 15:05:00": {
            "1. open": "138.3800",
            "2. high": "138.4499",
            "3. low": "137.8510",
            "4. close": "137.9700",
            "5. volume": "770294"
        },
        "2022-07-01 15:00:00": {
            "1. open": "138.2000",
            "2. high": "138.4804",
            "3. low": "138.1100",
            "4. close": "138.3750",
            "5. volume": "613054"
        },
        "2022-07-01 14:55:00": {
            "1. open": "138.4600",
            "2. high": "138.5600",
            "3. low": "138.1000",
            "4. close": "138.1900",
            "5. volume": "731283"
        },
        "2022-07-01 14:50:00": {
            "1. open": "138.2200",
            "2. high": "138.5300",
            "3. low": "138.1723",
            "4. close": "138.4600",
            "5. volume": "683151"
        },
        "2022-07-01 14:45:00": {
            "1. open": "138.2300",
            "2. high": "138.2345",
            "3. low": "138.1200",
            "4. close": "138.2200",
            "5. volume": "391672"
        },
        "2022-07-01 14:40:00": {
            "1. open": "138.1200",
            "2. high": "138.2300",
            "3. low": "138.0024",
            "4. close": "138.2250",
            "5. volume": "483401"
        },
        "2022-07-01 14:35:00": {
            "1. open": "137.8700",
            "2. high": "138.1600",
            "3. low": "137.8450",
            "4. close": "138.1329",
            "5. volume": "534521"
        },
        "2022-07-01 14:30:00": {
            "1. open": "138.0800",
            "2. high": "138.1000",
            "3. low": "137.8200",
            "4. close": "137.8700",
            "5. volume": "595794"
        },
        "2022-07-01 14:25:00": {
            "1. open": "137.7200",
            "2. high": "138.0900",
            "3. low": "137.6100",
            "4. close": "138.0750",
            "5. volume": "643702"
        },
        "2022-07-01 14:20:00": {
            "1. open": "137.5300",
            "2. high": "137.7500",
            "3. low": "137.4400",
            "4. close": "137.7300",
            "5. volume": "335104"
        },
        "2022-07-01 14:15:00": {
            "1. open": "137.4100",
            "2. high": "137.5500",
            "3. low": "137.2400",
            "4. close": "137.5150",
            "5. volume": "410310"
        },
        "2022-07-01 14:10:00": {
            "1. open": "137.5300",
            "2. high": "137.6300",
            "3. low": "137.3000",
            "4. close": "137.4100",
            "5. volume": "435625"
        },
        "2022-07-01 14:05:00": {
            "1. open": "137.7150",
            "2. high": "137.7293",
            "3. low": "137.5000",
            "4. close": "137.5201",
            "5. volume": "413288"
        },
        "2022-07-01 14:00:00": {
            "1. open": "137.5181",
            "2. high": "137.7200",
            "3. low": "137.5181",
            "4. close": "137.7178",
            "5. volume": "402661"
        },
        "2022-07-01 13:55:00": {
            "1. open": "137.5600",
            "2. high": "137.6741",
            "3. low": "137.4800",
            "4. close": "137.5200",
            "5. volume": "455778"
        },
        "2022-07-01 13:50:00": {
            "1. open": "137.4700",
            "2. high": "137.6100",
            "3. low": "137.3300",
            "4. close": "137.5500",
            "5. volume": "445657"
        },
        "2022-07-01 13:45:00": {
            "1. open": "137.3400",
            "2. high": "137.5200",
            "3. low": "137.2400",
            "4. close": "137.4600",
            "5. volume": "1403612"
        },
        "2022-07-01 13:40:00": {
            "1. open": "137.1200",
            "2. high": "137.4700",
            "3. low": "137.0300",
            "4. close": "137.3450",
            "5. volume": "704317"
        },
        "2022-07-01 13:35:00": {
            "1. open": "137.0600",
            "2. high": "137.2400",
            "3. low": "137.0200",
            "4. close": "137.1200",
            "5. volume": "546463"
        },
        "2022-07-01 13:30:00": {
            "1. open": "136.8350",
            "2. high": "137.0700",
            "3. low": "136.7416",
            "4. close": "137.0500",
            "5. volume": "550642"
        },
        "2022-07-01 13:25:00": {
            "1. open": "136.8100",
            "2. high": "136.9200",
            "3. low": "136.6810",
            "4. close": "136.8200",
            "5. volume": "351574"
        },
        "2022-07-01 13:20:00": {
            "1. open": "136.8300",
            "2. high": "136.9200",
            "3. low": "136.5690",
            "4. close": "136.8250",
            "5. volume": "547092"
        },
        "2022-07-01 13:15:00": {
            "1. open": "136.6100",
            "2. high": "136.8388",
            "3. low": "136.5800",
            "4. close": "136.8209",
            "5. volume": "349102"
        },
        "2022-07-01 13:10:00": {
            "1. open": "136.5100",
            "2. high": "136.6350",
            "3. low": "136.4400",
            "4. close": "136.6200",
            "5. volume": "368026"
        },
        "2022-07-01 13:05:00": {
            "1. open": "136.5050",
            "2. high": "136.6550",
            "3. low": "136.4600",
            "4. close": "136.5300",
            "5. volume": "390660"
        },
        "2022-07-01 13:00:00": {
            "1. open": "136.8990",
            "2. high": "136.9622",
            "3. low": "136.5200",
            "4. close": "136.5200",
            "5. volume": "391017"
        },
        "2022-07-01 12:55:00": {
            "1. open": "136.7751",
            "2. high": "136.9800",
            "3. low": "136.7400",
            "4. close": "136.8950",
            "5. volume": "394764"
        },
        "2022-07-01 12:50:00": {
            "1. open": "136.6400",
            "2. high": "136.8300",
            "3. low": "136.5527",
            "4. close": "136.7809",
            "5. volume": "395739"
        },
        "2022-07-01 12:45:00": {
            "1. open": "136.6100",
            "2. high": "136.7300",
            "3. low": "136.5700",
            "4. close": "136.6450",
            "5. volume": "328046"
        },
        "2022-07-01 12:40:00": {
            "1. open": "136.8200",
            "2. high": "136.8757",
            "3. low": "136.5700",
            "4. close": "136.6101",
            "5. volume": "472391"
        },
        "2022-07-01 12:35:00": {
            "1. open": "137.0300",
            "2. high": "137.1200",
            "3. low": "136.7400",
            "4. close": "136.8089",
            "5. volume": "577645"
        },
        "2022-07-01 12:30:00": {
            "1. open": "137.1450",
            "2. high": "137.1899",
            "3. low": "136.9218",
            "4. close": "137.0200",
            "5. volume": "485325"
        },
        "2022-07-01 12:25:00": {
            "1. open": "136.9910",
            "2. high": "137.1500",
            "3. low": "136.9050",
            "4. close": "137.1400",
            "5. volume": "592074"
        },
        "2022-07-01 12:20:00": {
            "1. open": "136.4300",
            "2. high": "137.0600",
            "3. low": "136.4100",
            "4. close": "136.9700",
            "5. volume": "720214"
        },
        "2022-07-01 12:15:00": {
            "1. open": "136.3600",
            "2. high": "136.5799",
            "3. low": "136.2800",
            "4. close": "136.4134",
            "5. volume": "579100"
        },
        "2022-07-01 12:10:00": {
            "1. open": "136.3000",
            "2. high": "136.4900",
            "3. low": "136.2300",
            "4. close": "136.3601",
            "5. volume": "456272"
        },
        "2022-07-01 12:05:00": {
            "1. open": "136.3550",
            "2. high": "136.3900",
            "3. low": "136.0718",
            "4. close": "136.2883",
            "5. volume": "400281"
        },
        "2022-07-01 12:00:00": {
            "1. open": "136.3400",
            "2. high": "136.4575",
            "3. low": "136.2100",
            "4. close": "136.3500",
            "5. volume": "477938"
        },
        "2022-07-01 11:55:00": {
            "1. open": "136.8200",
            "2. high": "136.8270",
            "3. low": "136.3100",
            "4. close": "136.3450",
            "5. volume": "632715"
        },
        "2022-07-01 11:50:00": {
            "1. open": "136.6600",
            "2. high": "136.9800",
            "3. low": "136.6100",
            "4. close": "136.8100",
            "5. volume": "490857"
        },
        "2022-07-01 11:45:00": {
            "1. open": "136.6600",
            "2. high": "136.9100",
            "3. low": "136.6201",
            "4. close": "136.6600",
            "5. volume": "426178"
        }
    }
}