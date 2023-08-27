import type { SearchClient } from "instantsearch.js";
import InstantSearch from "instantsearch.js/es/lib/InstantSearch";
import { derived, writable, type Writable, type Readable } from "svelte/store";

let searchStoreInner: Writable<InstantSearch> = writable();

export function setClient(indexName: string, searchClient: any) {
  searchClient = searchClient as SearchClient;

  let search = new InstantSearch({
    indexName,
    routing: true,
    searchClient,
  });
  search.start();

  searchStoreInner.set(search);
}

export const searchStore: Readable<InstantSearch> = derived(searchStoreInner, ($search, set) => set($search));
