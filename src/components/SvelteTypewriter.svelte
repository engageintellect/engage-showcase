<script>
  import { scramble, concurrent } from "svelte-typewriter";
  export let inputString = "";
  export let typeStyle = "";
</script>

{#if typeStyle === "scramble"}
  <div
    class="text-2xl text-gray-500 font-thin"
    use:scramble={{
      typeDuration: 1000,
      scrambleDuration: 1500,
      scrambleSlowdown: true,
      delay: 5000,
    }}
  >
    {inputString}
  </div>
{:else if typeStyle === "concurrent"}
  <div
    class="text-2xl text-gray-900/50"
    use:concurrent={{
      typeDuration: 100,
      interval: 50,
    }}
  >
    {inputString}
  </div>
{/if}
