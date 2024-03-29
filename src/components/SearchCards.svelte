<script lang="ts">
  import { formatTag } from "../utils";
  import FormatDate from "./FormatDate.svelte";
  let searchInput = "";
  let handleSearch: any;
  let allItems: any = [];
  let inputElement: HTMLInputElement;

  export { searchInput, handleSearch, allItems };

  handleSearch = (e: any) => {
    searchInput = e.target.value;
  };

  import { onMount } from "svelte";

  onMount(() => {
    inputElement.focus();
  });
</script>

<div class="flex flex-col max-w-3xl mx-auto">
  <div class="pb-2 sticky top-12 -z-[-1]">
    <input
      type="text"
      id="search"
      class="border border-gray-900 rounded p-2 flex-grow w-full focus:outline-none focus:ring-0 focus:border-gray-900"
      placeholder="Filter Projects"
      on:input={handleSearch}
      bind:value={searchInput}
      bind:this={inputElement}
      autofocus
    />
  </div>

  <div class="overflow-auto snap-mandatory snap-x">
    <div class="flex sm:grid sm:grid-cols-2 gap-2">
      {#each allItems as item}
        {#if item.data.title.toLowerCase().includes(searchInput.toLowerCase())}
          <div
            class="group shadow-md hover:shadow-lg w-80 sm:w-full snap-center transition-shadow duration-300 border rounded border-gray-200 flex flex-col"
          >
            <a
              href={`/project/${item.slug}/`}
              class="flex flex-col h-full w-80 sm:w-full"
            >
              <div
                class="overflow-hidden rounded-t border border-gray-200 relative"
              >
                <img
                  src={item.data.image}
                  alt={item.data.title}
                  class="group-hover:scale-105 group-hover:saturate-150 transition-transform duration-500 h-52 object-cover w-full rounded-t"
                />
              </div>

              <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <div class="flex justify-between items-center">
                    <span
                      class="border border-gray-500 text-xs text-gray-500 p-1 px-2 rounded"
                      >{item.data.category}</span
                    >
                    <div class="text-gray-500 text-xs">
                      <FormatDate date={item.data.pubDate} />
                    </div>
                  </div>

                  <div class="py-2">
                    <div class="text-lg font-bold">{item.data.title}</div>
                    <div class="text-sm font-thin text-gray-500">
                      {item.data.description}
                    </div>
                  </div>
                </div>

                {#if item.data.tags}
                  <div class="">
                    <div class="text-sm text-gray-500 pb-1">Technologies:</div>
                    <div class="overflow-auto">
                      <div class="flex gap-1">
                        {#each item.data.tags as tag}
                          <a
                            href={`/tags/${formatTag(tag)}/`}
                            class="text-sm lowercase bg-gray-200 hover:bg-gray-300 p-1 px-2 rounded text-gray-700"
                          >
                            #{tag}
                          </a>
                        {/each}
                      </div>
                    </div>
                  </div>
                {/if}
              </div>
            </a>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
