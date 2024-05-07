<script>
  import { scramble, concurrent } from "svelte-typewriter";
  export let inputString = "";
  export let typeStyle = "";
</script>

{#if typeStyle === "scramble"}
  <div
    class="text-3xl text-base-content/50 font-thin"
    use:scramble={{
      typeDuration: 500,
      scrambleDuration: 500,
      scrambleSlowdown: true,
      delay: 5000,
    }}
  >
    {inputString}
  </div>
{:else if typeStyle === "concurrent"}
  <div
    class="text-2xl text-base-content/50 font-thin"
    use:concurrent={{
      typeDuration: 100,
      interval: 50,
    }}
  >
    {inputString}
  </div>
{/if}
