<!-- SearchFilter.svelte -->
<script lang="ts">
  let searchInput = "";
  let handleSearch: any;
  let allItems: any = [];
  let inputElement: HTMLInputElement;
  import FormatDate from "./FormatDate.svelte";
  import { formatTag } from "../utils";
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
  <div class="mb-2 sticky top-14 -z-[-1]">
    <input
      type="text"
      id="search"
      class="border border-neutral-900 rounded p-2 flex-grow w-full focus:outline-none ring-none focus:border-neutral-900"
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
        <!-- <hr /> -->
        <div class="my-5">
          <a href={`/project/${formatTag(item.slug)}/`} class="">
            <div class="flex gap-2">
              <div class="text-xs font-thin mb-2">
                <span class="border border-neutral-900 p-1 px-2 rounded"
                  >{item.data.category}</span
                >
              </div>

              <div class="text-gray-500 text-xs">
                <FormatDate date={item.data.pubDate} />
              </div>
            </div>

            <div class="flex flex-col my-2">
              <div class="text-xl font-bold">{item.data.title}</div>
              <div class="text-sm font-thin text-neutral-500">
                {item.data.description}
              </div>
            </div>
          </a>

          {#if item.data.tags}
            <div class="mt-2 flex flex-wrap gap-1">
              {#each item.data.tags as tag}
                <a
                  href={`/tags/${formatTag(tag)}/`}
                  class="bg-gray-200 md:hover:bg-gray-300 text-xs rounded px-2 py-1 text-gray-700"
                >
                  #{tag}
                </a>
              {/each}
            </div>
          {/if}
        </div>
        <hr />
      </div>
    {/if}
  {/each}
</div>
