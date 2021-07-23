<script>
   export let crypto;
   export let currency_symbol;
</script>

<tr class="crypto">
  <td class="align-left"> <img src={crypto.image} alt="icon" /> {crypto.name}</td>
  <td class="price"><span class="currency-symbol">{currency_symbol} </span>{crypto.current_price}</td>
  <td>{crypto.high_24h}</td>
  <td>{crypto.low_24h}</td>
  <td>{crypto.total_supply || 'Not Available'}</td>
  <td>{crypto.total_volume}</td>
</tr>

<style scoped>
  .crypto {
    width: 100%;
    color: #c4c4d0;
    background: var(--bg);
  }

  .crypto img {
    width: 25px;
    height: 25px;
  }

  .crypto td {
    padding: 1rem;
    font-size: 0.9rem;
    text-align: left;
  }

  .crypto td .currency-symbol {
    color: var(--secondary);
  }
  
  .align-left {
    text-align: left;
  }

  @media only screen and (max-width: 845px) {
    .crypto td {
      font-size: 0.7rem;
      padding: 1rem 0.3rem;
    }

    .crypto img {
      width: 10px;
      height: 10px;
    }

    .align-left {
      text-align: left;
    }
  }
</style>