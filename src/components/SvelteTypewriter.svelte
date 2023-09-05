<script>
  import { scramble } from "svelte-typewriter";
  export let strings = [];
</script>

<div
  class="my-2 text-xl text-neutral-900/70"
  use:scramble={{
    interval: 300,
    scrambleDuration: 1000,
    scrambleSlowdown: true,
    delay: 30000,
  }}
>
  {strings}
</div>
