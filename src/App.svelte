
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
  <div class="cryptocurreny-list">
    <!--{#each data as crypto (crypto)} 
      <Crypto {currency_symbol} {crypto} />
    {/each} -->
  </div>
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
    height: 100vh;
  }
</style>
