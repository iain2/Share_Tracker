use portfolio;
db.dropDatabase();

db.stocks.insertMany([
    {
        "symbol": "AMZN",
        "name": "Amazon.com Inc",
        "type": "Equity",
        "region": "United States",
        "marketOpen": "09:30",
        "marketClose": "16:00",
        "timezone": "UTC-04",
        "currency": "USD",
        "matchScore": "1.0000"
    },
    {
        "symbol": "AAPL",
        "name": "Apple Inc",
        "type": "Equity",
        "region": "United States",
        "marketOpen": "09:30",
        "marketClose": "16:00",
        "timezone": "UTC-04",
        "currency": "USD",
        "matchScore": "1.0000"
    },
    {
        "symbol": "BA",
        "name": "Boeing Company",
        "type": "Equity",
        "region": "United States",
        "marketOpen": "09:30",
        "marketClose": "16:00",
        "timezone": "UTC-04",
        "currency": "USD",
        "matchScore": "1.0000"
    },
]);