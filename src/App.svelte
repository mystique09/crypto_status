
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
      <tr>
        <td>Coin</td>
        <td class="price">Price</td>
        <td>High 24h</td>
        <td>Low 24h</td>
        <td>Total Supply</td>
        <td>Total Volume</td>
      </tr>
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
    height: 70px;
    background: var(--primary);
    color: var(--ternary);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
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
    width: 100%;
  }
  
  .main .cryptocurreny-list {
    position: relative;
    width: 100%;
    margin-top: 100px;

    border-collapse: collapse;
    border-spacing: none;
    text-align: center;
  }

  .main .cryptocurreny-list .headings {
    color: #c4c4d8;
    background: #1f1f2b;
    font-size: 1.3rem;
    padding: 1.4rem;
    font-weight: 700;
  }

  .main .cryptocurreny-list .headings tr td {
    text-align: left;
    padding: 0.4rem;
  }

  @media only screen and (max-width: 845px) {
    .main {
      width: 100%;
    }
    .main .cryptocurreny-list .headings {
      font-size: 0.9rem;
    }

    .main .cryptocurreny-list {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>