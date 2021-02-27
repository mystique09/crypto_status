<script>
   export let crypto
   
</script>

<div class="crypto-wrapper">
    <h1>{crypto.name} <img src={crypto.image} alt={crypto.name} /></h1>
    <div class="crypto-prices">
      <div class="buy"> $ {crypto.current_price} </div>
      <div class="sell">$ {crypto.low_24h}</div>
    </div>
    <div class="crypto-prices">
        <div class="buy">$ {crypto.current_price} </div>
        <div class="sell">$ {crypto.low_24h}</div>
    </div>
    <div class="crypto-prices">
        <div class="buy"> $ {crypto.current_price} </div>
        <div class="sell">$ {crypto.low_24h}</div>
    </div>
</div>

<style scoped>

.crypto-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-center;
    margin: 5px;
    width: 100%;
    background: #2b3389;
    color: white;
    padding: 20px 20px;
    border-radius: 9px;
}

  .crypto-wrapper > h1 {
      font-size: 0.9rem;
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
    height: 40px;
    font-size: 0.5rem;
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