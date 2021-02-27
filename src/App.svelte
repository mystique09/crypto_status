<style>
  :root {
    font-size: 32px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
 .content {
   position: absolute;
   display: grid;
   grid-template-columns: 0.5fr 1fr 0.5fr;
   grid-template-rows: 70px 1fr;
   grid-gap: 20px;
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
 
  .content > h1 {
    justify-self: center;
    align-self: center;
    font-size: 1.4rem;
    grid-column: 2/3;
    grid-row: 1/2;
  }
  
</style>

<script>
  import {onMount} from "svelte"
  import Crypto from "./Crypto.svelte"
  import axios from "axios"

  $: data = ""
  $: currency = "usd"
 
  onMount(async function(){
    const res = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
    data = await res.data
  })
</script>
<div class="content">
  <h1>Cryptocurrency</h1>
  <select bind:value="{currency}">
    <option value="usd">USD</option>
    <option value="cad">CAD</option>
  </select>
  <div class="cryptos">
      {#each data as crypto} 
        <Crypto {crypto} />
      {/each}
  </div>
</div>