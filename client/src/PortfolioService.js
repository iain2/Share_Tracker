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
        "2. Symbol": "IBM",
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


export const dummyNews = {
    "items": "50",
    "sentiment_score_definition": "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish",
    "relevance_score_definition": "0 < x <= 1, with a higher score indicating higher relevance.",
    "feed": [
        {
            "title": "Data Center Market in Malaysia to observe USD 2.08 Bn growth | Demand planning and expansion by hyperscalers to boost growth | Technavio",
            "url": "https://www.prnewswire.com/news-releases/data-center-market-in-malaysia-to-observe-usd-2-08-bn-growth--demand-planning-and-expansion-by-hyperscalers-to-boost-growth--technavio-301579993.html",
            "time_published": "20220705T020000",
            "authors": [
                "Technavio"
            ],
            "summary": "The data center market in Malaysia is fragmented, and the degree of fragmentation will accelerate during the forecast period.",
            "banner_image": "https://mma.prnewswire.com/media/1852531/Technavio_Data_Center.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.161647"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.022417,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "LNVGF",
                    "relevance_score": "0.673945",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "LGRVF",
                    "relevance_score": "0.137592",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NIPNF",
                    "relevance_score": "0.511842",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPE",
                    "relevance_score": "0.046068",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "VRT",
                    "relevance_score": "0.137592",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.046068",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CMI",
                    "relevance_score": "0.046068",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FJTSF",
                    "relevance_score": "0.046068",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.091983",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DELL",
                    "relevance_score": "0.046068",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ETN",
                    "relevance_score": "0.046068",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NTAP",
                    "relevance_score": "0.752074",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.046068",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SBGSF",
                    "relevance_score": "0.356034",
                    "ticker_sentiment_score": "0.004113",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "New Study from StrategyR Highlights a $87.5 Billion Global Market for Smart Classroom by 2026",
            "url": "https://www.prnewswire.com/news-releases/new-study-from-strategyr-highlights-a-87-5-billion-global-market-for-smart-classroom-by-2026--301579420.html",
            "time_published": "20220704T110500",
            "authors": [
                "Global Industry Analysts",
                "Inc."
            ],
            "summary": "• Access to our digital archives and MarketGlass Research Platform Companies: 13 - Players covered include Apple, Inc. Barco. BigBlueButton. Blackboard Inc. Cisco Systems Inc. Dell Inc. Digital Samba SL. Discovery Communication. Dynavox Mayer-Johnson. Electa Communications Ltd.",
            "banner_image": "https://mma.prnewswire.com/media/1851968/Smart_Classroom_Infographic.jpg?w=500",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": 0.001229,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.059005",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPE",
                    "relevance_score": "0.059005",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SSNLF",
                    "relevance_score": "0.446253",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.059005",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "PCRFF",
                    "relevance_score": "0.446253",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FJTSF",
                    "relevance_score": "0.059005",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HTHIF",
                    "relevance_score": "0.059005",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.117688",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.059005",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.699924",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.059005",
                    "ticker_sentiment_score": "0.001229",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Only 8 Of The 30 Dow Jones Stocks Were Positive In The First Half Of 2022: Chevron Leads, But Who Else Was Up?",
            "url": "https://www.benzinga.com/news/22/07/27934908/only-8-of-the-30-dow-jones-stocks-were-positive-in-the-first-half-of-2022-chevron-leads-but-who-else",
            "time_published": "20220701T204549",
            "authors": [
                "Chris Katje"
            ],
            "summary": "The U.S. stock market had a rough start to 2022 with a market correction hitting stocks and many indexes seeing their worst performances in decades. What Happened: The S&P 500, as tracked by the SPDR S&P 500 ETF Trust SPY, saw a decline of 20.8% in the first half of 2022.",
            "banner_image": "https://cdn.benzinga.com/files/images/story/2022/07/01/chevron.tada_images.jpg?width=1200&height=800&fit=crop",
            "source": "Benzinga",
            "category_within_source": "Trading",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Energy & Transportation",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.495866"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.744043"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.166667"
                }
            ],
            "overall_sentiment_score": -0.117141,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "CVX",
                    "relevance_score": "0.28597",
                    "ticker_sentiment_score": "0.017381",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "TRV",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "0.000205",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "6.3e-05",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NKE",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "6.3e-05",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "UNH",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "0.000205",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HD",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "6.3e-05",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "KO",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "0.000205",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "0.000205",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "JNJ",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "0.000205",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DIS",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "6.3e-05",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMGN",
                    "relevance_score": "0.193001",
                    "ticker_sentiment_score": "0.000205",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "10 Defensive ETFs to Protect Your Portfolio",
            "url": "https://www.kiplinger.com/investing/etfs/604881/10-defensive-etfs-to-protect-your-portfolio",
            "time_published": "20220701T184415",
            "authors": [
                "Jeff Reeves"
            ],
            "summary": "It's hard to blame investors for wanting to dive into a safe room following the S&P 500's worst first half of a year since 1970. Fortunately, they can find the protection they seek via defensive exchange-traded funds ( ETFs ).",
            "banner_image": "https://mediacloud.kiplinger.com/image/private/s--c88XNqUd--/f_auto,t_primary-image-mobile@1/v1655144639/Investing/best-etfs-bear-market-2022.jpg",
            "source": "Kiplinger",
            "category_within_source": "n/a",
            "source_domain": "www.kiplinger.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.2"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.2"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.310843"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.2"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.2"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.2"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.972193"
                }
            ],
            "overall_sentiment_score": -0.139301,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MO",
                    "relevance_score": "0.034119",
                    "ticker_sentiment_score": "0.074856",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "PEP",
                    "relevance_score": "0.034119",
                    "ticker_sentiment_score": "0.167911",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "IVZ",
                    "relevance_score": "0.051159",
                    "ticker_sentiment_score": "0.145962",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "JPM",
                    "relevance_score": "0.034119",
                    "ticker_sentiment_score": "0.264111",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.034119",
                    "ticker_sentiment_score": "0.074856",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "JNJ",
                    "relevance_score": "0.034119",
                    "ticker_sentiment_score": "0.264111",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.017063",
                    "ticker_sentiment_score": "0.264111",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "VZ",
                    "relevance_score": "0.034119",
                    "ticker_sentiment_score": "0.167911",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "MCD",
                    "relevance_score": "0.034119",
                    "ticker_sentiment_score": "0.167911",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "Business Process Management as a Service  ( BPMaaS )  Market Size to Grow by USD 19.56 billion | Accenture Plc and Appian Corp. among Key Vendors | Technavio",
            "url": "https://www.prnewswire.com/news-releases/business-process-management-as-a-service-bpmaas-market-size-to-grow-by-usd-19-56-billion--accenture-plc-and-appian-corp-among-key-vendors--technavio-301579036.html",
            "time_published": "20220701T153500",
            "authors": [
                "Technavio"
            ],
            "summary": "• BFSI: The market vendors should focus on grabbing business opportunities from the BFSI segment under the end-users category as it accounted for the largest market share in the base year.",
            "banner_image": "https://mma.prnewswire.com/media/1851402/Technavio_Business_Process_Management_as_a_Service_Market_Infographic.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                }
            ],
            "overall_sentiment_score": 0.003092,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "OTEX",
                    "relevance_score": "0.43526",
                    "ticker_sentiment_score": "0.003092",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SAP",
                    "relevance_score": "0.19492",
                    "ticker_sentiment_score": "0.003092",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.130677",
                    "ticker_sentiment_score": "0.003092",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.257873",
                    "ticker_sentiment_score": "0.003092",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.130677",
                    "ticker_sentiment_score": "0.003092",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "PEGA",
                    "relevance_score": "0.37838",
                    "ticker_sentiment_score": "0.003092",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "APPN",
                    "relevance_score": "0.130677",
                    "ticker_sentiment_score": "0.003092",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Should SPDR S&P Dividend ETF  ( SDY )  Be on Your Investing Radar?",
            "url": "https://www.zacks.com/stock/news/1946589/should-spdr-sp-dividend-etf-sdy-be-on-your-investing-radar",
            "time_published": "20220701T102007",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "Style Box ETF report for ...",
            "banner_image": "https://staticx-tuner.zacks.com/images/default_article_images/default186.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.451494"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Energy & Transportation",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.034186,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "CVX",
                    "relevance_score": "0.118617",
                    "ticker_sentiment_score": "0.001897",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.118617",
                    "ticker_sentiment_score": "0.001897",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "XOM",
                    "relevance_score": "0.118617",
                    "ticker_sentiment_score": "0.001897",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "STT",
                    "relevance_score": "0.059474",
                    "ticker_sentiment_score": "0.016926",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "3 Top Tech Stocks to Buy Right Now",
            "url": "https://www.fool.com/investing/2022/06/30/3-top-tech-stocks-to-buy-right-now/",
            "time_published": "20220630T115500",
            "authors": [
                "Leo Sun"
            ],
            "summary": "IBM, Accenture, and Cloudflare are all solid long-term investments.",
            "banner_image": "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F687338%2Fgettyimages-90307110.jpg&w=700&op=resize",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Mergers & Acquisitions",
                    "relevance_score": "0.310843"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.999966"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.365926"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                }
            ],
            "overall_sentiment_score": 0.00508,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.052524",
                    "ticker_sentiment_score": "-0.066225",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "KD",
                    "relevance_score": "0.10482",
                    "ticker_sentiment_score": "-0.135403",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.156664",
                    "ticker_sentiment_score": "-0.055893",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NET",
                    "relevance_score": "0.156664",
                    "ticker_sentiment_score": "-0.189919",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.307347",
                    "ticker_sentiment_score": "-0.043942",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Insurance Software Market Size to Grow by USD 7.29 Billion | 6.34% YOY Growth to be Recorded in 2021 | Technavio",
            "url": "https://www.prnewswire.com/news-releases/insurance-software-market-size-to-grow-by-usd-7-29-billion--6-34-yoy-growth-to-be-recorded-in-2021--technavio-301577849.html",
            "time_published": "20220630T114000",
            "authors": [
                "Technavio"
            ],
            "summary": "Technavio presents a detailed picture of the market by the way of study, synthesis, and summation of data from multiple sources. The insurance software market report covers the following areas: • The market is fragmented, and the degree of fragmentation will accelerate during the forecast period.",
            "banner_image": "https://mma.prnewswire.com/media/1850300/IRTNTR44333.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.108179"
                }
            ],
            "overall_sentiment_score": 0.022229,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "GWRE",
                    "relevance_score": "0.545618",
                    "ticker_sentiment_score": "0.013934",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SAP",
                    "relevance_score": "0.049711",
                    "ticker_sentiment_score": "0.013934",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.617238",
                    "ticker_sentiment_score": "0.013934",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.09923",
                    "ticker_sentiment_score": "0.013934",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.33746",
                    "ticker_sentiment_score": "0.013934",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.148365",
                    "ticker_sentiment_score": "0.013934",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DELL",
                    "relevance_score": "0.19693",
                    "ticker_sentiment_score": "0.013934",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Artificial Intelligence  ( AI )  Market in Retail Sector Market - 40% of Growth to Originate from North America| Driven by the Rise in Investments and R & D in AI Startups| Technavio",
            "url": "https://www.prnewswire.com/news-releases/artificial-intelligence-ai-market-in-retail-sector-market---40-of-growth-to-originate-from-north-america-driven-by-the-rise-in-investments-and-r--d-in-ai-startups-technavio-301576949.html",
            "time_published": "20220630T001000",
            "authors": [
                "Technavio"
            ],
            "summary": "For more information on region segment - Get a sample now! The key factor driving the global artificial intelligence ( AI ) market growth in the retail sector is the rise in investments and R&D in AI startups.",
            "banner_image": "https://mma.prnewswire.com/media/1849295/IRTNTR72402.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.108179"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.005701,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "NVDA",
                    "relevance_score": "0.148334",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CAPMF",
                    "relevance_score": "0.049701",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMZN",
                    "relevance_score": "0.049701",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SAP",
                    "relevance_score": "0.049701",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "INFY",
                    "relevance_score": "0.148334",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "INTC",
                    "relevance_score": "0.148334",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.545524",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.099209",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.244698",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.049701",
                    "ticker_sentiment_score": "0.000497",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Mastercard  ( MA ) , Softcell Tie Up to Boost Cybersecurity in India",
            "url": "https://www.zacks.com/stock/news/1945793/mastercard-ma-softcell-tie-up-to-boost-cybersecurity-in-india",
            "time_published": "20220629T152800",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "Mastercard (MA) collaborates with Softcell, which will distribute MA's RiskRecon to its customers across India and empower them to counter cybersecurity threats.",
            "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/15/497.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.108179"
                }
            ],
            "overall_sentiment_score": 0.067184,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "V",
                    "relevance_score": "0.264945",
                    "ticker_sentiment_score": "0.001724",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AXP",
                    "relevance_score": "0.307018",
                    "ticker_sentiment_score": "0.065706",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MA",
                    "relevance_score": "0.307018",
                    "ticker_sentiment_score": "0.083315",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.089813",
                    "ticker_sentiment_score": "0.001947",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.044978",
                    "ticker_sentiment_score": "0.141177",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "RSKD",
                    "relevance_score": "0.044978",
                    "ticker_sentiment_score": "0.141177",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Cloud Backup and Recovery Market Size to Grow by USD 14.59 billion | Hewlett Packard Enterprise Co. and International Business Machines Corp. Among Key Vendors | Technavio",
            "url": "https://www.prnewswire.com/news-releases/cloud-backup-and-recovery-market-size-to-grow-by-usd-14-59-billion--hewlett-packard-enterprise-co-and-international-business-machines-corp-among-key-vendors--technavio-301576839.html",
            "time_published": "20220629T055000",
            "authors": [
                "Technavio"
            ],
            "summary": "The market vendors should focus on grabbing business opportunities from the ICT segment under the end-users category, as it accounted for the largest market growth share in the base year. The growth of the segment is driven by factors such as the increasing demand for the digitalization of the ...",
            "banner_image": "https://mma.prnewswire.com/media/1849224/Cloud_Backup_and_Recovery_Market.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": 0.00733,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "HPE",
                    "relevance_score": "0.744067",
                    "ticker_sentiment_score": "0.00733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "RXT",
                    "relevance_score": "0.064675",
                    "ticker_sentiment_score": "0.00733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CVLT",
                    "relevance_score": "0.192336",
                    "ticker_sentiment_score": "0.00733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.744067",
                    "ticker_sentiment_score": "0.00733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.192336",
                    "ticker_sentiment_score": "0.00733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.315062",
                    "ticker_sentiment_score": "0.00733",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Green Technology and Sustainability Market Size to Grow by USD 26.10 billion | AAA Taranis Visual Ltd. and ConsenSys Software Inc. Among Key Market Contributors | Technavio",
            "url": "https://www.prnewswire.com/news-releases/green-technology-and-sustainability-market-size-to-grow-by-usd-26-10-billion--aaa-taranis-visual-ltd-and-consensys-software-inc-among-key-market-contributors--technavio-301576816.html",
            "time_published": "20220629T051000",
            "authors": [
                "Technavio"
            ],
            "summary": "To learn more about market dynamics, Download a Sample Report! The green technology and sustainability market covers the following areas: Green Technology And Sustainability Market Sizing Green Technology And Sustainability Market Forecast Green Technology And Sustainability Market Analysis",
            "banner_image": "https://mma.prnewswire.com/media/1849223/Technavio_Green_Technology_and_Sustainability.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.001274,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "ENGQF",
                    "relevance_score": "0.050085",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DGII",
                    "relevance_score": "0.050085",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FTV",
                    "relevance_score": "0.050085",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.099974",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.050085",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.050085",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "XYL",
                    "relevance_score": "0.050085",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GE",
                    "relevance_score": "0.099974",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SBGSF",
                    "relevance_score": "0.050085",
                    "ticker_sentiment_score": "0.001274",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Hewlett Packard  ( HPE )  Adds Red Hat to GreenLake Ecosystem",
            "url": "https://www.zacks.com/stock/news/1944925/hewlett-packard-hpe-adds-red-hat-to-greenlake-ecosystem",
            "time_published": "20220628T120700",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "Hewlett Packard (HPE) to offer new GreenLake solutions combined with Red Hat's open-source software technologies, enabling organizations to address their cost & risk challenges in a better way.",
            "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/15/1040.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": 0.086002,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.299204",
                    "ticker_sentiment_score": "0.010277",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPE",
                    "relevance_score": "0.750982",
                    "ticker_sentiment_score": "0.098011",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.368991",
                    "ticker_sentiment_score": "0.097092",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.368991",
                    "ticker_sentiment_score": "0.011644",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Software Testing Services Market to Grow at a CAGR of 15.07% | Regional Outlook, Growth Potential, Competitive Market Share & Forecast | Technavio",
            "url": "https://www.prnewswire.com/news-releases/software-testing-services-market-to-grow-at-a-cagr-of-15-07--regional-outlook-growth-potential-competitive-market-share--forecast--technavio-301575874.html",
            "time_published": "20220628T094500",
            "authors": [
                "Technavio"
            ],
            "summary": "Didn't Find What You Were Looking For? Customize Report- Don't miss out on the opportunity to speak to our analyst and know more insights about this market report. Our analysts can also help you customize this report according to your needs.",
            "banner_image": "https://mma.prnewswire.com/media/1848035/Technavio_Software_Testing_Services_Market_Infographic.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.360215"
                }
            ],
            "overall_sentiment_score": 0.019224,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "CAPMF",
                    "relevance_score": "0.042922",
                    "ticker_sentiment_score": "0.00746",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.042922",
                    "ticker_sentiment_score": "0.063598",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.042922",
                    "ticker_sentiment_score": "0.003607",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Data-as-a-Service Market: 47.21% YOY growth achieved in 2021 | Driven by growing amount of data | Technavio",
            "url": "https://www.prnewswire.com/news-releases/data-as-a-service-market-47-21-yoy-growth-achieved-in-2021--driven-by-growing-amount-of-data--technavio-301573966.html",
            "time_published": "20220625T035000",
            "authors": [
                "Technavio"
            ],
            "summary": "Get highlights on the growth variance and the Y-O-Y growth rate. The growing amount of data and increase in the adoption of big data services in industries are some of the key market drivers. The volume of data generated across industries has significantly increased over the past decade.",
            "banner_image": "https://mma.prnewswire.com/media/1846230/Technavio_Data_as_a_Service.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.108179"
                }
            ],
            "overall_sentiment_score": 0.03,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "AYX",
                    "relevance_score": "0.050285",
                    "ticker_sentiment_score": "0.03",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.050285",
                    "ticker_sentiment_score": "0.03",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.050285",
                    "ticker_sentiment_score": "0.03",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "3 Top Tech Stocks That Could Help Make You Rich by Retirement",
            "url": "https://www.fool.com/investing/2022/06/23/top-tech-stocks-help-make-you-rich-retirement/",
            "time_published": "20220623T131727",
            "authors": [
                "James Brumley"
            ],
            "summary": "Let time do the heavy lifting with these tech stocks.",
            "banner_image": "https://g.foolcdn.com/editorial/images/685473/metaverse-vr-goggles-061622.jpg",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.989041"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.108179"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": -0.057597,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.085675",
                    "ticker_sentiment_score": "0.104258",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NVDA",
                    "relevance_score": "0.042899",
                    "ticker_sentiment_score": "0.056882",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMD",
                    "relevance_score": "0.085675",
                    "ticker_sentiment_score": "-0.246255",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.170365",
                    "ticker_sentiment_score": "0.080664",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "TSM",
                    "relevance_score": "0.085675",
                    "ticker_sentiment_score": "0.056882",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Dogs of the Dow Are 2022's Best in Show",
            "url": "https://www.kiplinger.com/investing/stocks/dividend-stocks/604828/dogs-of-the-dow-are-2022s-best-in-show",
            "time_published": "20220622T183419",
            "authors": [
                "Jeffrey R. Kosnett"
            ],
            "summary": "All portfolio doctors should prescribe high dividends to remedy rising interest rates and stiff inflation. In 2022, the first year in recent memory pockmarked by those twin afflictions, dividend-heavy stocks such as utilities, pharmaceuticals, pipelines and many consumer-oriented blue chips like ...",
            "banner_image": "https://mediacloud.kiplinger.com/image/private/s--v7h6XwlH--/f_auto,t_primary-image-mobile@1/v1655903283/Investing/dividend-stocks-kpfm-august-2022.jpg",
            "source": "Kiplinger",
            "category_within_source": "n/a",
            "source_domain": "www.kiplinger.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Energy & Transportation",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.999767"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.110007,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "CVX",
                    "relevance_score": "0.145276",
                    "ticker_sentiment_score": "0.494794",
                    "ticker_sentiment_label": "Bullish"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.072942",
                    "ticker_sentiment_score": "-0.910558",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "KO",
                    "relevance_score": "0.145276",
                    "ticker_sentiment_score": "0.494794",
                    "ticker_sentiment_label": "Bullish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.145276",
                    "ticker_sentiment_score": "0.494794",
                    "ticker_sentiment_label": "Bullish"
                },
                {
                    "ticker": "CAT",
                    "relevance_score": "0.285776",
                    "ticker_sentiment_score": "0.126798",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "META",
                    "relevance_score": "0.072942",
                    "ticker_sentiment_score": "-0.910558",
                    "ticker_sentiment_label": "Bearish"
                }
            ]
        },
        {
            "title": "5 Low Price-to-Sales Stocks to Scoop for Brimming Returns",
            "url": "https://www.zacks.com/stock/news/1942052/5-low-price-to-sales-stocks-to-scoop-for-brimming-returns",
            "time_published": "20220622T103200",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "Price-to-sales is a convenient tool to gauge the value of stocks incurring losses or are in an early development cycle. Stocks like AAN, SIG, AVT, VSH and TA hold promise.",
            "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/d6/135.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.999999"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.995869"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.147874,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "TA",
                    "relevance_score": "0.150216",
                    "ticker_sentiment_score": "0.133858",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AVT",
                    "relevance_score": "0.150216",
                    "ticker_sentiment_score": "0.133858",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SIG",
                    "relevance_score": "0.120431",
                    "ticker_sentiment_score": "0.133858",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.030216",
                    "ticker_sentiment_score": "0.258372",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "AAN",
                    "relevance_score": "0.120431",
                    "ticker_sentiment_score": "0.133858",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "VSH",
                    "relevance_score": "0.060388",
                    "ticker_sentiment_score": "-0.222805",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.030216",
                    "ticker_sentiment_score": "0.258372",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "These 2 Dividend ETFs Are a Retiree's Best Friend",
            "url": "https://www.fool.com/investing/2022/06/17/these-2-dividend-etfs-are-a-retirees-best-friend/",
            "time_published": "20220617T131700",
            "authors": [
                "Rekha Khandelwal"
            ],
            "summary": "These ETFs provide a hassle-free way to boost your retirement income.",
            "banner_image": "https://media.ycharts.com/charts/773176dac317ed5814c53573a6c7505d.png",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Energy & Transportation",
                    "relevance_score": "0.25"
                }
            ],
            "overall_sentiment_score": 0.115439,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "XOM",
                    "relevance_score": "0.081111",
                    "ticker_sentiment_score": "0.018398",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "JPM",
                    "relevance_score": "0.081111",
                    "ticker_sentiment_score": "0.018398",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMGN",
                    "relevance_score": "0.081111",
                    "ticker_sentiment_score": "0.006569",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.081111",
                    "ticker_sentiment_score": "0.006569",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "JNJ",
                    "relevance_score": "0.161385",
                    "ticker_sentiment_score": "0.018398",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "ASA Launches New Global Branding Initiative",
            "url": "https://www.prnewswire.com/news-releases/asa-launches-new-global-branding-initiative-301569707.html",
            "time_published": "20220617T123400",
            "authors": [
                "ASA"
            ],
            "summary": "HERNDON, Va. , June 17, 2022 /PRNewswire/ -- ASA has officially launched a new global initiative to update its corporate branding. Efforts include a change in public reference of the organization's name from the American Society of Appraisers to \"ASA\".",
            "banner_image": "https://mma.prnewswire.com/media/1841678/ASA_Logo.jpg?p=facebook",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Energy & Transportation",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": 0.188628,
            "overall_sentiment_label": "Somewhat-Bullish",
            "ticker_sentiment": [
                {
                    "ticker": "IBM",
                    "relevance_score": "0.14864",
                    "ticker_sentiment_score": "0.188628",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "FDX",
                    "relevance_score": "0.074646",
                    "ticker_sentiment_score": "0.188628",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "DHKCF",
                    "relevance_score": "0.074646",
                    "ticker_sentiment_score": "0.188628",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "T: 5 Blue Chip Dividend Stocks Yielding More Than 4%",
            "url": "https://stocknews.com/news/t-lyb-bns-ibm-mo-5-blue-chip-dividend-stocks-yielding-more-than-4/",
            "time_published": "20220616T202924",
            "authors": [],
            "summary": "T: 5 Blue Chip Dividend Stocks Yielding More Than ...",
            "banner_image": "https://stocknews.com/wp-content/uploads/2022/03/shutterstock_325898915-1-scaled.jpg",
            "source": "Stocknews.com",
            "category_within_source": "n/a",
            "source_domain": "stocknews.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                }
            ],
            "overall_sentiment_score": 0.068221,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "CBSU",
                    "relevance_score": "0.022353",
                    "ticker_sentiment_score": "0.042503",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "T",
                    "relevance_score": "0.022353",
                    "ticker_sentiment_score": "0.017156",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MO",
                    "relevance_score": "0.177361",
                    "ticker_sentiment_score": "0.040013",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "LYB",
                    "relevance_score": "0.155494",
                    "ticker_sentiment_score": "0.073307",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.177361",
                    "ticker_sentiment_score": "0.087259",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "BNS",
                    "relevance_score": "0.155494",
                    "ticker_sentiment_score": "0.135538",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Global eDiscovery Market Report  ( 2022 to 2027 )  - Industry Trends, Share, Size, Growth, Opportunity and Forecasts",
            "url": "https://www.benzinga.com/pressreleases/22/06/g27716337/global-ediscovery-market-report-2022-to-2027-industry-trends-share-size-growth-opportunity-and-for",
            "time_published": "20220615T114835",
            "authors": [
                "Globe Newswire"
            ],
            "summary": "Dublin, June 15, 2022 ( GLOBE NEWSWIRE ) -- The \"eDiscovery Market: Global Industry Trends, Share, Size, Growth, Opportunity and Forecast 2022-2027\" report has been added to ResearchAndMarkets.com's offering. The global eDiscovery market reached a value of US$ 11.4 Billion in 2021.",
            "banner_image": "",
            "source": "Benzinga",
            "category_within_source": "News",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": -0.037931,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "OTEX",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CG",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NXLLF",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CVLT",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FCN",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MFGP",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MCQEF",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CNDT",
                    "relevance_score": "0.041661",
                    "ticker_sentiment_score": "0.003367",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Blockchain Technology Market in Transportation and Logistics Industry: North America to Occupy 55% Market Share | Sea Segment to be Significant for Revenue Generation | Technavio",
            "url": "https://www.prnewswire.com/news-releases/blockchain-technology-market-in-transportation-and-logistics-industry-north-america-to-occupy-55-market-share--sea-segment-to-be-significant-for-revenue-generation--technavio-301566702.html",
            "time_published": "20220614T070000",
            "authors": [
                "Technavio"
            ],
            "summary": "The blockchain technology market in the transportation and logistics industry market report covers the following areas: • What are the major trends in the market?",
            "banner_image": "https://mma.prnewswire.com/media/1838252/Technavio_Blockchain_Technology_Market_Infographic.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.108179"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.972193"
                }
            ],
            "overall_sentiment_score": 0.058159,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "CAPMF",
                    "relevance_score": "0.061143",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SAP",
                    "relevance_score": "0.241025",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "INFY",
                    "relevance_score": "0.354656",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.642678",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.182002",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "WIT",
                    "relevance_score": "0.061143",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.642678",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.061143",
                    "ticker_sentiment_score": "0.002035",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Why IBM is one of few tech giants that are actually gaining through the selloff",
            "url": "https://www.marketwatch.com/story/why-ibm-is-one-of-few-tech-giants-that-are-actually-gaining-through-the-selloff-11655146869",
            "time_published": "20220613T190100",
            "authors": [
                "James Rogers"
            ],
            "summary": "International Business Machines Corp., unlike many other tech giants, has been able to buck the sector's selloff in recent months.",
            "banner_image": "https://images.mktw.net/im-375235/social",
            "source": "MarketWatch",
            "category_within_source": "Top Stories",
            "source_domain": "www.marketwatch.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.839681"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.955357"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.044534,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "HPE",
                    "relevance_score": "0.174713",
                    "ticker_sentiment_score": "0.005094",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "BAC",
                    "relevance_score": "0.087888",
                    "ticker_sentiment_score": "0.008582",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MS",
                    "relevance_score": "0.259451",
                    "ticker_sentiment_score": "-0.046158",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.848678",
                    "ticker_sentiment_score": "0.047476",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.174713",
                    "ticker_sentiment_score": "0.007552",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AZPN",
                    "relevance_score": "0.174713",
                    "ticker_sentiment_score": "0.05466",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.174713",
                    "ticker_sentiment_score": "0.007552",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.174713",
                    "ticker_sentiment_score": "0.005094",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.087888",
                    "ticker_sentiment_score": "0.005094",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "META",
                    "relevance_score": "0.174713",
                    "ticker_sentiment_score": "0.007552",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Zacks.com featured highlights The Aaron's Company, MarineMax, Avnet, Vishay Intertechnology and Huntsman",
            "url": "https://www.zacks.com/stock/news/1937966/zackscom-featured-highlights-the-aarons-company-marinemax-avnet-vishay-intertechnology-and-huntsman",
            "time_published": "20220613T104200",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "The Aaron's Company, MarineMax, Avnet, Vishay Intertechnology and Huntsman have been highlighted in this Screen of the Week article.",
            "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/db/3858.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.99237"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.897321"
                }
            ],
            "overall_sentiment_score": 0.038827,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "HZO",
                    "relevance_score": "0.144897",
                    "ticker_sentiment_score": "0.033938",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HUN",
                    "relevance_score": "0.120952",
                    "ticker_sentiment_score": "0.047009",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AVT",
                    "relevance_score": "0.144897",
                    "ticker_sentiment_score": "0.028505",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.02428",
                    "ticker_sentiment_score": "0.050291",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AAN",
                    "relevance_score": "0.120952",
                    "ticker_sentiment_score": "0.008792",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "VSH",
                    "relevance_score": "0.07275",
                    "ticker_sentiment_score": "0.005791",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.02428",
                    "ticker_sentiment_score": "0.050291",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Cloud Migration Services Market to witness USD 7.09 Bn growth | North America to have largest share | Technavio",
            "url": "https://www.prnewswire.com/news-releases/cloud-migration-services-market-to-witness-usd-7-09-bn-growth--north-america-to-have-largest-share--technavio-301565827.html",
            "time_published": "20220613T072000",
            "authors": [
                "Technavio"
            ],
            "summary": "The market is mainly driven by the increasing adoption of cloud computing. In addition, factors such as the shift from the CAPEX model to the OPEX model and the increasing adoption of container-as-a-service will have a positive impact on the growth of the market.",
            "banner_image": "https://mma.prnewswire.com/media/1837269/IRTNTR43094.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.161647"
                }
            ],
            "overall_sentiment_score": 0.006443,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.062876",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DELL",
                    "relevance_score": "0.062876",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.062876",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMZN",
                    "relevance_score": "0.062876",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.187076",
                    "ticker_sentiment_score": "0.002562",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "VMW",
                    "relevance_score": "0.125362",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.125362",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DXC",
                    "relevance_score": "0.187076",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.062876",
                    "ticker_sentiment_score": "0.003666",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NTTDF",
                    "relevance_score": "0.062876",
                    "ticker_sentiment_score": "0.001874",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Microsoft Makes an Important Decision About Russia",
            "url": "https://www.thestreet.com/technology/microsoft-makes-an-important-decision-about-russia",
            "time_published": "20220610T150400",
            "authors": [
                "Luc Olinga"
            ],
            "summary": "Software giant Microsoft, like other multinationals, faces the dilemma about Russia after the country invaded Ukraine: Stay or go?",
            "banner_image": "https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTg2NjcyMzg5ODc3MTQ3MjA3/inflation_6.jpg",
            "source": "The Street",
            "category_within_source": "n/a",
            "source_domain": "www.thestreet.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": -0.252763,
            "overall_sentiment_label": "Somewhat-Bearish",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.566663",
                    "ticker_sentiment_score": "-0.258861",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.185829",
                    "ticker_sentiment_score": "-0.878318",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.185829",
                    "ticker_sentiment_score": "-0.878318",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "SAP",
                    "relevance_score": "0.246022",
                    "ticker_sentiment_score": "0.066927",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MCD",
                    "relevance_score": "0.06245",
                    "ticker_sentiment_score": "-0.878318",
                    "ticker_sentiment_label": "Bearish"
                }
            ]
        },
        {
            "title": "5 Low Price-to-Sales Stocks That Can Uplift Your Portfolio",
            "url": "https://www.zacks.com/stock/news/1937250/5-low-price-to-sales-stocks-that-can-uplift-your-portfolio",
            "time_published": "20220610T114700",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "Price-to-sales is a convenient tool to gauge the value of stocks incurring losses or are in an early development cycle. Stocks like AAN, HZO, AVT, VSH and HUN hold promise.",
            "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/65/143.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.995869"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.999999"
                }
            ],
            "overall_sentiment_score": 0.15649,
            "overall_sentiment_label": "Somewhat-Bullish",
            "ticker_sentiment": [
                {
                    "ticker": "HZO",
                    "relevance_score": "0.145372",
                    "ticker_sentiment_score": "0.143495",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HUN",
                    "relevance_score": "0.116532",
                    "ticker_sentiment_score": "0.143495",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AVT",
                    "relevance_score": "0.145372",
                    "ticker_sentiment_score": "0.143495",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.029231",
                    "ticker_sentiment_score": "0.263031",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "AAN",
                    "relevance_score": "0.116532",
                    "ticker_sentiment_score": "0.143495",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "VSH",
                    "relevance_score": "0.058422",
                    "ticker_sentiment_score": "-0.222805",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.029231",
                    "ticker_sentiment_score": "0.263031",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "Everyone Is Talking About This Stock. Is It a Good Long-Term Option?",
            "url": "https://www.fool.com/investing/2022/06/10/everyone-talking-about-stock-good-long-term-ibm/",
            "time_published": "20220610T105000",
            "authors": [
                "James Brumley"
            ],
            "summary": "A name cast off as a has-been is being rekindled, en route to its former glory.",
            "banner_image": "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F684403%2F060922-ibm.png&w=700&op=resize",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.87644"
                }
            ],
            "overall_sentiment_score": 0.121623,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "KD",
                    "relevance_score": "0.105673",
                    "ticker_sentiment_score": "-0.293369",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.404807",
                    "ticker_sentiment_score": "0.159159",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "AscendEX Appoints Shane Molidor as New CEO",
            "url": "https://www.benzinga.com/pressreleases/22/06/g27633118/ascendex-appoints-shane-molidor-as-new-ceo",
            "time_published": "20220609T185108",
            "authors": [
                "Globe Newswire"
            ],
            "summary": "Singapore, June 09, 2022 ( GLOBE NEWSWIRE ) -- AscendEX, a global cryptocurrency financial platform, announced today that Shane Molidor has been appointed Chief Executive Officer. He succeeds the exchange's founding partner, George Cao, who will continue to support AscendEX as Chairman.",
            "banner_image": "",
            "source": "Benzinga",
            "category_within_source": "News",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.890401"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.214378"
                }
            ],
            "overall_sentiment_score": 0.072642,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "IBM",
                    "relevance_score": "0.124776",
                    "ticker_sentiment_score": "0.005668",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.06258",
                    "ticker_sentiment_score": "0.022343",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:RUNE",
                    "relevance_score": "0.06258",
                    "ticker_sentiment_score": "0.033479",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.06258",
                    "ticker_sentiment_score": "0.022343",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "IT Services Market Size in Latin America to Increase by USD 33.68 billion by 2025| Evolving Opportunities with Accenture Plc & Amazon.com Inc| Technavio",
            "url": "https://www.prnewswire.com/news-releases/it-services-market-size-in-latin-america-to-increase-by-usd-33-68-billion-by-2025-evolving-opportunities-with-accenture-plc--amazoncom-inc-technavio-301564041.html",
            "time_published": "20220609T154000",
            "authors": [
                "Technavio"
            ],
            "summary": "• Drivers: The key factors driving growth in the IT services market in are the rising focus on core competencies and improved efficiency. Companies outsource IT-related requirements such as application and infrastructure management to IT outsourcing service providers.",
            "banner_image": "https://mma.prnewswire.com/media/1835517/IRTNTR71571.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": 0.00566,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.05242",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AEXAF",
                    "relevance_score": "0.306771",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.489116",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMZN",
                    "relevance_score": "0.306771",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.05242",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DELL",
                    "relevance_score": "0.257641",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.05242",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CAPMF",
                    "relevance_score": "0.207438",
                    "ticker_sentiment_score": "0.001564",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Kerala: IBM launches automation innovation centre to meet business demands",
            "url": "https://www.business-standard.com/article/companies/kerala-ibm-launches-automation-innovation-centre-to-meet-business-demands-122060801402_1.html",
            "time_published": "20220609T040300",
            "authors": [
                "ANI"
            ],
            "summary": "To be in line with the business demands in India, the International Business Machines (IBM) on Monday launched Automation Innovation Centre at Brigade World Trade Centre Info Park in ...",
            "banner_image": "https://bsmedia.business-standard.com/_media/bs/img/article/2019-10/22/full/1571766458-7301.jpg?im=Resize,width=640",
            "source": "Business Standard",
            "category_within_source": "Companies",
            "source_domain": "www.business-standard.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                }
            ],
            "overall_sentiment_score": 0.068322,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "IBM",
                    "relevance_score": "0.778943",
                    "ticker_sentiment_score": "0.068322",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "WIT",
                    "relevance_score": "0.362118",
                    "ticker_sentiment_score": "0.056998",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "7 Tempting Tech Stocks With Above-Average Dividends",
            "url": "https://www.kiplinger.com/investing/stocks/tech-stocks/604778/tempting-tech-stocks-with-above-average-dividends",
            "time_published": "20220608T193903",
            "authors": [
                "Lisa Springer"
            ],
            "summary": "Finding tech stocks with dividends isn't the easiest task for investors. Most don't issue cash payouts to shareholders, but the few that do become even more enticing during periods of market volatility due to their ability to offer a unique combination of growth and income.",
            "banner_image": "https://mediacloud.kiplinger.com/image/private/s--d953pOka--/f_auto,t_primary-image-mobile@1/v1654713261/Investing/tech-stocks-with-dividends-2022.jpg",
            "source": "Kiplinger",
            "category_within_source": "n/a",
            "source_domain": "www.kiplinger.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.692272"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.092377,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "VG",
                    "relevance_score": "0.030427",
                    "ticker_sentiment_score": "-0.016725",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GLW",
                    "relevance_score": "0.136285",
                    "ticker_sentiment_score": "0.206505",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "GS",
                    "relevance_score": "0.045626",
                    "ticker_sentiment_score": "0.040272",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GRMN",
                    "relevance_score": "0.106204",
                    "ticker_sentiment_score": "0.294866",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "AWON",
                    "relevance_score": "0.015216",
                    "ticker_sentiment_score": "0.375786",
                    "ticker_sentiment_label": "Bullish"
                },
                {
                    "ticker": "DTST",
                    "relevance_score": "0.030427",
                    "ticker_sentiment_score": "0.040725",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "BCS",
                    "relevance_score": "0.015216",
                    "ticker_sentiment_score": "-0.10938",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.121266",
                    "ticker_sentiment_score": "0.127836",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "C",
                    "relevance_score": "0.045626",
                    "ticker_sentiment_score": "-0.049825",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "VMW",
                    "relevance_score": "0.030427",
                    "ticker_sentiment_score": "0.083659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MS",
                    "relevance_score": "0.015216",
                    "ticker_sentiment_score": "0.060485",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "STX",
                    "relevance_score": "0.091104",
                    "ticker_sentiment_score": "0.070894",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AVGO",
                    "relevance_score": "0.121266",
                    "ticker_sentiment_score": "0.125511",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DELL",
                    "relevance_score": "0.091104",
                    "ticker_sentiment_score": "0.017942",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "One of the Best-Performing Tech Stocks Will Surprise You",
            "url": "https://www.thestreet.com/investing/ibm-stock-is-best-performing-stocks-in-technology-sector",
            "time_published": "20220608T180400",
            "authors": [
                "Bret Kenwell"
            ],
            "summary": "IBM stock has quickly become one of the top-performing tech stocks of 2022. Here's where to buy the dip.",
            "banner_image": "https://www.thestreet.com/.image/t_share/MTkwMDU4Njc3Mzg0NzgzMTI5/ibm.png",
            "source": "The Street",
            "category_within_source": "n/a",
            "source_domain": "www.thestreet.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.413559"
                }
            ],
            "overall_sentiment_score": -0.054382,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "IBM",
                    "relevance_score": "0.950798",
                    "ticker_sentiment_score": "-0.054382",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.581987",
                    "ticker_sentiment_score": "-0.21104",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.271475",
                    "ticker_sentiment_score": "0.004744",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Microsoft Goes Aggressive In Its Protest Against Russia's Ukraine Invasion - Read How",
            "url": "https://www.benzinga.com/news/22/06/27606220/microsoft-goes-aggressive-in-its-protest-against-russias-ukraine-invasion-read-how",
            "time_published": "20220608T133149",
            "authors": [
                "Anusuya Lahiri"
            ],
            "summary": "In an email accessed by Bloomberg, Microsoft Corp MSFT disclosed materially scaling down its operations in Russia following the Russian invasion of Ukraine. Microsoft joined the likes of International Business Machines Corp IBM and Apple Inc AAPL, cutting back or exiting the country after the ...",
            "banner_image": "https://cdn.benzinga.com/files/images/story/2022/06/08/abtech_6.png?optimize=medium&dpr=2&auto=webp&width=3840",
            "source": "Benzinga",
            "category_within_source": "News",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.5"
                }
            ],
            "overall_sentiment_score": -0.195597,
            "overall_sentiment_label": "Somewhat-Bearish",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.942401",
                    "ticker_sentiment_score": "-0.150683",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "NKE",
                    "relevance_score": "0.412523",
                    "ticker_sentiment_score": "-0.646456",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.584208",
                    "ticker_sentiment_score": "-0.486787",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.584208",
                    "ticker_sentiment_score": "-0.347183",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                }
            ]
        },
        {
            "title": "IBM zSystems Solutions Boost Siam Commercial Bank Security",
            "url": "https://www.zacks.com/stock/news/1934964/ibm-zsystems-solutions-boost-siam-commercial-bank-security",
            "time_published": "20220606T142000",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "IBM's key expertise in offering a secure, resilient enterprise platform for mission critical apps and data on hybrid multi-cloud will help minimize fraudulent activities in financial transactions.",
            "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/3a/521.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Real Estate & Construction",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.9545"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.87644"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.078893,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "SWIR",
                    "relevance_score": "0.149873",
                    "ticker_sentiment_score": "0.103837",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IDCC",
                    "relevance_score": "0.100245",
                    "ticker_sentiment_score": "0.103837",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CLFD",
                    "relevance_score": "0.198914",
                    "ticker_sentiment_score": "0.103837",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.429197",
                    "ticker_sentiment_score": "0.065017",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Vocational Education and Training Market Worth $896.01 Billion by 2029 - Exclusive Report by Meticulous Research®",
            "url": "https://www.benzinga.com/pressreleases/22/06/g27566767/vocational-education-and-training-market-worth-896-01-billion-by-2029-exclusive-report-by-meticulo",
            "time_published": "20220606T135926",
            "authors": [
                "Globe Newswire"
            ],
            "summary": "Redding, California, June 06, 2022 ( GLOBE NEWSWIRE ) -- According to a new market research report titled, 'Vocational Education and Training Market by Supplier Institution ( Public, Private ) , User's Gender ( Male, Female ) , and End User ( Students, Office Workers ) - Global Forecast to",
            "banner_image": "",
            "source": "Benzinga",
            "category_within_source": "General",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.538269"
                }
            ],
            "overall_sentiment_score": 0.04869,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "HPE",
                    "relevance_score": "0.020581",
                    "ticker_sentiment_score": "0.009284",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.020581",
                    "ticker_sentiment_score": "0.009284",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.020581",
                    "ticker_sentiment_score": "0.009284",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.041149",
                    "ticker_sentiment_score": "0.055211",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ADBE",
                    "relevance_score": "0.020581",
                    "ticker_sentiment_score": "0.009284",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.020581",
                    "ticker_sentiment_score": "0.009284",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Amazon Stock Powers Higher Ahead of 20-For-1 Split Debut: Opening Pegged Near $125 Each",
            "url": "https://www.thestreet.com/markets/amazon-stock-gains-on-split-debut-opening-pegged-near-125",
            "time_published": "20220606T124300",
            "authors": [
                "Martin Baccardax"
            ],
            "summary": "Amazon will begin trading on a 20-for-1 split adjusted basis Monday, with investors pegging its opening bell price at around $125 per share.",
            "banner_image": "https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTgyNjM2NjI3MzQ3MTIxNTcx/nyse-trader_4.jpg",
            "source": "The Street",
            "category_within_source": "n/a",
            "source_domain": "www.thestreet.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Energy & Transportation",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.166667"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.166667"
                }
            ],
            "overall_sentiment_score": -0.022009,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "T",
                    "relevance_score": "0.060342",
                    "ticker_sentiment_score": "-0.044107",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "-0.007414",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "0.008209",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "RTX",
                    "relevance_score": "0.40382",
                    "ticker_sentiment_score": "0.001943",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMZN",
                    "relevance_score": "0.455221",
                    "ticker_sentiment_score": "-0.020224",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "XOM",
                    "relevance_score": "0.594987",
                    "ticker_sentiment_score": "0.001943",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "INTC",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "0.008209",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "0.008209",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.237958",
                    "ticker_sentiment_score": "0.003839",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "TSLA",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "-0.000181",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FB",
                    "relevance_score": "0.12034",
                    "ticker_sentiment_score": "0.038835",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "PFE",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "0.001943",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMGN",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "0.001943",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GS",
                    "relevance_score": "0.060342",
                    "ticker_sentiment_score": "2.9e-05",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HON",
                    "relevance_score": "0.179655",
                    "ticker_sentiment_score": "0.001943",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "The Final Call: Starbucks And IBM",
            "url": "https://www.benzinga.com/trading-ideas/long-ideas/22/06/27559688/the-final-call-starbucks-and-ibm",
            "time_published": "20220606T123844",
            "authors": [
                "Priya Nigam"
            ],
            "summary": "On CNBC's \"The Final Call,\" Michael Khouw of Optimize Advisors recommended Starbucks Corporation ( NASDAQ: SBUX ) and International Business Machines Corp ( NYSE: IBM ) , saying that \"they're so bad, they're good.\" Check out other stocks making big moves in the premarket. Carter Worth also recomm",
            "banner_image": "https://cdn.benzinga.com/files/images/story/2022/06/06/chart16.jpg?width=1200&height=800&fit=crop",
            "source": "Benzinga",
            "category_within_source": "Trading",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.214378"
                }
            ],
            "overall_sentiment_score": -0.114611,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "IBM",
                    "relevance_score": "0.938938",
                    "ticker_sentiment_score": "-0.075468",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SBUX",
                    "relevance_score": "0.938938",
                    "ticker_sentiment_score": "-0.127154",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "AICTE, MoE and MSDE join hands to launch ABCDEFGHI - a free skilling platform on emerging technologies | The Financial Express",
            "url": "https://www.financialexpress.com/education-2/aicte-moe-and-msde-join-hands-to-launch-abcdefghi-a-free-skilling-platform-on-emerging-technologies/2549406/",
            "time_published": "20220606T022126",
            "authors": [],
            "summary": "The platform will be launched on June 6, 2022 at 3:30 pm by Dharmendra Pradhan, Union Education Minister and Minister of Skill Development and Entrepreneurship.",
            "banner_image": "https://www.financialexpress.com/wp-content/uploads/2022/06/AICTE-logo.jpg",
            "source": "The Financial Express",
            "category_within_source": "n/a",
            "source_domain": "www.financialexpress.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                }
            ],
            "overall_sentiment_score": 0.130265,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.096129",
                    "ticker_sentiment_score": "0.130265",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.190868",
                    "ticker_sentiment_score": "0.130265",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.096129",
                    "ticker_sentiment_score": "0.130265",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Exclusive: AICTE, MoE and MSDE join hands to launch Digital Skilling - a free skilling platform on emerging technologies | The Financial Express",
            "url": "https://www.financialexpress.com/education-2/aicte-moe-and-msde-join-hands-to-launch-digital-skilling-a-free-skilling-platform-on-emerging-technologies/2549406/",
            "time_published": "20220606T022126",
            "authors": [],
            "summary": "The platform will be launched on June 6, 2022 at 3:30 pm by Dharmendra Pradhan, Union Education Minister and Minister of Skill Development and Entrepreneurship.",
            "banner_image": "https://www.financialexpress.com/wp-content/uploads/2022/06/AICTE-logo.jpg",
            "source": "The Financial Express",
            "category_within_source": "n/a",
            "source_domain": "www.financialexpress.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                }
            ],
            "overall_sentiment_score": 0.130265,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.095593",
                    "ticker_sentiment_score": "0.130265",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.189819",
                    "ticker_sentiment_score": "0.130265",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.095593",
                    "ticker_sentiment_score": "0.130265",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "SHAREHOLDER ALERT: Pomerantz Law Firm Investigates Claims On Behalf of Investors International Business Machines Corporation - IBM",
            "url": "https://www.benzinga.com/pressreleases/22/06/g27557433/shareholder-alert-pomerantz-law-firm-investigates-claims-on-behalf-of-investors-international-busi",
            "time_published": "20220605T041714",
            "authors": [
                "Globe Newswire"
            ],
            "summary": "NEW YORK, June 05, 2022 ( GLOBE NEWSWIRE ) -- Pomerantz LLP is investigating claims on behalf of investors of International Business Machines Corporation ( \"IBM\" or the \"Company\" ) ( NYSE:IBM ) . Such investors are advised to contact Robert S. Willoughby at newaction@pomlaw.com or 888-476-652",
            "banner_image": "",
            "source": "Benzinga",
            "category_within_source": "News",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.538269"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.161647"
                }
            ],
            "overall_sentiment_score": -0.036394,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "IBM",
                    "relevance_score": "0.529363",
                    "ticker_sentiment_score": "-0.024332",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Searches For iPod Spike On eBay After Discontinuation",
            "url": "https://www.benzinga.com/news/22/06/27556243/searches-for-ipod-spike-on-ebay-after-discontinuation",
            "time_published": "20220604T193204",
            "authors": [
                "Chris Katje"
            ],
            "summary": "The discontinuation of a popular music playing device by a tech giant has led to sales of used players seeing increasing attention. What Happened: Technology giant Apple Inc ( NASDAQ: AAPL ) announced recently it was discontinuing the iPod music player device. Launched in 2001, the iPod was an imp",
            "banner_image": "https://cdn.benzinga.com/files/images/story/2022/06/04/ipod2.jpg?width=1200&height=800&fit=crop",
            "source": "Benzinga",
            "category_within_source": "News",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.538269"
                }
            ],
            "overall_sentiment_score": 0.038378,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "EBAY",
                    "relevance_score": "0.44453",
                    "ticker_sentiment_score": "0.010895",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.155803",
                    "ticker_sentiment_score": "0.006832",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.923065",
                    "ticker_sentiment_score": "0.04995",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Elon Musk's office mandate, recession fears complicate new work era",
            "url": "https://www.business-standard.com/article/international/elon-musk-s-office-mandate-recession-fears-complicate-new-work-era-122060500004_1.html",
            "time_published": "20220604T183200",
            "authors": [
                "Bloomberg"
            ],
            "summary": "Musk's recent demand that all Tesla Inc. employees get back to their desks or find work elsewhere has made him the latest figurehead of the return-to-office movement",
            "banner_image": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-05/21/full/1653103261-2256.jpg?im=Resize,width=640",
            "source": "Business Standard",
            "category_within_source": "Top Stories",
            "source_domain": "www.business-standard.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                }
            ],
            "overall_sentiment_score": -0.411575,
            "overall_sentiment_label": "Bearish",
            "ticker_sentiment": [
                {
                    "ticker": "TGT",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.849748",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "NFLX",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.548543",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "AXP",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "0.014189",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.548543",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "GPS",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.849748",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "F",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.015865",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "JPM",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.761013",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.015865",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AAPL",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "0.014189",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DE",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.849748",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "CS",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.761013",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "TSLA",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.144761",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "WMT",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.849748",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "HOOD",
                    "relevance_score": "0.041039",
                    "ticker_sentiment_score": "-0.548543",
                    "ticker_sentiment_label": "Bearish"
                }
            ]
        },
        {
            "title": "Artificial Intelligence  ( AI )  Market in Retail Sector Market - 40% of Growth to Originate from North America|Driven by the Rise in Investments & R and D in AI Startups| Technavio",
            "url": "https://www.prnewswire.com/news-releases/artificial-intelligence-ai-market-in-retail-sector-market---40-of-growth-to-originate-from-north-americadriven-by-the-rise-in-investments--r-and-d-in-ai-startups-technavio-301560243.html",
            "time_published": "20220604T004500",
            "authors": [
                "Technavio"
            ],
            "summary": "The key factor driving the global artificial intelligence ( AI ) market growth in the retail sector is the rise in investments and R&D in AI startups.",
            "banner_image": "https://mma.prnewswire.com/media/1831751/Artificial_Intelligence.jpg?w=1000",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.161647"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.013818,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "NVDA",
                    "relevance_score": "0.120511",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.040307",
                    "ticker_sentiment_score": "0.029155",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CAPMF",
                    "relevance_score": "0.040307",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMZN",
                    "relevance_score": "0.040307",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SAP",
                    "relevance_score": "0.040307",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SFTBF",
                    "relevance_score": "0.040307",
                    "ticker_sentiment_score": "0.029155",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "INFY",
                    "relevance_score": "0.120511",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "INTC",
                    "relevance_score": "0.120511",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.455797",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.080512",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ZY",
                    "relevance_score": "0.040307",
                    "ticker_sentiment_score": "0.029155",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.238289",
                    "ticker_sentiment_score": "0.014737",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ACN",
                    "relevance_score": "0.080512",
                    "ticker_sentiment_score": "0.00066",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "A $16.7 Billion Global Opportunity for DevOps by 2026 - New Research from StrategyR",
            "url": "https://www.prnewswire.com/news-releases/a-16-7-billion-global-opportunity-for-devops-by-2026---new-research-from-strategyr-301557748.html",
            "time_published": "20220603T153500",
            "authors": [
                "Global Industry Analysts",
                "Inc."
            ],
            "summary": "• Access to our digital archives and MarketGlass Research Platform Companies: 200 - Players covered include Atlassian Amazon Web Services Broadcom Inc. Northern.tech AS Chef Software Cigniti Technologies Limited Clarive CloudBees, Inc. Docker Inc. Dell Inc. GitLab Google Inc. HashiCorp",
            "banner_image": "https://mma.prnewswire.com/media/1829238/Global_Opportunity_for_DevOps_by_2026.jpg?w=500",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Real Estate & Construction",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.25"
                }
            ],
            "overall_sentiment_score": 0.004924,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "TEAM",
                    "relevance_score": "0.02627",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GTLB",
                    "relevance_score": "0.078697",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.130784",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPE",
                    "relevance_score": "0.307283",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "APG",
                    "relevance_score": "0.02627",
                    "ticker_sentiment_score": "0.007992",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.331422",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HCP",
                    "relevance_score": "0.233058",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MFGP",
                    "relevance_score": "0.02627",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.02627",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.02627",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "HPQ",
                    "relevance_score": "0.307283",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AVGO",
                    "relevance_score": "0.02627",
                    "ticker_sentiment_score": "0.00087",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "With Market Size Valued at $276.3 Billion by 2026, it`s a Healthy Outlook for the Global Artificial Intelligence  ( AI )  Market",
            "url": "https://www.prnewswire.com/news-releases/with-market-size-valued-at-276-3-billion-by-2026--its-a-healthy-outlook-for-the-global-artificial-intelligence-ai-market-301557712.html",
            "time_published": "20220603T111500",
            "authors": [
                "Inc.",
                "Global Industry Analysts"
            ],
            "summary": "With Market Size Valued at $276.3 Billion by 2026, it`sa Healthy Outlook for the Global Artificial Intelligence ( AI ) Market PR Newswire",
            "banner_image": "https://mma.prnewswire.com/media/1829205/Global_Artificial_Intelligence_Market.jpg?w=500",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.929393"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.045413,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "NVDA",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SMAWF",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GOOG",
                    "relevance_score": "0.219759",
                    "ticker_sentiment_score": "0.071733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.499855",
                    "ticker_sentiment_score": "0.071733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GE",
                    "relevance_score": "0.374633",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SSNLF",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CSCO",
                    "relevance_score": "0.110947",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SAP",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "DTST",
                    "relevance_score": "0.037089",
                    "ticker_sentiment_score": "0.014674",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MA",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.048158",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "INTC",
                    "relevance_score": "0.219759",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NPPXF",
                    "relevance_score": "0.055608",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ORCL",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "OMRNF",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMD",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.183853",
                    "ticker_sentiment_score": "0.071733",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FB",
                    "relevance_score": "0.374633",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "BIDU",
                    "relevance_score": "0.037089",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "ROK",
                    "relevance_score": "0.018549",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MU",
                    "relevance_score": "0.255202",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "EGAN",
                    "relevance_score": "0.219759",
                    "ticker_sentiment_score": "0.001053",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "IBM SHAREHOLDER ALERT: Jakubowitz Law Reminds IBM Shareholders of a Lead Plaintiff Deadline of June 6, 2022",
            "url": "https://www.prnewswire.com/news-releases/ibm-shareholder-alert-jakubowitz-law-reminds-ibm-shareholders-of-a-lead-plaintiff-deadline-of-june-6-2022-301560733.html",
            "time_published": "20220603T094500",
            "authors": [
                "Jakubowitz Law"
            ],
            "summary": "NEW YORK, June 3, 2022 /PRNewswire/ -- Jakubowitz Law announces that a securities fraud class action lawsuit has commenced on behalf of shareholders of International Business Machines Corporation ( NYSE: IBM ) . To receive updates on the lawsuit, fill out the form:",
            "banner_image": "",
            "source": "PR Newswire",
            "category_within_source": "n/a",
            "source_domain": "www.prnewswire.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.108179"
                }
            ],
            "overall_sentiment_score": -0.567801,
            "overall_sentiment_label": "Bearish",
            "ticker_sentiment": [
                {
                    "ticker": "IBM",
                    "relevance_score": "0.531971",
                    "ticker_sentiment_score": "-0.567801",
                    "ticker_sentiment_label": "Bearish"
                }
            ]
        },
        {
            "title": "This Neglected Tech Stock Is Trouncing the Market in 2022",
            "url": "https://www.fool.com/investing/2022/06/02/this-neglected-tech-stock-is-trouncing-the-market/",
            "time_published": "20220602T120000",
            "authors": [
                "Timothy Green"
            ],
            "summary": "While tech stocks tumble, IBM is holding its own.",
            "banner_image": "https://media.ycharts.com/charts/fac1a4f5c6e3099282e8799a03fb9fc2.png",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.684621"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.214378"
                }
            ],
            "overall_sentiment_score": -0.108248,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.131787",
                    "ticker_sentiment_score": "-0.787874",
                    "ticker_sentiment_label": "Bearish"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.593261",
                    "ticker_sentiment_score": "0.000809",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "The Zacks Analyst Blog Highlights IBM, Goldman Sachs, Diageo, ServiceNow and Progressive",
            "url": "https://www.zacks.com/stock/news/1932272/the-zacks-analyst-blog-highlights-ibm-goldman-sachs-diageo-servicenow-and-progressive",
            "time_published": "20220601T132800",
            "authors": [
                "Zacks Investment Research"
            ],
            "summary": "IBM, Goldman Sachs, Diageo, ServiceNow and Progressive are part of Zacks top Analyst Blog.",
            "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/3a/521.jpg",
            "source": "Zacks Commentary",
            "category_within_source": "n/a",
            "source_domain": "www.zacks.com",
            "topics": [
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.310843"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.310843"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.723405"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                }
            ],
            "overall_sentiment_score": -0.045986,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "GS",
                    "relevance_score": "0.115435",
                    "ticker_sentiment_score": "-0.246682",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "DEO",
                    "relevance_score": "0.153495",
                    "ticker_sentiment_score": "0.237765",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "PGR",
                    "relevance_score": "0.115435",
                    "ticker_sentiment_score": "-0.000871",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IBM",
                    "relevance_score": "0.1912",
                    "ticker_sentiment_score": "-0.12912",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "NOW",
                    "relevance_score": "0.077107",
                    "ticker_sentiment_score": "-0.000871",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSFT",
                    "relevance_score": "0.038598",
                    "ticker_sentiment_score": "-0.452163",
                    "ticker_sentiment_label": "Bearish"
                }
            ]
        }
    ]
}