import type { SearchClient } from "instantsearch.js";
import InstantSearch from "instantsearch.js/es/lib/InstantSearch";
import { derived, writable, type Writable } from "svelte/store";

let searchStoreInner: Writable<InstantSearch | undefined> = writable();
let searchStore = derived(searchStoreInner, ($search, set) => set($search));

export default function setup(indexName: string, searchClient: any) {
  searchClient = searchClient as SearchClient;

  let search = new InstantSearch({
    indexName,
    routing: true,
    searchClient,
  });
  search.start();

  searchStoreInner.set(search);
}

export { searchStore };
