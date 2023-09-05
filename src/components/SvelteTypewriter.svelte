<script>
  import { concurrent } from "svelte-typewriter";
  import { loop } from "svelte-typewriter";
  import { scramble } from "svelte-typewriter";
  export let strings = [];
</script>

<div use:scramble={{ interval: 300, scrambleDuration: 1000 }}>{strings}</div>
