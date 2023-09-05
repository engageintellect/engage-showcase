<script>
  import { scramble } from "svelte-typewriter";
  export let inputString = "";
</script>

<p
  use:scramble={{
    interval: 300,
    scrambleDuration: 1000,
    scrambleSlowdown: true,
    delay: 30000,
  }}
>
  {inputString}
</p>
