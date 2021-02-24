

function getValue(e) {
  e.preventDefault()
  const selectedCurrency = document.querySelector('#select-currency').value

  getData(selectedCurrency)
  console.log(selectedCurrency)
  
}

const form = document.querySelector('form')
form.addEventListener('submit', getValue)
 
async function getData(selectedCurrency) {
  const dataURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${selectedCurrency}`
try {
  const response = await axios.get(dataURL)
  const coin = response.data[0]
  console.log(`name: ${coin.name} symbol: ${coin.symbol}`)
  return response
  
} catch (err) {
  console.error(err)
  
}
}
