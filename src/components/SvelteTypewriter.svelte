<script>
  import { concurrent } from "svelte-typewriter";
  import { loop } from "svelte-typewriter";
  import { scramble } from "svelte-typewriter";
  export let strings = [];
</script>

<p use:scramble={{ interval: 300, scrambleDuration: 1000 }}>{strings}</p>
