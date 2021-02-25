

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
      <h1 class= name >Name: ${coin.name}</h1>
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
  
  
  
  // async function getTrend() {
  //   const trendURL = 'https://api.coingecko.com/api/v3/search/trending'
  //   try {
  //     const response = await axios.get(trendURL)
  //     const trend = response.data[0]
  //     showTrendInfo(trend)
  //     console.log(trend)
  //     return response

  //   } catch (err) {
  //     console.error(err)
  //   }
    
  //   window.onload = function showTrendInfo(trend) {
  //     console.log('here', trend)
  //     const trendContainer = document.querySelector("#hot-coins")
  //     console.log(trendContainer)
  //     const trendInfo = `
  //       <h1 class= trendName >Name: ${trend.name}</h1>
  //       // <h2 class= currentPrice >Current Price: $${trend.current_price}</h2>
  //       // <p class = priceChange >Price Change Last 24Hrs: $${trend.price_change_24h}</p>
  //       // <p class = high >24Hr High: $${trend.high_24h}</p>
  //       // <p class = low >24Hr Low: $${trend.low_24h}</p>
  //     `
  //     trendContainer.insertAdjacentHTML('beforeend', trendInfo)
  //     console.log('trend', trendInfo)
  //   }

  // }
  // getTrend()


}
