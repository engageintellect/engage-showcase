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
      class="input border border-primary rounded p-2 flex-grow w-full focus:outline-none focus:ring-0 focus:border-primary"
      placeholder="type to filter..."
      on:input={handleSearch}
      bind:value={searchInput}
      bind:this={inputElement}
      autofocus
    />
  </div>

  <div class="overflow-auto snap-mandatory snap-x">
    <div class="flex sm:grid sm:grid-cols-2 gap-2 m-2">
      {#each allItems as item}
        {#if item.data.title.toLowerCase().includes(searchInput.toLowerCase())}
          <div
            class="group shadow-md md:hover:-translate-y-[2px] w-80 sm:w-full snap-center transition-all duration-300 rounded flex flex-col"
          >
            <a
              href={`/project/${item.slug}/`}
              class="flex flex-col h-full w-80 sm:w-full"
            >
              <div class="overflow-hidden rounded-t relative shadow">
                <img
                  src={item.data.image}
                  alt={item.data.title}
                  class=" transition-transform duration-500 h-52 object-cover w-full rounded-t"
                />
              </div>

              <div
                class="flex-1 p-4 flex flex-col justify-between border border-base-300 rounded-b"
              >
                <div>
                  <div class="flex justify-between items-center">
                    <span
                      class="border border-primary text-xs text-primary p-1 px-2 rounded"
                      >{item.data.category}</span
                    >
                    <div class="text-base/50 text-xs">
                      <FormatDate date={item.data.pubDate} />
                    </div>
                  </div>

                  <div class="py-2">
                    <div class="text-lg font-bold">{item.data.title}</div>
                    <div class="text-sm font-thin text-base/50">
                      {item.data.description}
                    </div>
                  </div>
                </div>

                {#if item.data.tags}
                  <div class="">
                    <div class="text-sm text-base/50 pb-1">Technologies:</div>
                    <div class="overflow-auto">
                      <div class="flex gap-1">
                        {#each item.data.tags as tag}
                          <a
                            href={`/tags/${formatTag(tag)}/`}
                            class="text-sm lowercase bg-base-300 hover:bg-base-200 transition-all duration-200 text-base-content p-1 px-2 rounded"
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
