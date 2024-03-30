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

<div class="flex flex-col max-w-3xl mx-auto p-2">
  <div class="pb-2 sticky top-12 -z-[-1]">
    <input
      type="text"
      id="search"
      class="border border-gray-900 rounded p-2 flex-grow w-full focus:outline-none ring-none focus:border-gray-900"
      placeholder="Filter Feed"
      on:input={handleSearch}
      bind:value={searchInput}
      bind:this={inputElement}
      autofocus
    />
  </div>

  <div class="flex flex-col gap-5">
    {#each allItems as item}
      {#if item.data.title.toLowerCase().includes(searchInput.toLowerCase())}
        {#if item.data.category != "Project"}
          <div class="p-2">
            <!-- <hr /> -->
            <div class="">
              <a href={`/article/${formatTag(item.slug)}/`} class="">
                <div class="flex gap-2">
                  <div class="text-xs font-thin mb-2 flex items-center gap-2">
                    <div
                      class="border border-gray-500 text-gray-500 p-1 px-2 rounded"
                    >
                      {item.data.category}
                    </div>

                    <div class="text-gray-500 text-xs">
                      <FormatDate date={item.data.pubDate} />
                    </div>
                  </div>
                </div>

                <div class="flex flex-col">
                  <div class="text-xl font-bold">{item.data.title}</div>
                  <div class="text-sm font-thin text-gray-500">
                    {item.data.description}
                  </div>
                </div>
              </a>

              <div class="text-sm pt-2 text-gray-500">Technologies:</div>

              {#if item.data.tags}
                <div class="overflow-auto">
                  <div class="flex gap-1 pb-2 pt-1">
                    {#each item.data.tags as tag}
                      <a
                        href={`/tags/${formatTag(tag)}/`}
                        class="bg-gray-200 whitespace-nowrap md:hover:bg-gray-300 text-sm font-thin lowercase rounded px-2 py-1 text-gray-700"
                      >
                        #{tag}
                      </a>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
            <!-- <div class="border-t border-[.5px] border-gray-200 w-full"></div> -->
          </div>
        {/if}
      {/if}
    {/each}
  </div>
</div>
