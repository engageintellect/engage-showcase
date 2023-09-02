<!-- FormattedDate.svelte -->
<script>
  export let date; // Input property for the date string
</script>

<span>
  {#if date}
    {new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}
  {/if}
</span>
