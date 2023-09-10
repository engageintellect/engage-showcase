<script>
  import { scramble, concurrent } from "svelte-typewriter";
  export let inputString = "";
  export let typeStyle = "";
</script>

{#if typeStyle === "scramble"}
  <div
    class="text-xl text-neutral-900/50"
    use:scramble={{
      typeDuration: 300,
      scrambleDuration: 1000,
      scrambleSlowdown: true,
      delay: 3000,
    }}
  >
    {inputString}
  </div>
{:else if typeStyle === "concurrent"}
  <div
    class="text-xl text-neutral-900/50"
    use:concurrent={{
      typeDuration: 100,
      interval: 50,
    }}
  >
    {inputString}
  </div>
{/if}
