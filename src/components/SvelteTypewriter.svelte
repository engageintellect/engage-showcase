<script>
  import { scramble } from "svelte-typewriter";
  import { concurrent } from "svelte-typewriter";
  export let inputString = "";
</script>

<div
  class="text-xl text-neutral-900/70 flex items-center"
  use:concurrent={{
    interval: 300,
    scrambleDuration: 1000,
    scrambleSlowdown: true,
    delay: 30000,
  }}
>
  {inputString}
</div>
