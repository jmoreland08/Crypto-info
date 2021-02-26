

function getValue(e) {
  e.preventDefault()
  const selectedCurrency = document.querySelector('#select-currency').value

  getData(selectedCurrency)
  
}

const form = document.querySelector('form')
form.addEventListener('submit', getValue)

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
  
    const coinContainer = document.querySelector("#currency-info")
    const coinInfo = `
      <h1 class= name >${coin.name}</h1>
      <h2 class= current-price >Current Price: $${coin.current_price}</h2>
      <p class = price-change >Price Change Last 24Hrs: $${coin.price_change_24h}</p>
      <p class = high >24Hr High: $${coin.high_24h}</p>
      <p class = low >24Hr Low: $${coin.low_24h}</p>
      <img src = "${coin.image}" alt="logo" class="logo"/>
      `
    coinContainer.insertAdjacentHTML('beforeend', coinInfo)
  }

  function removeInfo() {
    const coinContainer = document.querySelector("#currency-info")
    while (coinContainer.lastChild) {
      coinContainer.removeChild(coinContainer.lastChild)
    }
  }
  
}

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
    
  
    function showTrendInfo(trend) {
      const trendContainer = document.querySelector("#hot-coins")
      const trendInfo = `
        <a class='trendName1'>${trend[0].item.name}</p>
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

// async function getNews () {
//   try {
//     const response = await axios(options)
//     const news = response.data.value
//     console.log('news', news)
//     showNewsInfo(news)
//     return response
    
//     } catch (err) {
//     console.error(err)
//   }
  

//   function showNewsInfo(news) {
//     const newsContainer = document.querySelector("#news")
//     const newsInfo = `
//       <p class='news1'>${news[0].title, news[0].description}</p>
//       <p class='news2'>${news[1].title, news[1].description}</p>
      
//     `
//     newsContainer.insertAdjacentHTML('beforeend', newsInfo)
//   console.log(newsContainer)
//   }
  
// }
// getNews()