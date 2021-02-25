

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
  
}

  async function getTrend() {
    const trendURL = 'https://api.coingecko.com/api/v3/search/trending'
    try {
      const response = await axios.get(trendURL)
      const trend = response.data.coins
      showTrendInfo(trend)
      // console.log("response", response)
      // console.log('name', trend[0].item.name)
      console.log(trend)
      return response
      } catch (err) {
      console.error(err)
    }
    // getTrend(trend)
    
  
    function showTrendInfo(trend) {
      // console.log('windowFunc', trend)
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
      console.log('trend', trend)
    
    }
    
  }
getTrend()
  



