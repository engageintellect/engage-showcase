<script>
  import { scramble } from "svelte-typewriter";
  export let inputString = "";
</script>

<div
  class="text-xl text-neutral-900/50"
  use:scramble={{
    typeDuration: 300,
    scrambleDuration: 1000,
    scrambleSlowdown: true,
    delay: 1000,
  }}
>
  {inputString}
</div>
