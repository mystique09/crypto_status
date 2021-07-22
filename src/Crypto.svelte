<script>
   export let crypto;
   export let currency_symbol;
</script>

<tr class="crypto">
  <td><img src={crypto.image} alt="icon" /> {crypto.name}</td>
  <td>{currency_symbol} {crypto.current_price}</td>
  <td>{crypto.high_24h}</td>
  <td>{crypto.low_24h}</td>
  <td>{crypto.total_supply || 'Not Available'}</td>
  <td>{crypto.total_volume}</td>
</tr>

<style scoped>
  .crypto {
    width: 100%;
    color: var(--ternary);
    background: var(--bg);
  }

  .crypto img {
    width: 25px;
    height: 25px;
  }

  .crypto td {
    padding: 1rem;
  }
</style>