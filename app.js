
// Gets selected coin from dropdown on click
function getValue(e) {
  e.preventDefault()
  const selectedCurrency = document.querySelector('#select-currency').value

  getData(selectedCurrency)
  
}

const form = document.querySelector('form')
form.addEventListener('submit', getValue)
// Pulls selected coin from API
async function getData(selectedCurrency) {
  const dataURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${selectedCurrency}`
  try {
    removeInfo()
    const response = await axios.get(dataURL)
    const coin = response.data[0]
    showCoinInfo(coin)
    return response
  } catch (err) {
    console.error(err)
  }
  function showCoinInfo(coin) {
  // defines data to be displayed about selected coin
    const coinContainer = document.querySelector("#currency-info")
    const coinInfo = `
      <h1 class= name >${coin.name}</h1>
      <h2 class= current-price>Current Price: $${coin.current_price}</h2>
      <p class = price-change>Price Change Last 24Hrs: $${coin.price_change_24h}</p>
      <p class = high>24Hr High: $${coin.high_24h}</p>
      <p class = low>24Hr Low: $${coin.low_24h}</p>
      <img src = "${coin.image}" alt="logo" class="logo"/>
      `
    //appends coin data to HTML
    coinContainer.insertAdjacentHTML('beforeend', coinInfo)
  }
  
// removes previous coin selection
  function removeInfo() {
    const coinContainer = document.querySelector("#currency-info")
    while (coinContainer.lastChild) {
      coinContainer.removeChild(coinContainer.lastChild)
    }
  }
  
}
// Pulls coin names that have been trending in the lasst 24 hours
  async function getTrend() {
    const trendURL = 'https://api.coingecko.com/api/v3/search/trending'
    try {
      const response = await axios.get(trendURL)
      const trend = response.data.coins
      showTrendInfo(trend)
      return response
      } catch (err) {
      console.error(err)
    }
    
  // Function that displays and appends current trending coins
    function showTrendInfo(trend) {
      const trendContainer = document.querySelector("#hot-coins")
      
      const trendInfo = `
        <p class='trendName1'>${trend[0].item.name}</p>
        <p class='trendName2'>${trend[1].item.name}</p>
        <p class='trendName3'>${trend[2].item.name}</p>
        <p class='trendName4'>${trend[3].item.name}</p>
        <p class='trendName5'>${trend[4].item.name}</p>
        <p class='trendName6'>${trend[5].item.name}</p>
      `
      trendContainer.insertAdjacentHTML('beforeend', trendInfo)
    
    }
    
  }
getTrend()
  


const options = {
  // Third API URL for news headlines
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
  params: {
    q: 'crypto',
    pageNumber: '1',
    pageSize: '10',
    autoCorrect: 'true',
    fromPublishedDate: 'null',
    toPublishedDate: 'null'
  },
  headers: {
    'x-rapidapi-key': '92bee75a09msh0c9f35160413b4fp1e7e83jsnf1d6c54ab98d',
    'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};

async function getNews () {
  try {
    const response = await axios(options)
    const news = response.data.value

    showNewsInfo(news)
    return response
    
    } catch (err) {
    console.error(err)
  }
  
// gets and appends top 3 news headlines
  function showNewsInfo(news) {
    const newsContainer = document.querySelector("#news")
    const newsInfo = `
    <a href =${news[0].url} class='news1'>${news[0].title, news[0].description}</a>
    <a href =${news[1].url} class='news2'>${news[1].title, news[1].description}</a>
    <a href =${news[2].url} class='news3'>${news[2].title, news[2].description}</a>
    `
  newsContainer.insertAdjacentHTML('beforeend', newsInfo)
  }
  
}
getNews()