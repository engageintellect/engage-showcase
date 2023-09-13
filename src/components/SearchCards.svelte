<script lang="ts">
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

<div class="flex flex-col max-w-4xl mx-auto">
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
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {#each allItems as item}
      {#if item.data.title.toLowerCase().includes(searchInput.toLowerCase())}
        <div
          class="group shadow md:hover:shadow-md transition-shadow duration-300 border rounded border-neutral-900/20"
        >
          <a href={`/project/${item.slug}/`} class="">
            <div class=" overflow-hidden rounded-t relative">
              <img
                src={item.data.image}
                alt=""
                class="md:group-hover:scale-[102%] md:group-hover:saturate-150 transition-all duration-500 h-52 object-cover w-full rounded-t"
              />

              <!-- <div class="flex flex-wrap gap-1 absolute bottom-1 left-1">
                {#each item.data.tags as tag}
                  <div
                    class="text-xs bg-neutral-900 text-white rounded-full py-1 px-2"
                  >
                    #{tag}
                  </div>
                {/each}
              </div> -->
            </div>
            <div
              class=" bg-white p-2 rounded-b border-t border-t-neutral-900/20 w-full"
            >
              <div class="flex gap-2">
                <div class="text-xs font-thin mb-2">
                  <span class="border border-neutral-900 p-1 px-2 rounded"
                    >{item.data.category}</span
                  >
                </div>

                <div class="text-gray-500 text-[.75rem]">
                  <FormatDate date={item.data.pubDate} />
                </div>
              </div>

              <div class="font-semibold text-ellipsis overflow-hidden">
                <div class="flex flex-col">
                  <div class="text-xl">
                    {item.data.title}
                  </div>

                  <div
                    class="text-sm font-thin text-neutral-500 text-ellipsis overflow-hidden"
                  >
                    {item.data.description}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {/if}
    {/each}
  </div>
</div>
