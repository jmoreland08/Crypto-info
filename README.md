
## Project Name

Cryto-Info 

## Project Description
My site will allow the user too access current cryto currency information via a drop down menu as well as provide other relevent information relating to cryto currencies. It will be built desktop first.

## API and Data Sample
``` https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=litecoin

        "id": "litecoin",
        "symbol": "ltc",
        "name": "Litecoin",
        "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
        "current_price": 207.06,
        "market_cap": 13722706333,
        "market_cap_rank": 8,
        "total_volume": 10885168693,
        "high_24h": 228.18,
        "low_24h": 190.93,
        "price_change_24h": -20.85591023,
        "price_change_percentage_24h": -9.15081,
        "market_cap_change_24h": -1502185382.1869125,
        "market_cap_change_percentage_24h": -9.86664,
        "circulating_supply": 66534152.7430299,
        "total_supply": 84000000.0,
        "ath_change_percentage": -42.98505,
        "ath_date": "2017-12-18T00:00:00.000Z",
        "last_updated": "2021-02-22T20:51:30.194Z"
        
2nd API: https://api.coingecko.com/api/v3/search/trending
"coins": [
        {
            "item": {
                "id": "modefi",
                "name": "Modefi",
                "symbol": "MOD",
                "market_cap_rank": 739,
                "thumb": "https://assets.coingecko.com/coins/images/13980/thumb/modefi_logo.png?1613453111",
                "large": "https://assets.coingecko.com/coins/images/13980/large/modefi_logo.png?1613453111",
                "score": 0
```
## Wireframes
[Wireframe](https://wireframe.cc/P0LwSt) 


### MVP/PostMVP

#### MVP 
- Appending Data rendered data to page( price, image, percentage chage

- Dropdown list of Crypto coins

- Generate data from item selected on dropdown via API

- Generate Trending coin list via second API

#### PostMVP 

- Add third API for news feed

- Have background color change based on if coin is up or down in past 24 hrs

- Super Post MVP: Create horizontal scrolling bar

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete 
|Feb 24| Pseudocode / actual code/ set up API | Incomplete
|Feb 24| actual code / MVP / | Incomplete
|Feb 25| Initial Clickable Model/ intial CSS  | Incomplete
|Feb 26| Post MVP / dial in CSS | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/pUQIou

## Timeframes
| Component                              | Priority | Estimated Time | Time Invested | Actual Time |
|-------------------------------         |----------|----------------|---------------|-------------|
| Core Structure                         | H        | 3 hours        |       1 hour  |             |
| P.code/A.code setup                    | H        | 3 Hours        |     3.5 hours |             |
| Set up API                             | H        | 2 Hours        |       6 hrs   |             |
| Set up dropdown functionality          | H        | 3 hours        |       2 hour  |             |
| Append rederlist data points to page   | H        | 3 Hours        |       30 mins |             |
| Build and append trending coins list   | H        | 3 Hours        |        1 hr   |             |
| Create page asthetic CSS               | M        | 3 Hours        |        6 hrs  |             |
| Initial Clickable Model                | H        | 3 Hours        |        2 hrs  |             |
| Style News Feed                        | M        | 2 Hours        |       30 min  |             |
| Post MVP                               | L        | 3 Hours        |       2 hours |             |
| Render List CSS                        | M        | 3 Hours        |       2 hours |             |
| Total                                  |          | 3 Hours        |         26.5  |             |
## Code Snippet


## Change Log
   
