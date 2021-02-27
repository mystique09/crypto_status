
let response = {}

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
.then(function(res){
  response = res
})

setTimeout(function() {
  console.log(Object.keys(response.json()))
}, 1000);