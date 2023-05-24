import type { SearchClient } from "instantsearch.js";
import InstantSearch from "instantsearch.js/es/lib/InstantSearch";

import { writable, type Writable } from "svelte/store";

let searchStore: Writable<InstantSearch | undefined> = writable();

export default function setup(indexName: string, searchClient: any) {
  searchClient = searchClient as SearchClient;

  let search = new InstantSearch({
    indexName,
    routing: true,
    searchClient,
  });
  search.start();

  searchStore.set(search);
}

export { searchStore };
