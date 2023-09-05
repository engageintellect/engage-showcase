<script>
  import { scramble } from "svelte-typewriter";
  export let inputString = "";
</script>

<p
  class="text-xl"
  use:scramble={{
    interval: 300,
    scrambleDuration: 1000,
    scrambleSlowdown: true,
  }}
>
  {inputString}
</p>
