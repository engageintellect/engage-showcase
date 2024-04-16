<!-- SearchFilter.svelte -->
<script lang="ts">
  let searchInput = "";
  let handleSearch: any;
  let allItems: any = [];
  let inputElement: HTMLInputElement;
  let tag = "";

  export let filterCategory: string = "";

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

  const lowercase = (str: string) => {
    return str.toLowerCase();
  };
</script>

<div class="flex flex-col max-w-3xl mx-auto p-2">
  <div class="pb-2 sticky top-12 -z-[-1]">
    <input
      type="text"
      id="search"
      class="input border border-primary rounded p-2 flex-grow w-full focus:outline-none ring-none focus:border-primary"
      placeholder="type to filter..."
      on:input={handleSearch}
      bind:value={searchInput}
      bind:this={inputElement}
      autofocus
    />
  </div>

  <div class="flex flex-col gap-5">
    {#each allItems as item}
      {#if item.data.title.toLowerCase().includes(searchInput.toLowerCase())}
        {#if item.data.category == filterCategory || filterCategory == ""}
          <div class="p-2">
            <!-- <hr /> -->
            <div class="">
              <a
                href={`/${lowercase(item.data.category)}/${formatTag(item.slug)}/`}
                class="flex flex-col gap-5"
              >
                <div class="flex gap-2">
                  <div
                    class="text-xs font-thin flex justify-between w-full items-center gap-2"
                  >
                    <div
                      class="border border-primary text-primary p-1 px-2 rounded"
                    >
                      {item.data.category}
                    </div>

                    <div class="text-base-content/50 text-xs">
                      <FormatDate date={item.data.pubDate} />
                    </div>
                  </div>
                </div>

                <div class="flex flex-col">
                  <div class="text-xl font-bold">{item.data.title}</div>
                  <div class="text-sm font-thin text-base-content/70">
                    {item.data.description}
                  </div>
                </div>

                <div>
                  <div class="text-sm text-base/50">Technologies:</div>

                  {#if item.data.tags}
                    <div class="overflow-auto">
                      <div class="flex gap-1 pb-2 pt-1">
                        {#each item.data.tags as tag}
                          <a
                            href={`/tags/${formatTag(tag)}/`}
                            class="bg-base-300 hover:bg-base-200 transition-all duration-200 text-base-content whitespace-nowrap text-sm font-thin lowercase rounded px-2 py-1"
                          >
                            #{tag}
                          </a>
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>
              </a>
            </div>
            <!-- <div class="border-t border-[.5px] border-primary/20 w-full"></div> -->
          </div>
        {/if}
      {/if}
    {/each}
  </div>
</div>
