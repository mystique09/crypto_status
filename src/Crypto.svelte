<script>
   export let crypto;
   export let currency_symbol;
</script>

<div class="crypto">
    <h1>{crypto.name} <img src={crypto.image} alt={crypto.name} /></h1>
    <div class="crypto-prices">
      <div class="crypto-prices-content buy"><span>Current price</span> <p>{currency_symbol}{crypto.current_price}</p></div>
      <div class="crypto-prices-content low24"><span>Low 24 hours</span> <p>{currency_symbol}{crypto.low_24h}</p></div>
      <div class="crypto-prices-content high24"><span>High 24 hours</span> <p>{currency_symbol}{crypto.high_24h}</p></div>
      <div class="crypto-prices-content total_supply"><span>Total supply</span> <p>{crypto.total_supply || "Not available"}</p></div>
    </div>
</div>

<style scoped>
  .crypto {
    width: 100%;
    height: 250px;
  }
</style>