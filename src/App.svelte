
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
<div class="content">
  <div class="head_container">
    <h1>Cryptocurrency</h1>
    <select on:change={getData} class="currency_type" bind:value={currency}>
      <optgroup>
        <option value="usd">USD</option>
        <option value="cad">CAD</option>
        <option value="eur">EUR</option>
        <option value="php">PHP</option>
      </optgroup>
    </select>
  </div>
  <div class="cryptos">
    {#each data as crypto (crypto)} 
      <Crypto {currency_symbol} {crypto} />
    {/each}
  </div>
  <Footer />
</div>

<style>
 .content {
   position: relative;
   display: grid;
   grid-template-columns: 0.2fr 1fr 0.2fr;
   grid-template-rows: 90px 1fr 140px;
   grid-column: 2/3;
   grid-gap: 30px;
   width: 100%;
   max-width: 2500px;
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

 .content > .head_container {
   grid-column: 2/3;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   background: var(--secondary);
   width: 100%;
 }
 
  .content > .head_container h1 {
    justify-self: center;
    align-self: center;
    font-size: 1.4rem;
    grid-column: 2/3;
    grid-row: 1/2;
    color: white;
  }

  .content > .head_container .currency_type {
    font-size: 0.4rem;
    border: none;
    outline: none;
    color: #ffffff;
    background: none;
  }

  .content > .head_container .currency_type > optgroup {
    font-size: 0.3rem;
    background: var(--secondary);
    border: none;
    outline: none;
    border-radius: 8px;
  }

  @media only screen and (max-width: 700px) {
    .content {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
    }

    .content .head_container {
      padding: 10px 10px;
    }

    .content .head_container h1 {
      font-size: 1.2rem;
    }
  }

</style>
