<style>
  :root {
    font-size: 32px;
  }

  * {
    margin: 0;
    padding: 0 !important;
    box-sizing: border-box;
  }
  
 .content {
   display: grid;
   grid-template-columns: 10px 1fr 10px;
   grid-template-rows: 70px 1fr;
   grid-gap: 30px;
   height: 100vh;
   width: 100vw;
 }
 
 .content .cryptos {
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   grid-column: 2/3;
   grid-row: 2/4;
   width: 100%;
 } 
 
  .content > h1 {
    justify-self: center;
    align-self: center;
    font-size: 1.5rem;
    grid-column: 2/3;
    grid-row: 1/2;
  }
  
  .crypto-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid red;
    margin: 20px;
    height: 180px;
    width: 100%;
    background: #2b3389;
    color: white;
  }
  
  .crypto-wrapper > h1 > img {
    position: relative;
    height: 50px;
    width: 50px;
  }
  
  .crypto-wrapper .crypto-prices {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height: 80px;
  }
  
  .crypto-prices .buy {
    border-radius: 6px;
    background: green;
  }
  
  .crypto-prices .sell {
    border-radius: 6px;
    background: red;
  }
  
</style>

<script>

  import {onMount} from "svelte"
  import axios from "axios"
  
  /*
  let dummyData = [
    {name: "BTC", buy: 46400, sell: 44600, currency: {name: "USD", symbol: "$"}}, 
    {name: "ETH", buy: 46400, sell: 44600, currency: {name: "USD", symbol: "$"}}, 
    {name: "BCH", buy: 46400, sell: 44600, currency: {name: "USD", symbol: "$"}}
 ]
 */
 
 $: data = ""
 
onMount(async function(){
   const res = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
 /* .then(res => {
    data = res.data
  })
  alert(await res.data)*/
  data = await res.data
})
  
</script>

  <div class="content">
  <h1>Cryptocurrency</h1>
  <div class="cryptos">
      {#each data as crypto} 
    <div class="crypto-wrapper">
        <h1>{crypto.name} <img src={crypto.image} alt={crypto.name} /></h1>
        <div class="crypto-prices">
          <div class="buy"> $ {crypto.current_price} </div>
          <div class="sell">$ {crypto.low_24h}</div>
        </div>
    </div>
      {/each}
  </div>
  </div>