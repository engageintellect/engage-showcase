<script>
  import { scramble } from "svelte-typewriter";
  export let strings = [];
</script>

<div
  class="my-2"
  use:scramble={{
    interval: 300,
    scrambleDuration: 1000,
    scrambleSlowdown: true,
    delay: 30000,
  }}
>
  {strings}
</div>
