<!-- SearchFilter.svelte -->
<script lang="ts">
  let searchInput = "";
  let handleSearch: any;
  let allItems: any = [];
  let inputElement: HTMLInputElement;
  import FormatDate from "./FormatDate.svelte";

  export { searchInput, handleSearch, allItems };

  handleSearch = (e: any) => {
    searchInput = e.target.value;
  };

  import { onMount } from "svelte";

  onMount(() => {
    inputElement.focus();
  });
</script>

<div class="flex flex-col max-w-4xl mx-auto p-2">
  <div class="mb-2 sticky top-14">
    <input
      type="text"
      id="search"
      class="border border-gray-300 rounded p-2 flex-grow w-full focus:outline-none focus:ring-red-500 ring-none focus:border-neutral-900"
      placeholder="Search"
      on:input={handleSearch}
      bind:value={searchInput}
      bind:this={inputElement}
      autofocus
    />
  </div>

  {#each allItems as item}
    {#if item.data.title.toLowerCase().includes(searchInput.toLowerCase())}
      <div class="">
        <hr />
        <a href={`/project/${item.slug}/`} class="">
          <div class="my-5">
            <div class="text-xs font-thin mb-2">
              <span class="border p-1 rounded">{item.data.category}</span>
            </div>
            <div class="flex">
              <div class="text-xl font-bold">{item.data.title}</div>
            </div>
            <div class="text-gray-500 text-sm">
              <FormatDate date={item.data.pubDate} />
            </div>

            {#if item.data.tags}
              <div class="mt-2 flex flex-wrap gap-1">
                {#each item.data.tags as tag}
                  <div
                    class="bg-gray-200 text-xs rounded px-2 py-1 text-gray-700"
                  >
                    #{tag}
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        </a>
        <hr />
      </div>
    {/if}
  {/each}
</div>
