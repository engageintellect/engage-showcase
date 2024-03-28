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

<div class="flex flex-col max-w-4xl mx-auto">
  <div class="mb-2 sticky top-14 -z-[-1]">
    <input
      type="text"
      id="search"
      class="border border-gray-900 rounded p-2 flex-grow w-full focus:outline-none ring-none focus:border-gray-900"
      placeholder="Search"
      on:input={handleSearch}
      bind:value={searchInput}
      bind:this={inputElement}
      autofocus
    />
  </div>

  <div class="overflow-auto snap-mandatory snap-x">
    <div class="flex sm:grid sm:grid-cols-2 gap-2 md:gap-5">
      {#each allItems as item}
        {#if item.data.title.toLowerCase().includes(searchInput.toLowerCase())}
          <div
            class="group shadow md:hover:shadow-md w-80 sm:w-full snap-center transition-shadow duration-300 border rounded border-gray-900/20"
          >
            <a href={`/project/${item.slug}/`} class="">
              <div
                class="overflow-hidden rounded-t border-b w-80 sm:w-full border-b-gray-900/20"
              >
                <img
                  src={item.data.image}
                  alt=""
                  class="md:group-hover:scale-[102%] md:group-hover:saturate-150 transition-all duration-500 h-52 object-cover w-full rounded-t"
                />
              </div>

              <div class="p-2 flex flex-col justify-between h-56 sm:h-52">
                <div class="flex gap-2 items-center">
                  <div class="text-xs font-thin my-2">
                    <span
                      class="border border-gray-500 font-semibold text-gray-500 p-1 px-2 rounded"
                      >{item.data.category}</span
                    >
                  </div>

                  <div class="text-gray-500 text-xs">
                    <FormatDate date={item.data.pubDate} />
                  </div>
                </div>

                <div class="flex flex-col py-2">
                  <div class="text-xl font-bold">{item.data.title}</div>
                  <div class="text-sm font-thin text-gray-500 line-clamp-3">
                    {item.data.description}
                  </div>
                </div>

                <div>
                  {#if item.data.tags}
                    <div class="text-xs pt-2 text-gray-500 pb-1">
                      Technologies:
                    </div>

                    <div class="overflow-auto">
                      <div class="flex gap-1">
                        {#each item.data.tags as tag}
                          <a
                            href={`/tags/${formatTag(tag)}/`}
                            class="text-xs bg-gray-200 sm:hover:bg-gray-300 p-1 px-2 rounded"
                          >
                            {tag}
                          </a>
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>
              </div>
            </a>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
