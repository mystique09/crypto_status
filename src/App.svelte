
<script>
  import {onMount, tick} from "svelte"
  import Crypto from "./Crypto.svelte"
  import axios from "axios"

  $: data = ""
  $: currency = "usd"
  $: currency_symbol = currency === "usd" ? "$" : "C$"

  async function getData(){
    await tick()
    const res = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
    data = await res.data
  }
 
  onMount(getData)

</script>
<div class="content">
  <div class="head_container">
  <h1>Cryptocurrency</h1>
  <select on:blur={getData} class="currency_type" bind:value="{currency}">
    <optgroup>
      <option value="usd">USD</option>
      <option value="cad">CAD</option>
    </optgroup>
  </select>
</div>
  
  <div class="cryptos">
      {#each data as crypto} 
        <Crypto {currency_symbol} {crypto} />
      {/each}
  </div>
  
</div>

<style>
 .content {
   position: relative;
   display: grid;
   grid-template-columns: 0.5fr 1fr 0.5fr;
   grid-template-rows: 70px 1fr;
   grid-gap: 50px;
   width: 100%;
 }
 
 .content .cryptos {
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   grid-column: 2/3;
   grid-row: 2/4;
   width: 100%;
   max-width: 1000px;
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
  
</style>
