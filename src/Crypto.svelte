<script>
   export let crypto
   export let currency_symbol
</script>

<div class="crypto-wrapper">
    <h1>{crypto.name} <img src={crypto.image} alt={crypto.name} /></h1>
    <div class="crypto-prices">
      <div class="crypto-prices-content buy"><span>Current price</span> <p>{currency_symbol}{crypto.current_price}</p></div>
      <div class="crypto-prices-content low24"><span>Low 24 hours</span> <p>{currency_symbol}{crypto.low_24h}</p></div>
      <div class="crypto-prices-content high24"><span>High 24 hours</span> <p>{currency_symbol}{crypto.high_24h}</p></div>
      <div class="crypto-prices-content total_supply"><span>Total supply</span> <p>{crypto.total_supply || "Not available"}</p></div>
    </div>
</div>

<style scoped>

.crypto-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5px;
    width: 100%;
    height: 190px;
    background: /*#2b3389*/var(--secondary);
    color: white;
    padding: 20px 20px;
    border-radius: 9px;
    transition: transform 0.3s ease-in-out;
}

.crypto-wrapper:hover {
  transform: scale(1.1);
}

  .crypto-wrapper > h1 {
      font-size: 0.6rem;
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-self: center;
      align-self: center;
  }

  .crypto-wrapper > h1::after {
    content: "";
    position: relative;
    background: grey;
    height: 100%;
    width: 2px;
    top: 0;
    right: -10px;
  }
  
  .crypto-wrapper > h1 > img {
    position: relative;
    height: 30px;
    width: 30px;
  }
  
  .crypto-wrapper .crypto-prices {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    font-size: 0.6rem;
    margin-left: 20px;
  }
  
  .crypto-prices .buy p, .crypto-prices .crypto-prices-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .crypto-prices .crypto-prices-content span {
    font-size: 0.5rem;
  }

  .crypto-prices .crypto-prices-content p {
    font-size: 0.4rem;
    color: rgb(166 182 183);
  }

</style>