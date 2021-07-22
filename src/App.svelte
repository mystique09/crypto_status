
<script>
  import {onMount, tick} from "svelte";
  import Crypto from "./Crypto.svelte";
  import Footer from "./Footer.svelte";
  import axios from "axios";

  let currencies = [["usd", "$"], ["cad", "C$"], ["eur", "€"], ["php", "₱"]];
  $:  data = "";
  $: currency = "usd";
  $: currency_symbol = currencies.filter((currency_name, index) => currency_name[0] === currency).join(",").split(",")[1];

  async function getData(){
    await tick();
    const res = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`);
    data = await res.data;
  }
 
  onMount(getData);
</script>
<div class="navbar">
  <h1>Cryptocurrency</h1>
  <select on:change={getData} class="currency" bind:value={currency}>
    <optgroup>
      <option value="usd">USD</option>
      <option value="cad">CAD</option>
      <option value="eur">EUR</option>
      <option value="php">PHP</option>
    </optgroup>
  </select>
</div>
<div class="main">
  <table class="cryptocurreny-list">
    <thead class="headings">
      <tr>Coin</tr>
      <tr class="price">Price</tr>
      <tr>High 24h</tr>
      <tr>Low 24h</tr>
      <tr>Total Supply</tr>
      <tr>Total Volume</tr>
    </thead>
    <tbody>
      {#each data as crypto (crypto)} 
      <Crypto {currency_symbol} {crypto} />
    {/each}
    </tbody>
  </table>
</div>
<Footer />

<style>
  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background: var(--primary);
    color: var(--ternary);
  }

  .navbar h1 {
    color: var(--highlight);
  }

  .currency {
    background: var(--secondary);
    outline: none;
    border: none;
    color: var(--ternary);
  }

  .currency:focus {
    outline: none;
    border: none;
  }

  .main {
    height: auto;
  }
  
  .main .cryptocurreny-list {
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main .cryptocurreny-list .headings {
    color: var(--ternary);
    background: var(--secondary);
    font-size: 1rem;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    gap: 6rem;
    padding: 1rem 2rem;
  }

  .main .cryptocurreny-list .headings tr {
    margin: 4px;
  }
</style>
